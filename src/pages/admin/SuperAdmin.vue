<template>
  <q-page class="q-pa-md">
    <main-card v-if="stadiumStore.stadium">
      <base-table
        :row="stadiumStore.stadium"
        :column="column"
        @showEditModal="showEditModal"
        @showRemoveConfirm="showRemoveConfirm"
      />
    </main-card>

    <edit-modal v-model="isEditModalOpen">
      <template v-slot:body>
        <q-input
          outlined
          dense
          color="green-5"
          class="q-mb-md"
          label="Name"
          v-model="stadiumItem.name"
        />
        <q-input
          outlined
          dense
          color="green-5"
          label="Description"
          v-model="stadiumItem.description"
        />
      </template>
      <template v-slot:footer>
        <q-btn color="green-5" no-caps @click="update"> Save </q-btn>
      </template>
    </edit-modal>

    <remove-confirm
      v-model="isRemoveConfirmOpen"
      @removeHandler="removeStadium"
    />
  </q-page>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useStadiumStore } from "src/stores/stadium";
import MainCard from "src/components/ui/MainCard.vue";
import BaseTable from "src/components/table/BaseTable.vue";
import EditModal from "src/components/modal/EditModal.vue";
import RemoveConfirm from "src/components/modal/RemoveConfirm.vue";

const stadiumStore = useStadiumStore();
stadiumStore.getStadium();

let stadiumItem = reactive({
  id: "",
  name: "",
  description: "",
});

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

const isEditModalOpen = ref(false);
const showEditModal = (item) => {
  stadiumItem = item;
  isEditModalOpen.value = !isEditModalOpen.value;
};
const update = async () => {
  await stadiumStore.updateStadium({ ...stadiumItem });
  await stadiumStore.getStadium();
  isEditModalOpen.value = false;
};

const isRemoveConfirmOpen = ref(false);
const showRemoveConfirm = (row) => {
  stadiumItem = row;
  isRemoveConfirmOpen.value = !isRemoveConfirmOpen.value;
};
const removeStadium = async () => {
  await stadiumStore.removeStadium({ id: stadiumItem.id });
  await stadiumStore.getStadium();
  isRemoveConfirmOpen.value = false;
};
</script>
