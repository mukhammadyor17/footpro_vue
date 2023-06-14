import { defineStore } from "pinia";
import { notify } from "src/boot/notify";
import AuthService from "src/services/auth";
import TokenService from "src/services/token";
import { useRoute } from "vue-router";
import router from "src/router";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    isLoading: false,
  }),
  actions: {
    async login(payload) {
      this.isLoading = true;
      try {
        const response = await AuthService.login(payload);
        this.user = response.data;
        TokenService.save(response.data.token);
        TokenService.saveUser(response.data);
        notify.show("Вы успешно вошли!", "positive");
        router.push("/super");
      } catch (error) {
        notify.show("Ошибка при авторизации!", "negative");
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    },
    logout() {
      TokenService.remove();
      TokenService.removeUser();
      this.user = null;
    },
  },
});
