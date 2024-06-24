import axios from "axios";

const accountsApi = axios.create({
  baseURL: "http://localhost:3500",
});

export default accountsApi;
