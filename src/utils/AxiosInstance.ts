import axios from "axios";

export const Instance = axios.create({
  baseURL: "http://localhost:3000",
  headers: { "Content-Type": "application/json" },
  // TypeFile
  // headers: { "Content-Type": "multipart/form-data" },
});
