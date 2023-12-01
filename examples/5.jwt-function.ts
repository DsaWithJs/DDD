import fastify from "fastify";
import jwt, { JwtPayload } from "jsonwebtoken";
import JWKSClient from "jwks-rsa";

const app = fastify();

// Initialize the JWKS client
const client = JWKSClient({
  jwksUri: "https://your-auth-domain/.well-known/jwks.json", // Replace with your JWKS URI
});

// Function to retrieve the signing key using async/await
const getSigningKey = async (kid: string): Promise<string> => {
  const key = await client.getSigningKeyAsync(kid);
  return key.getPublicKey();
};

// JWT Verification Function
const verifyJWT = async (request: fastify.FastifyRequest, reply: fastify.FastifyReply): Promise<void> => {
  if (process.env.NODE_ENV === "development") {
    return;
  }

  const authHeader = request.headers.authorization;
  const token = authHeader?.split(" ")[1];

  if (!token) {
    reply.status(401).send({ error: "No token provided" });
    return;
  }

  let decodedToken: JwtPayload | null;
  try {
    decodedToken = jwt.decode(token, { complete: true }) as JwtPayload | null;
  } catch (err) {
    reply.status(400).send({ error: "Invalid token" });
    return;
  }

  if (!decodedToken || !decodedToken.header.kid) {
    reply.status(400).send({ error: "Invalid token" });
    return;
  }

  try {
    const key = await getSigningKey(decodedToken.header.kid);
    jwt.verify(token, key, { algorithms: ["RS256"] });
    // Add user to request context
    request.user = decodedToken.payload;
  } catch (err) {
    reply.status(401).send({ error: "Token verification failed" });
    return;
  }
};

app.decorateRequest("user", null);

// Add a protected route using preValidation
app.get("/protected", { preValidation: verifyJWT }, async (request, reply) => {
  reply.send({ data: "Protected content", user: request.user });
});

// Start the server
app.listen(3000, (err, address) => {
  if (err) throw err;
  console.log(`Server listening at ${address}`);
});
