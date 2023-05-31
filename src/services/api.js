import axios from "axios";
import TokenService from "./token";
import router from "src/router";
import { notify } from "src/boot/notify";

const api = axios.create({
  baseURL: "https://footprotest-001-site1.htempurl.com",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
});

api.interceptors.request.use(
  (config) => {
    const token = TokenService.get();

    if (!token) {
      config.headers.Authorization = undefined;
    } else {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      notify.show("Autorize error!", "negative");
      router.push("/auth");
      TokenService.remove();
    }
    return Promise.reject(error);
  }
);

export default api;
