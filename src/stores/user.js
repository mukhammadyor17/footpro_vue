import { defineStore } from "pinia";
import UserService from "src/services/user";

export const useUserStore = defineStore("user", {
  state: () => ({
    users: null
  }),
  getters: {},
  actions: {
    async getUsers() {
      try {
        const response = await UserService.get();
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }
  }
});
