<template>
  <q-page class="q-pa-md">
    <main-card class="q-mb-md">
      <page-title>Super Admin Page</page-title>
    </main-card>

    <main-card>
      <users-table />
    </main-card>
  </q-page>
</template>

<script setup>
import PageTitle from "src/components/ui/PageTitle.vue";
import MainCard from "src/components/ui/MainCard.vue";
import UsersTable from "src/components/table/UsersTable.vue";
</script>
