import axios from "axios";
import TokenService from "./token";

const token = TokenService.get();

const api = axios.create({
  baseURL: "http://footprotest-001-site1.htempurl.com",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${token || ""}`
  }
});

export default api;
