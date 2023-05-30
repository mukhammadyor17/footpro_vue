import api from "./api";

const StadiumService = {
  get() {
    return api.get("/Stadium/GetAll");
  },
  create(payload) {
    return api.post("/Stadium/Create", payload);
  },
  update(payload) {
    return api.put("/Stadium/Update", payload);
  },
  delete(params) {
    return api.delete("/Stadium/Delete", { params });
  }
};

export default StadiumService;
