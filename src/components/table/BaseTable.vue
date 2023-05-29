<template>
  <q-table
    :rows="row"
    :columns="column"
    row-key="name"
    flat
    bordered
    hide-bottom
    class="rounded"
    :pagination="{ rowsPerPage: 0 }"
  >
    <template v-slot:body-cell-actions="{ row }">
      <td>
        <div class="flex justify-end">
          <q-btn
            dense
            size="sm"
            icon="edit"
            @click="editRow(row)"
            color="blue-5"
            class="q-ml-xs"
          />
          <q-btn
            dense
            size="sm"
            icon="delete"
            color="red-5"
            @click="deleteRow(row)"
            class="q-ml-xs"
          />
        </div>
      </td>
    </template>
  </q-table>
</template>

<script setup>
const props = defineProps(["row", "column"]);
const editRow = (row) => {
  console.log(row);
};
const deleteRow = (row) => {
  console.log(row);
};
</script>

<style lang="scss">
.q-table {
  thead {
    background: $green-2;
  }
}
</style>
