<template>
  <div class="tab" :class="{ 'tab--active': active }" @click="$emit('click')">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Tab',
  props: {
    active: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/style/variables';

.tab {
  background-color: rgba(119,134,234, 0.2);
  font-weight: 300;
  font-size: 1rem;
  font-style: italic;
  padding: 5px;
  margin-bottom: 5px;
  margin-top: 5px;
  cursor: pointer;
  transition: background-image, 0.2s;
  width: 100%;

  @media (min-width: $large) {
    margin-left: 5px;
    margin-right: 5px;
    text-align: center;
  }

  &--active {
    background-image: linear-gradient(to left, #efcb36 0%, #7786ea 100%);
    font-weight: 500;
  }

  &:hover {
    background-image: linear-gradient(to left, #efcb36 0%, #7786ea 100%);
  }
}
</style>
