<template>
  <q-page class="q-pa-md">
    <main-card class="q-mb-md">
      <page-title> Users page </page-title>
    </main-card>
    <main-card v-if="userStore.users">
      <base-table
        :row="userStore.users"
        :column="col"
        @showEditModal="showEditModal"
        :hideDeleteIcon="true"
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
import { userColumn } from "src/constants/columns.js";
import MainCard from "src/components/ui/MainCard.vue";
import BaseTable from "src/components/table/BaseTable.vue";
import EditModal from "src/components/modal/EditModal.vue";
import PageTitle from "src/components/ui/PageTitle.vue";

const col = userColumn;
const userStore = useUserStore();
userStore.getUsers();

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
</script>
