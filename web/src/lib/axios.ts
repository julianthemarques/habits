import axios from "axios";

export const api = axios.create({
  baseURL: "http://habits-production-39f5.up.railway.app",
});
