<template>
  <q-page class="q-pa-md">
    <main-card class="q-mb-md">
      <page-title> Users Stadium table </page-title>
    </main-card>
    <main-card v-if="userStore.userStadium">
      <base-table
        :column="stdCol"
        :row="userStore.userStadium"
        :hideEditIcon="true"
        @showRemoveConfirm="showRemoveConfirm"
      >
        <template v-slot:body-cell-userId="{ row }">
          <q-td> {{ row.userDetail.email }}</q-td>
        </template>
        <template v-slot:body-cell-stadiumId="{ row }">
          <q-td> {{ row.stadiumDetail.name }}</q-td>
        </template>
      </base-table>
    </main-card>
    <remove-confirm
      v-model="isRemoveConfirmOpen"
      @removeHandler="removeHandler"
    />
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "src/stores/user";
import { userStadiumColumn } from "src/constants/columns.js";
import MainCard from "src/components/ui/MainCard.vue";
import BaseTable from "src/components/table/BaseTable.vue";
import PageTitle from "src/components/ui/PageTitle.vue";
import RemoveConfirm from "src/components/modal/RemoveConfirm.vue";

const stdCol = userStadiumColumn;
const userStore = useUserStore();
userStore.getUSerStadium();

let userStdId = ref("");

const isRemoveConfirmOpen = ref(false);
const showRemoveConfirm = (row) => {
  userStdId.value = row.id;
  isRemoveConfirmOpen.value = !isRemoveConfirmOpen.value;
};

const removeHandler = async () => {
  await userStore.deleteUserStadium(userStdId.value);
  await userStore.getUSerStadium();
  isRemoveConfirmOpen.value = false;
};
</script>
