const apiConfig = {
  baseURL: import.meta.env.VITE_API_BASE_URL || "https://api.example.com",
  timeout: 1000 * 15, 
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false,
};

export default apiConfig;
