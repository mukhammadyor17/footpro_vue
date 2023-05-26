<template>
  <div
    class="fullscreen bg-green-5 text-white text-center q-pa-md flex flex-center"
  >
    <div>
      <div style="font-size: 30vh">404</div>

      <div class="text-h2" style="opacity: 0.4">
        Oops. Nothing here...
        <q-icon name="sports_soccer" class="ball" />
      </div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="green-5"
        unelevated
        to="/"
        label="Go Home"
        no-caps
      />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@keyframes ball {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.ball {
  transform: rotate(0);
  animation: ball 3s linear infinite;
}
</style>
