<template>
  <q-layout view="lHh lpR lFf" class="main-layout">
    <q-drawer v-model="leftDrawerOpen" side="left" bordered>
      <div class="logo">
        <img src="../assets/Logo.png" alt="FootPro" />
      </div>

      <div class="links">
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
    </q-drawer>

    <q-page-container class="bg-green-2">
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";

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
  {
    path: "/auth",
    icon: "login",
    name: "Login",
  },
];

const leftDrawerOpen = ref(true);
function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>

<style lang="scss">
.main-layout .q-drawer {
  max-width: 100px;
  width: 100%;
  padding: 16px;
}

.logo {
  max-width: 70px;
  height: auto;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    height: auto;
  }
}

.main-layout .q-page-container {
  padding-left: 100px !important;
}

.links {
  margin-top: 48px;
  display: flex;
  gap: 16px;
  flex-direction: column;
  align-items: center;

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
}
</style>
