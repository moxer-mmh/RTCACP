import axios from "axios";

const db = axios.create({
  baseURL: "http://localhost:5000",
});

export default db;
