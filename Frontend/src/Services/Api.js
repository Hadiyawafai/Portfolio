import axios from "axios";

const api = axios.create({
  baseURL: "https://portfolio-5-wz74.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;