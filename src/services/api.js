import axios from "axios";
// const DEV = 'http://127.0.0.1:9000/';
const PRD = 'https://invoicer-api.vercel.app';
const api = axios.create({
  baseURL: PRD,
});

export default api;