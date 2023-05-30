import { defineStore } from "pinia";
import { notify } from "src/boot/notify";
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
        this.users = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async createUser(payload) {
      try {
        const response = await UserService.create(payload);
        notify.show("Success", "positive");
      } catch (error) {
        notify.show("Error", "negative");
        console.error(error);
      }
    },
    async createUserStadium(payload) {
      try {
        const response = await UserService.createUserStadium(payload);
        notify.show("Success", "positive");
      } catch (error) {
        notify.show("Error", "negative");
        console.error(error);
      }
    }
  }
});
