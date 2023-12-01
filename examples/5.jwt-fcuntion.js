const fastify = require("fastify")();
const jwt = require("jsonwebtoken");
const jwksRsa = require("jwks-rsa");

// Initialize the JWKS client
const client = jwksRsa({
  jwksUri: "https://your-auth-domain/.well-known/jwks.json",
});

// Function to retrieve the signing key
const getSigningKey = async (kid) => {
  const key = await client.getSigningKeyAsync(kid);
  return key.getPublicKey();
};

// JWT Verification Function with expanded error handling
const verifyJWT = async (request, reply) => {
  const token = request.headers.authorization?.split(" ")[1];

  if (!token) {
    reply.code(401).send({ error: "No token provided" });
    return;
  }

  let decodedToken;
  try {
    decodedToken = jwt.decode(token, { complete: true });
    if (!decodedToken || !decodedToken.header.kid) {
      reply.code(400).send({ error: "Invalid token format" });
    }
  } catch (err) {
    reply.code(400).send({ error: "Invalid token format" });
    return;
  }

  try {
    const key = await getSigningKey(decodedToken.header.kid);
    const verifiedToken = jwt.verify(token, key, { algorithms: ["RS256"] });

    // Additional claim checks (issuer, audience, etc.) can be added here

    request.user = verifiedToken;
  } catch (err) {
    if (err instanceof jwt.TokenExpiredError) {
      reply.code(401).send({ error: "Token expired" });
    } else if (err instanceof jwt.JsonWebTokenError) {
      reply.code(401).send({ error: "Invalid token" });
    } else {
      // Handle other errors (like network errors)
      reply.code(500).send({ error: "Internal Server Error" });
    }
    return;
  }
};

// Register the verifyJWT function as a global preValidation hook
fastify.addHook("preValidation", verifyJWT);

// Define your routes
fastify.get("/example", async (request, reply) => {
  return { message: "This is a protected route" };
});

// More routes can be added here, all protected by the verifyJWT middleware

// Start the server
fastify.listen(3000, (err) => {
  if (err) throw err;
  console.log(`Server listening on ${fastify.server.address().port}`);
});
