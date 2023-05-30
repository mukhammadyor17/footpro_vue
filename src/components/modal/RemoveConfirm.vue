<template>
  <q-dialog :model-value="isRemoveConfirmOpen">
    <q-card class="max-w-350">
      <q-card-section class="row items-center q-pb-lg">
        <div class="text-body1">Вы действительно хотите удалить?</div>
        <q-btn icon="close" flat round dense v-close-popup />
      </q-card-section>

      <q-card-section class="flex justify-end gap-5">
        <q-btn no-caps text-color="red-5" v-close-popup> Cancel </q-btn>
        <q-btn color="red-5" no-caps @click="$emit('removeHandler')">
          Delete
        </q-btn>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
const props = defineProps(["isRemoveConfirmOpen"]);
</script>
