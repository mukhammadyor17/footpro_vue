<template>
  <q-dialog :model-value="isEditModalOpen">
    <q-card class="max-w-450">
      <q-card-section class="row items-center q-pb-none">
        <div class="text-h6">
          <slot name="title"></slot>
        </div>
        <q-space />
        <q-btn icon="close" flat round dense v-close-popup />
      </q-card-section>

      <q-card-section>
        <slot name="body" />
      </q-card-section>

      <q-card-section class="flex justify-end">
        <slot name="footer" />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
const props = defineProps(["isEditModalOpen"]);
</script>
