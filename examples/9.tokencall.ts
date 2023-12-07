import axios from "axios";
import { FastifyReply } from "fastify";

// Define a type for the expected response structure, if known
interface TokenResponse {
  token: string;
}

// Asynchronous function to get the token, now with FastifyReply
export async function getToken(url: string, reply: FastifyReply): Promise<string> {
  try {
    const response = await axios.get<TokenResponse>(url);
    return response.data.token;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Use the HTTP status code from the Axios error if available
      const statusCode = error.response?.status || 500;
      reply.code(statusCode).send("Failed to retrieve token: " + error.message);
    } else {
      // Non-Axios error: reply with a generic 500 status code
      reply.code(500).send("Internal server error");
    }
    throw error; // Re-throw the error to stop further execution in the calling function
  }
}



fastify.addHook('preHandler', async (request, reply, done) => {
  const token = await getToken();
  if (!token) {
      // If token is not received, send an error response
      reply.code(401).send({ error: 'Unable to authenticate' });
      return;
  }
  // Add token to request for further use
  request.token = token;
  done(); // Proceed to the next handler
});