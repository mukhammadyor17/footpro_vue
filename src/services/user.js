import api from "./api";

const UserService = {
  get() {
    return api.get("/Auth/GetAll");
  },
  create(data) {
    return api.post("/Auth/Register", data);
  },
  update({ id, data }) {
    return api.get("/Auth/UpdateUser", data);
  },
  block(id) {
    return api.get("/Auth/LockUser");
  },
  unBlock(id) {
    return api.get("/Auth/UnLockUser");
  }
};

export default UserService;
