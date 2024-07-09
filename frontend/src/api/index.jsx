import axios from "axios";

const api = axios.create({
  baseURL: "https://task-scheduler-i468.onrender.com/api",
});
export default api;
