<template>
  <q-page class="q-pa-md">
    <main-card class="q-mb-md">
      <page-title>Users Page</page-title>
    </main-card>

    <main-card v-if="userStore.users">
      <base-table :row="userStore.users" :column="column" />
    </main-card>
  </q-page>
</template>

<script setup>
import PageTitle from "src/components/ui/PageTitle.vue";
import MainCard from "src/components/ui/MainCard.vue";
import BaseTable from "src/components/table/BaseTable.vue";
import { useUserStore } from "src/stores/user";
const userStore = useUserStore();
userStore.getUsers();

const column = [
  {
    name: "username",
    label: "User name",
    field: "username",
    align: "left",
  },
  {
    name: "email",
    label: "Email",
    field: "email",
    align: "left",
  },
  {
    name: "isBlocked",
    align: "center",
    label: "Is Blocked",
    field: "isBlocked",
  },
  {
    name: "actions",
    label: "Actions",
    field: "actions",
    align: "right",
  },
];
</script>
