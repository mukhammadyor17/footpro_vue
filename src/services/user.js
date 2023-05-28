import api from "./api";

const UserService = {
  get() {
    return api.get("/Auth/GetAll");
  },
  create(data) {
    return api.post("/Auth/GetAll", data);
  },
  update({ id, data }) {
    return api.get("/Auth/GetAll", data);
  },
  block(id) {
    return api.get("/Auth/GetAll");
  }
};

export default UserService;
