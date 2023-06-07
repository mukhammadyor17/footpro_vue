<template>
  <q-page class="q-pa-md">
    <main-card>
      <page-title> Create schedule </page-title>
    </main-card>
    <main-card class="q-my-md">
      <div class="grid grid-col-2 gap-4">
        <q-input
          borderless
          color="green-5"
          bg-color="white"
          type="date"
          outlined
          dense
          label="Day"
        />
        <q-input
          borderless
          color="green-5"
          bg-color="white"
          type="time"
          outlined
          dense
          label="Start time"
        />
        <q-input
          borderless
          color="green-5"
          bg-color="white"
          type="time"
          outlined
          dense
          label="End time"
        />
        <q-input
          borderless
          color="green-5"
          bg-color="white"
          outlined
          dense
          label="Description"
        />
      </div>
      <div class="q-mt-md flex justify-end">
        <q-btn no-caps color="green-5"> Create </q-btn>
      </div>
    </main-card>
  </q-page>
</template>

<script setup>
import MainCard from "src/components/ui/MainCard.vue";
import { reactive } from "vue";
import { useUserStore } from "src/stores/user";
import { useStadiumStore } from "src/stores/stadium";
import PageTitle from "src/components/ui/PageTitle.vue";

const userStore = useUserStore();
const stadiumStore = useStadiumStore();

let event = reactive({
  stadiumId: null,
  description: "",
  from: "",
  to: "",
});
</script>
