import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_MALGA_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false,
});

export default api;
