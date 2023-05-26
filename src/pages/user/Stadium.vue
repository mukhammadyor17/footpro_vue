<template>
  <q-page class="flex flex-center column">
    <h4>Stadium page</h4>
    <img
      alt="Quasar logo"
      src="~assets/Logo.png"
      style="width: 200px; height: 200px"
    />
  </q-page>
</template>

<script setup>
import { onMounted } from "vue";
import { notify } from "src/boot/notify";

onMounted(() => {
  notify.show("hello", "positive");
});
</script>

<style lang="scss" scoped></style>
