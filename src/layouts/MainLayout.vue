<template>
  <q-layout view="lHh lpR lFf">
    <q-drawer v-model="leftDrawerOpen" side="left" bordered class="q-pa-sm">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium
      veritatis optio deleniti dolore neque fugit, dicta pariatur necessitatibus
      at laudantium velit aut possimus ab facilis! Labore similique provident
      praesentium ipsa.
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const leftDrawerOpen = ref(true);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
};
</script>
