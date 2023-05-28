const TokenService = {
  get() {
    return localStorage.getItem("token");
  },
  save(token) {
    localStorage.setItem("token", token);
  },
  remove() {
    localStorage.removeItem("token");
  },
  getUser() {
    return JSON.parse(localStorage.getItem("user"));
  },
  saveUser(user) {
    localStorage.setItem("user", JSON.stringify(user));
  },
  removeUser() {
    localStorage.removeItem("user");
  }
};

export default TokenService;
