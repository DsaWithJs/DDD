const axios = require("axios");

async function fetchAllRecords(baseUrl, endpoint) {
  try {
    // Step 1: Initial API call with page_offset=0 and page_size_limit=50
    const initialResponse = await axios.get(`${baseUrl}${endpoint}?page_offset=0&page_size_limit=50`);
    const totalCount = initialResponse.data.totalCount;

    // Check if 'records' exists and if the initial call returned any records
    const records = Array.isArray(initialResponse.data.records) ? initialResponse.data.records : [];
    if (records.length === 0 || totalCount === 0) {
      console.log("No records found or total count is zero.");
      return initialResponse.data;
    }

    // Step 2: Calculate how many additional calls are needed
    const pageSize = 50;
    const totalCalls = Math.ceil((totalCount - pageSize) / pageSize);
    const requests = [];

    for (let i = 1; i <= totalCalls; i++) {
      const offset = pageSize * i;
      requests.push(axios.get(`${baseUrl}${endpoint}?page_offset=${offset}&page_size_limit=50`));
    }

    // Step 3: Make parallel API calls
    const results = await Promise.allSettled(requests);

    // Step 4: Process results and update records in initial response
    results.forEach((result) => {
      if (result.status === "fulfilled") {
        records.push(...result.value.data.records);
      } else {
        console.error("A request failed:", result.reason);
      }
    });

    return initialResponse.data;
  } catch (error) {
    // Handle errors, such as network issues or server errors
    console.error("Error fetching records:", error);
    throw error;
  }
}

// Example usage
fetchAllRecords("http://api.example.com", "/records")
  .then((allData) => console.log("Fetched data:", allData))
  .catch((error) => console.error("Error:", error));
