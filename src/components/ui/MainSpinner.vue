<template>
  <div class="spinner">
    <q-icon name="sports_soccer" color="green-5" class="ball" />
  </div>
</template>

<script setup></script>
<style lang="scss">
.spinner {
  width: 200px;
  height: 200px;
  border-radius: 12px;
  background: white;

  @include flex-center;
}
</style>
