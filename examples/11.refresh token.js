// Function to refresh the token periodically
async function startTokenRefresh() {
  // Fetch the new token initially
  let token = await fetchNewToken();
  console.log("Initial token:", token);

  // Set up a 15-minute interval to refresh the token
  setInterval(async () => {
    token = await fetchNewToken();
    console.log("Token refreshed:", token);
    // Store the new token in a place where your API handlers can access it
  }, 15 * 60 * 1000); // 15 minutes
}
