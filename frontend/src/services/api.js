import axios from "axios";

const api = axios.create({
  baseURL: "http://3.23.103.6/api",
});

export default api;
