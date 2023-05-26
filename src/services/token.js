const TokenService = {
  get() {
    return localStorage.getItem("token");
  },
  save(token) {
    localStorage.setItem("token", token);
  },
  remove() {
    localStorage.removeItem("token");
  }
};

export default TokenService;
