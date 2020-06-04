<template>
  <div class="progress-bar">
    <div class="progress__bar" :style="{ width: width + '%' }"></div>
  </div>
</template>

<script>
export default {
  name: 'ProgressBar',
  props: {
    width: {
      type: Number,
      default: 30
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/style/variables';

.progress-bar {
  width: 100%;
  height: 2rem;
  background-color: white;
  border: 2px solid #7786ea;
  border-radius: 1rem;

  @media (max-width: $small) {
    height: 1.5rem;
  }

  &__bar {
    background-color: #7786ea;
  }
}
</style>
