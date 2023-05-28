<template>
  <q-table
    :rows="row"
    :columns="column"
    row-key="name"
    flat
    bordered
    hide-bottom
    class="rounded"
  />
</template>

<script setup>
const props = defineProps(["row", "column"]);
</script>

<style lang="scss">
.q-table {
  thead {
    background: $green-2;
  }

  tbody tr:hover {
    background: $green-1;
  }
}
</style>
