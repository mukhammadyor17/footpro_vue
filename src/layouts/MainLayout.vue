<template>
  <q-layout view="hhh lpR lfr">
    <q-header bordered class="bg-white text-green-5">
      <q-toolbar class="justify-between">
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <div class="flex gap-4" v-if="user">
          <router-link
            class="text-green-3"
            v-for="link in superLinks"
            :key="link.name"
            :to="link.path"
            exact-active-class="active"
            active-class="active"
          >
            {{ link.name }}
          </router-link>
        </div>
        <div class="flex gap-4" v-else>
          <router-link
            class="text-green-3"
            v-for="link in adminLinks"
            :key="link.name"
            :to="link.path"
            exact-active-class="active"
            active-class="active"
          >
            {{ link.name }}
          </router-link>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      bordered
      :width="100"
      class="q-pa-md full-width flex column justify-between items-center"
    >
      <div class="links q-mb-md">
        <router-link
          class="link__item"
          v-for="link in links"
          :key="link.name"
          :to="link.path"
          exact-active-class="active"
          active-class="active"
        >
          <q-icon size="20px" :name="link.icon" />
        </router-link>
      </div>

      <q-btn :ripple="false" flat class="link__item" @click="logoutHandler">
        <q-icon size="20px" name="logout" />
      </q-btn>
    </q-drawer>

    <q-page-container class="bg-green-2">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import MainSpinner from "src/components/ui/MainSpinner.vue";
import { ref } from "vue";
import { useAuthStore } from "src/stores/auth";
import TokenService from "src/services/token";
import router from "src/router";

const authStore = useAuthStore();

const user = TokenService.getUser();

const links = [
  {
    path: "/",
    icon: "home",
    name: "Home",
  },
  {
    path: "/stadium",
    icon: "sports_soccer",
    name: "Stadium",
  },
  {
    path: "/help",
    icon: "help",
    name: "Help",
  },
];
const adminLinks = [
  {
    path: "/admin",
    name: "Мой Стадион",
  },
  {
    path: "/create",
    name: "Расписание",
  },
];
const superLinks = [
  {
    path: "/super",
    name: "Стадионы",
  },
  {
    path: "/users",
    name: "Пользователи",
  },
  {
    path: "/create",
    name: "Создать ",
  },
];

function logoutHandler() {
  if (authStore.user && authStore.role) {
    authStore.logout();
  }
  router.push("/auth");
}

const leftDrawerOpen = ref(true);
function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>

<style lang="scss">
.links {
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: center;
}

.link__item {
  background-color: $green-2;
  width: 48px;
  height: 48px;
  text-decoration: none;
  border-radius: 12px;
  color: $green-5;
  transition: all 0.2s ease;

  &:hover {
    background: $green-5;
    color: white !important;
  }

  @include flex-center;
}

.link__item.active {
  background: $green-5;
  color: white !important;
}

.q-header {
  .active {
    color: $green-5 !important;
  }
}
</style>
