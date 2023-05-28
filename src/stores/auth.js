import { defineStore } from "pinia";
import { notify } from "src/boot/notify";
import AuthService from "src/services/auth";
import TokenService from "src/services/token";
import { useRoute } from "vue-router";
import router from "src/router";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    role: "super"
  }),
  getters: {},
  actions: {
    async login(payload) {
      try {
        const response = await AuthService.login(payload);
        this.user = response.data;
        notify.show("Вы успешно вошли!", "positive");
        TokenService.save(response.data.token);
        router.push("/");
      } catch (error) {
        notify.show("Ошибка при авторизации!", "negative");
        console.error(error);
      }
    }
  }
});
