<template>
  <div class="container-c mt32 mb32">
    <div class="flex flex--column flex-justify--center flex-align--center">
      <span>Prepared by</span>
      <div class="flex flex-justify--space-evenly mt8">
        <img src="@/assets/img/logo1.png" width="100" class="mr16">
        <img src="@/assets/img/logo2.png" width="100" class="ml16">
      </div>
    </div>
    <div class="flex flex--column flex-justify--center flex-align--center container-c__item">
      <span>Developed with kind support from</span>
      <div class="flex flex-justify--space-evenly mt8">
        <img src="@/assets/img/logo3.png" class="logo3">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'JumboEight'
  }
</script>

<style scoped lang="scss">
@import '@/assets/style/variables';
span {
  font-size: 15px;
}
img {
  width: 150px;
  @media (max-width: $medium) {
    width: 70px;
  }
}
.container-c {
  display: flex;
  justify-content: center;
  @media (max-width: $small) {
    flex-direction: column;
  }
  &__item {
    margin-top: 8px;
    @media (max-width: $small) {
      margin-top: 20px;
    }
  }
}
.logo3 {
  width: 200px;
}
</style>
