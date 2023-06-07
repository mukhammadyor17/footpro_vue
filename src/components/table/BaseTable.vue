<!-- eslint-disable vue/no-v-for-template-key-on-child -->
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
    <template v-for="(_, slot) of $slots" v-slot:[slot]="scope">
      <slot :name="slot" v-bind="scope" />
    </template>
    <template v-slot:body-cell-actions="{ row }">
      <td>
        <div class="flex justify-end no-wrap">
          <q-btn
            dense
            size="sm"
            icon="edit"
            @click="$emit('showEditModal', row)"
            color="green-5"
            class="q-mr-sm"
            v-if="!hideEditIcon"
          />
          <q-btn
            dense
            size="sm"
            icon="delete"
            color="red-5"
            @click="$emit('showRemoveConfirm', row)"
            v-if="!hideDeleteIcon"
          />
        </div>
      </td>
    </template>
  </q-table>
</template>

<script setup>
const props = defineProps(["row", "column", "hideDeleteIcon", "hideEditIcon"]);
</script>

<style lang="scss">
.q-table {
  thead {
    background: $green-2;
  }
}
</style>
