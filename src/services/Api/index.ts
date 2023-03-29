import axios from "axios";
const Api = axios.create({
  baseURL: `http://localhost:3005`,
  timeout: 2000,
});

export default Api;
