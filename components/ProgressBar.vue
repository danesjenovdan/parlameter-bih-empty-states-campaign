<template>
  <div class="progress">
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
.progress {
  width: 100%;
  height: 20px;
  background-color: white;
  border: 2px solid #7786ea;
  border-radius: 10px;

  &__bar {
    background-color: #7786ea;
  }
}
</style>
