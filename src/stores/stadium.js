import { defineStore } from "pinia";
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
    }
  }
});
