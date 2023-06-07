<template>
  <q-page class="q-pa-md">
    <main-card class="q-mb-md">
      <page-title> Profile page </page-title>
    </main-card>

    <main-card>
      <page-title> Stadium Info </page-title>

      <div class="q-my-md grid grid-col-2 gap-4">
        <q-input
          borderless
          color="green-5"
          bg-color="white"
          outlined
          dense
          label="Name"
          v-model="stadium.name"
        />
        <q-input
          borderless
          color="green-5"
          bg-color="white"
          outlined
          dense
          label="Description"
          v-model="stadium.description"
        />
      </div>
    </main-card>
  </q-page>
</template>

<script setup>
import MainCard from "src/components/ui/MainCard.vue";
import PageTitle from "src/components/ui/PageTitle.vue";
import { reactive } from "vue";

const stadium = reactive({
  name: "",
  description: "",
});
</script>
