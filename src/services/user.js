import api from "./api";

const UserService = {
  get() {
    return api.get("/Auth/GetAll");
  },
  create(data) {
    return api.post("/Auth/Register", data);
  },
  update({ id, email, displayName }) {
    return api.put(
      `/Auth/UpdateUser/?userId=${id}&email=${email}&displayName=${displayName}`
    );
  },
  block(id) {
    return api.get("/Auth/LockUser");
  },
  unBlock(id) {
    return api.get("/Auth/UnLockUser");
  },
  createUserStadium(payload) {
    return api.post("/UserStadium/Create", payload);
  },
  getUserStadium() {
    return api.get("/UserStadium/GetAll");
  },
};

export default UserService;
