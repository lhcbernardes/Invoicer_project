import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:9000/",
});
// https://invoicer-api.vercel.app
export default api;