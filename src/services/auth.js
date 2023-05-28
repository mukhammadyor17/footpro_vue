import api from "./api";

const AuthService = {
  login(data) {
    return api.post("/Auth/Authenticate", data);
  }
};

export default AuthService;
