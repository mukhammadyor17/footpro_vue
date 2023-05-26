<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/Logo.png"
      style="width: 200px; height: 200px"
    />
    <MainCard>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi rem
      tenetur aspernatur omnis sint, quibusdam, dicta nemo error delectus in
      porro sapiente vero iusto harum libero, ipsa aut inventore quisquam.
    </MainCard>
  </q-page>
</template>

<script setup>
import { onMounted } from "vue";
import { notify } from "src/boot/notify";
import MainCard from "src/components/ui/MainCard.vue";

onMounted(() => {
  notify.show("hello", "positive");
});
</script>

<style lang="scss" scoped></style>
