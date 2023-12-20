import axios from "axios";

// Determine the base URL based on the environment
const baseURL = process.env.REACT_APP_API_BASE_URL;

// Create an Axios instance with the base URL and additional configurations
const axiosInstance = axios.create({
  baseURL: baseURL,
  // Additional Axios configurations
  timeout: 10000, // 10 seconds timeout
  headers: {
    "Content-Type": "application/json",
    // Other headers can be added here
  },
});

// Optionally, add interceptors for request and response
axiosInstance.interceptors.request.use(
  (request) => {
    // Modify request here if needed
    return request;
  },
  (error) => {
    // Handle request error here
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    // Modify response here if needed
    return response;
  },
  (error) => {
    // Handle response error here
    return Promise.reject(error);
  }
);

export default axiosInstance;
