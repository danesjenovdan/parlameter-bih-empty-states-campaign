<template>
  <div class="flex flex-align--center flex-justify--space-evenly mt32 mb32">
    <div class="flex flex--column flex-justify--center flex-align--center">
      <span>Prepared by</span>
      <div class="flex flex-justify--space-evenly mt8">
        <img src="@/assets/img/logo1.png" width="100" class="mr16">
        <img src="@/assets/img/logo2.png" width="100" class="ml16">
      </div>
    </div>
    <div class="flex flex--column flex-justify--center flex-align--center">
      <span>Developed with kind support from</span>
      <div class="flex flex-justify--space-evenly mt8">
        <img src="@/assets/img/logo3.png" width="200">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'JumboEight'
  }
</script>

<style scoped>
span {
  font-size: 15px;
}
</style>
