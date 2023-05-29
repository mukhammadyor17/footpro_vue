import { defineStore } from "pinia";
import { notify } from "src/boot/notify";
import StadiumService from "src/services/stadium";

export const useStadiumStore = defineStore("stadium", {
  state: () => ({
    stadium: null
  }),
  getters: {},
  actions: {
    async get() {
      try {
        const response = await StadiumService.get();
        this.stadium = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async createStadium(payload) {
      try {
        const response = await StadiumService.create(payload);
        notify.show("Success", "positive");
        console.log(response.data);
      } catch (error) {
        notify.show("Error", "negative");
        console.error(error);
      }
    }
  }
});
