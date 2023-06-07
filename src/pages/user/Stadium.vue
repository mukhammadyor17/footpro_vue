<template>
  <q-page class="q-pa-md">
    <main-card class="q-mb-md">
      <page-title> All stadiums </page-title>
    </main-card>
    <main-card v-if="stadiumStore.stadium">
      <base-table :column="col" :row="stadiumStore.stadium">
        <template v-slot:body-cell-name="{ row }">
          <q-td>
            <router-link :to="`/stadium/${row.id}`" class="text-black">
              {{ row.name }}
            </router-link>
          </q-td>
        </template>
      </base-table>
    </main-card>
  </q-page>
</template>

<script setup>
import BaseTable from "src/components/table/BaseTable.vue";
import MainCard from "src/components/ui/MainCard.vue";
import PageTitle from "src/components/ui/PageTitle.vue";
import { stadiumColumn } from "src/constants/columns";
import { useStadiumStore } from "src/stores/stadium";

const col = stadiumColumn.slice(0, 2);
const stadiumStore = useStadiumStore();
stadiumStore.getStadium();
</script>

<style lang="scss" scoped></style>
