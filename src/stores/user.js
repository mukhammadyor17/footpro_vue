import { defineStore } from "pinia";
import { notify } from "src/boot/notify";
import UserService from "src/services/user";

export const useUserStore = defineStore("user", {
  state: () => ({
    users: null,
    userStadium: null,
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
    async updateUser(payload) {
      try {
        const response = await UserService.update(payload);
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
    },
    async getUSerStadium() {
      try {
        const response = await UserService.getUserStadium();
        this.userStadium = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async changeUserStatus(payload) {
      try {
        const response = await UserService.userStatus(payload);
        notify.show("Success", "positive");
      } catch (error) {
        notify.show("Error", "negative");
        console.error(error);
      }
    },
  },
});
