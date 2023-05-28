<template>
  <q-table
    :rows="data"
    :columns="columns"
    row-key="name"
    flat
    bordered
    hide-bottom
    class="rounded"
  />
</template>

<script setup>
const columns = [
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
    name: "displayName",
    label: "Display name",
    field: "displayName",
    align: "left",
  },
  {
    name: "isBlocked",
    align: "center",
    label: "Is Blocked",
    field: "isBlocked",
  },
];

const data = [
  {
    id: "4635d3cf-1686-4ad4-a5bc-53e2bd7a6b9f",
    email: "admin@mail.ru",
    username: "admin@mail.ru",
    displayName: "",
    isBlocked: true,
  },
  {
    id: "4a5f2df1-5285-46c2-96fa-16b455736e64",
    email: "test@mail.ru",
    username: "test@mail.ru",
    displayName: "",
    isBlocked: true,
  },
  {
    id: "5f44561d-d5f0-4071-a5bc-44557a8a7a71",
    email: "test12@mail.ru",
    username: "test12@mail.ru",
    displayName: "",
    isBlocked: true,
  },
  {
    id: "e1c63eb6-6d1d-4a29-95b3-90875c489947",
    email: "ctrl_13@list.ru",
    username: "admin",
    displayName: "admin",
    isBlocked: true,
  },
];
</script>
