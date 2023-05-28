import { defineStore } from "pinia";
import { notify } from "src/boot/notify";
import AuthService from "src/services/auth";
import TokenService from "src/services/token";
import { useRoute } from "vue-router";
import router from "src/router";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null
  }),
  getters: {},
  actions: {
    async login(payload) {
      try {
        const response = await AuthService.login(payload);
        this.user = response.data;
        this.role = "super";
        notify.show("Вы успешно вошли!", "positive");
        TokenService.save(response.data.token);
        TokenService.saveUser(response.data);
        router.push("/super");
      } catch (error) {
        notify.show("Ошибка при авторизации!", "negative");
        console.error(error);
      }
    },
    logout() {
      TokenService.remove();
      TokenService.removeUser();
      this.user = null;
    }
  }
});
