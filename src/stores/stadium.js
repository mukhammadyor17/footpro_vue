import { defineStore } from "pinia";
import { notify } from "src/boot/notify";
import StadiumService from "src/services/stadium";

export const useStadiumStore = defineStore("stadium", {
  state: () => ({
    stadium: null,
  }),
  actions: {
    async getStadium() {
      try {
        const response = await StadiumService.getStadium();
        this.stadium = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async createStadium(payload) {
      try {
        const response = await StadiumService.create(payload);
        notify.show("Success", "positive");
      } catch (error) {
        notify.show("Error", "negative");
        console.error(error);
      }
    },
    async updateStadium(payload) {
      try {
        const response = await StadiumService.update(payload);
        notify.show("Success", "positive");
      } catch (error) {
        notify.show("Error", "negative");
        console.error(error);
      }
    },
    async removeStadium(payload) {
      try {
        const response = await StadiumService.delete(payload);
        notify.show("Success", "positive");
      } catch (error) {
        notify.show("Error", "negative");
        console.error(error);
      }
    },
  },
});
