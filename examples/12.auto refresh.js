const fastify = require("fastify")({ logger: true });

// Function to simulate an API call to get a new token
async function fetchNewToken() {
  // Implement the actual API call to refresh the token
  // For demonstration, this function randomly throws an error
  if (Math.random() < 0.3) {
    // Adjust the probability as needed
    throw new Error("Simulated token fetch error");
  }
  return "newToken123";
}

// Function to attempt fetching the token with retries
async function fetchTokenWithRetries(maxRetries, retryDelay) {
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      return await fetchNewToken();
    } catch (error) {
      console.error(`Attempt ${attempt + 1} failed: ${error.message}`);
      if (attempt < maxRetries - 1) {
        await new Promise((resolve) => setTimeout(resolve, retryDelay));
      }
    }
  }
  throw new Error("All token fetch attempts failed");
}

// Function to refresh the token periodically
async function startTokenRefresh() {
  let token;

  const refresh = async () => {
    try {
      token = await fetchTokenWithRetries(3, 1000); // 3 attempts, 1 second delay
      console.log("Token refreshed:", token);
    } catch (error) {
      console.error("Failed to refresh token:", error.message);
      // The error is logged, but the server will continue running and try again
    }
  };

  // Fetch the new token initially
  await refresh();

  // Set up interval to refresh the token
  setInterval(refresh, 15 * 60 * 1000); // 15 minutes
}

// Register routes and other Fastify setup...

// Start the server
const start = async () => {
  try {
    await fastify.listen(3000);
    console.log(`Server listening on ${fastify.server.address().port}`);
    startTokenRefresh();
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
