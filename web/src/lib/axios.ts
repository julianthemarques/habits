import axios from "axios";

export const api = axios.create({
  baseURL: 'https://habits-juba.vercel.app:3333'
})