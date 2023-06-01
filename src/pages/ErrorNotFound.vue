<template>
  <div
    class="fullscreen bg-green-5 text-white text-center q-pa-md flex flex-center"
  >
    <div>
      <div class="page-title">
        4<q-icon name="sports_soccer" class="ball" />4
      </div>
      <div class="subtitle" style="opacity: 0.4">Oops. Nothing here...</div>
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

.page-title {
  font-size: 30vh;

  @media screen and (max-width: 767px) {
    font-size: 48px;
  }
}

.subtitle {
  font-size: 48px;

  @media screen and (max-width: 767px) {
    font-size: 24px;
  }
}

.ball {
  transform: rotate(0);
  animation: ball 4s linear infinite;
}
</style>
