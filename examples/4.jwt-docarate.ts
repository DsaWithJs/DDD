const fastify = require("fastify")();
const jwt = require("jsonwebtoken");
const jwksClient = require("jwks-rsa").default;

// Initialize the JWKS client
const client = jwksClient({
  jwksUri: "https://your-auth-domain/.well-known/jwks.json", // Replace with your JWKS URI
});

// Function to retrieve the signing key using async/await
const getSigningKey = async (kid) => {
  const key = await client.getSigningKeyAsync(kid);
  return key.getPublicKey();
};

// Decorator for JWT verification
fastify.decorate("verifyJWT", async function (request, reply) {
  const token = request.headers.authorization?.split(" ")[1]; // Assuming token is in the Authorization header as 'Bearer <token>'

  if (!token) {
    throw new Error("No token provided");
  }

  let decodedToken;
  try {
    decodedToken = jwt.decode(token, { complete: true });
  } catch (err) {
    throw new Error("Invalid token");
  }

  if (!decodedToken || !decodedToken.header.kid) {
    throw new Error("Invalid token");
  }

  try {
    const key = await getSigningKey(decodedToken.header.kid);
    const verifiedToken = jwt.verify(token, key, { algorithms: ["RS256"] });
    request.user = verifiedToken;
  } catch (err) {
    throw new Error("Token verification failed");
  }
});

// Add a protected route
fastify.get("/protected", async (request, reply) => {
  try {
    await fastify.verifyJWT(request, reply);
    reply.send({ data: "Protected content", user: request.user });
  } catch (err) {
    reply.send(err);
  }
});

// Start the server
fastify.listen(3000, (err) => {
  if (err) throw err;
  console.log(`Server listening on ${fastify.server.address().port}`);
});
