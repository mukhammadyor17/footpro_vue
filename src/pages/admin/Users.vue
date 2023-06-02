<template>
  <q-page class="q-pa-md">
    <main-card class="q-mb-md flex justify-between">
      <page-title> Users Table </page-title>
      <q-btn to="/user-stadium" color="green-5" no-caps> User Stadium </q-btn>
    </main-card>
    <main-card class="q-mb-md" v-if="userStore.users">
      <base-table
        :row="userStore.users"
        :column="col"
        :hideDeleteIcon="true"
        @showEditModal="showEditModal"
        @changeUserStatus="changeUserStatus"
      />
    </main-card>
    <edit-modal v-model="isEditModalOpen" @updateHandler="updateUser">
      <template v-slot:body>
        <q-input
          outlined
          dense
          color="green-5"
          class="q-mb-md"
          label="Email"
          v-model="user.email"
        />
        <q-input
          outlined
          dense
          color="green-5"
          label="Display name"
          v-model="user.displayName"
        />
      </template>
    </edit-modal>
  </q-page>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useUserStore } from "src/stores/user";
import { userColumn, userStadiumColumn } from "src/constants/columns.js";
import MainCard from "src/components/ui/MainCard.vue";
import BaseTable from "src/components/table/BaseTable.vue";
import EditModal from "src/components/modal/EditModal.vue";
import PageTitle from "src/components/ui/PageTitle.vue";

const col = userColumn;
const userStore = useUserStore();
userStore.getUsers();
userStore.getUSerStadium();

let user = reactive({
  id: "",
  email: "",
  displayName: "",
});

const isEditModalOpen = ref(false);
const showEditModal = (row) => {
  user = row;
  isEditModalOpen.value = !isEditModalOpen.value;
};

const updateUser = async () => {
  const payload = {
    ...user,
  };
  await userStore.updateUser(payload);
  await userStore.getUsers();
  isEditModalOpen.value = false;
};

const changeUserStatus = (row) => {
  console.log(row);
};
</script>
