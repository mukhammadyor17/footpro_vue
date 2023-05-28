import api from "./api";

const StadiumService = {
  get() {
    return api.get("/Stadium/GetAll");
  }
};

export default StadiumService;
