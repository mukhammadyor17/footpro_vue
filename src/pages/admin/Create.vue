<template>
  <q-page class="q-pa-md">
    <main-card class="q-mb-md">
      <page-title> Create users and stadiums </page-title>
    </main-card>
    <main-card>
      <h6 class="q-mt-auto q-mb-sm text-body1">Create user</h6>
      <div class="flex gap-5">
        <q-input
          borderless
          color="green-5"
          bg-color="white"
          type="email"
          outlined
          dense
          label="Email"
          v-model="title"
        />
        <q-input
          borderless
          color="green-5"
          bg-color="white"
          type="email"
          outlined
          dense
          label="User name"
          v-model="title"
        />
      </div>
    </main-card>
  </q-page>
</template>

<script setup>
import MainCard from "src/components/ui/MainCard.vue";
import PageTitle from "src/components/ui/PageTitle.vue";
import { ref } from "vue";

const title = ref("text");
</script>
