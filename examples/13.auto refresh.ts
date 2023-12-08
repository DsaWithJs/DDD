import fastify from "fastify";

// Define a type for the token response
type TokenResponse = string | { errorCode: number; message: string };

// Function to simulate an API call to get a new token
async function fetchNewToken(): Promise<TokenResponse> {
  // Implement the actual API call to refresh the token
  // For demonstration, this function randomly returns an error object
  if (Math.random() < 0.3) {
    return { errorCode: 400, message: "Internal server error" };
  }
  return "newToken123";
}

// Function to attempt fetching the token with retries
async function fetchTokenWithRetries(maxRetries: number, retryDelay: number): Promise<string | null> {
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    const response = await fetchNewToken();

    if (typeof response === "string") {
      // Successful token fetch
      return response;
    } else {
      // Log the error message
      console.error(`Attempt ${attempt + 1} failed: ${response.message}`);
      if (attempt < maxRetries - 1) {
        await new Promise((resolve) => setTimeout(resolve, retryDelay));
      }
    }
  }

  // All attempts failed
  console.error("All token fetch attempts failed");
  return null;
}

// Function to refresh the token periodically
async function startTokenRefresh() {
  let token: string | null = null;

  const refresh = async () => {
    const newToken = await fetchTokenWithRetries(3, 1000); // 3 attempts, 1 second delay
    if (newToken) {
      console.log("Token refreshed:", newToken);
      token = newToken;
    } else {
      console.error("Failed to refresh token after all retries.");
    }
  };

  // Fetch the new token initially
  await refresh();

  // Set up interval to refresh the token
  setInterval(refresh, 15 * 60 * 1000); // 15 minutes
}

const app = fastify({ logger: true });

// Register routes and other Fastify setup...

// Start the server
const start = async () => {
  try {
    await app.listen(3000);
    console.log(`Server listening on ${app.server.address().port}`);
    startTokenRefresh();
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
