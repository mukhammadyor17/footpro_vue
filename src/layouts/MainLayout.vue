<template>
  <q-layout view="lHh lpR lFf">
    <q-drawer v-model="leftDrawerOpen" side="left" bordered class="q-pa-sm">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium
      veritatis optio deleniti dolore neque fugit, dicta pariatur necessitatibus
      at laudantium velit aut possimus ab facilis! Labore similique provident
      praesentium ipsa.
    </q-drawer>

    <q-page-container class="bg-teal-1">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";

const leftDrawerOpen = ref(true);
function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
