<template>
  <q-page class="flex flex-center">
    <div class="login-form">
      <h4 class="text-green-5 q-mt-auto text-center q-mb-lg text-weight-bold">
        FootPro.
      </h4>
      <q-input
        borderless
        class="q-mb-md"
        color="green-5"
        bg-color="white"
        type="email"
        outlined
        dense
        placeholder="Username"
        v-model="email"
      />
      <q-input
        borderless
        class="q-mb-lg"
        bg-color="white"
        color="green-5"
        type="password"
        outlined
        dense
        placeholder="Password"
        v-model="password"
      />
      <q-btn color="green-5" @click="loginHandler" no-caps class="full-width">
        Войти
      </q-btn>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from "../../stores/auth";

const authStore = useAuthStore();

const email = ref("admin@mail.ru");
const password = ref("admin123");

const loginHandler = async () => {
  const payload = {
    email: email.value,
    password: password.value,
  };

  await authStore.login(payload);
};
</script>

<style lang="scss" scoped>
.login-form {
  max-width: 400px;
  width: 100%;
  padding: 24px;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2px);
  border-radius: 12px;
}
</style>
