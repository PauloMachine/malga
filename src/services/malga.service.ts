import axios from "axios";

const api = axios.create({
  baseURL: "https://malga-api.vercel.app",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false,
});

export default api;
