<template>
  <q-page class="q-pa-md">
    <main-card class="q-mb-md">
      <page-title>Super Admin Page</page-title>
    </main-card>

    <main-card v-if="stadiumStore.stadium">
      <users-table :row="stadiumStore.stadium" :column="column" />
    </main-card>
  </q-page>
</template>

<script setup>
import PageTitle from "src/components/ui/PageTitle.vue";
import MainCard from "src/components/ui/MainCard.vue";
import UsersTable from "src/components/table/UsersTable.vue";
import { useStadiumStore } from "src/stores/stadium";
const stadiumStore = useStadiumStore();

stadiumStore.get();
const column = [
  {
    name: "name",
    label: "Name",
    field: "name",
    align: "left",
  },
  {
    name: "description",
    label: "Description",
    field: "description",
    align: "left",
  },
  {
    name: "actions",
    label: "Actions",
    field: "actions",
    align: "right",
  },
];
</script>
