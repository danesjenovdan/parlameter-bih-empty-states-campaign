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
  min-height: 450px;
  width: 30%;
  padding: 20px;
  margin: 10px;
  @media (max-width: $small) {
    width: 100%;
    min-height: unset;
  }
  @media (min-width: $small) and (max-width: $medium){
    width: 45%;
    min-height: unset;
  }
}
</style>
