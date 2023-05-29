import api from "./api";

const StadiumService = {
  get() {
    return api.get("/Stadium/GetAll");
  },
  create(payload) {
    return api.post("/Stadium/Create", payload);
  }
};

export default StadiumService;
