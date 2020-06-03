<template>
  <div class="card-custom">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Card'
}
</script>

<style scoped lang="scss">
@import '@/assets/style/variables';

.card-custom {
  background-color: transparent;
  border-width: 2px;
  border-color: #7786ea;
  border-style: solid;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 20px;
}
</style>
