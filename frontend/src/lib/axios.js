import axios from "axios";

// Set base URL based on environment since there is no localhost in production
const BASE_URL =
  import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api";
const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
