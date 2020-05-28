<template>
  <div class="tab" :class="{'tab--active': active}" @click="$emit('click')">
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
.tab {
  background-color: #c4cdff;
  font-weight: 300;
  font-size: 1rem;
  font-style: italic;
  padding: 5px;

  &--active {
    background-image: linear-gradient(to left, #efcb36 0%, #7786ea 100%);
    font-weight: 500;
  }
}
</style>
