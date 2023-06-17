<template>
  <q-page class="q-pa-md">
    <main-card class="q-mb-md">
      <page-title> Top 10 more free stadiums </page-title>
    </main-card>
    <main-card v-if="stadiumStore.updatedStadiums">
      <base-table :column="col" :row="stadiumStore.updatedStadiums">
        <template v-slot:body-cell-name="{ row }">
          <q-td>
            <router-link
              :to="`/stadium/${row.id}`"
              class="text-black block full-width"
            >
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

const col = stadiumColumn.slice(0, -1);
const stadiumStore = useStadiumStore();
stadiumStore.getStadium();
</script>
