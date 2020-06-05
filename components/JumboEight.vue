<template>
  <div class="container-c mt32 mb64">
    <div class="flex flex--column flex-justify--center flex-align--center">
      <span>Pripremili</span>
      <div class="flex flex-justify--space-evenly flex-align--center mt8 img-container">
        <a href="https://danesjenovdan.si/" target="_blank">
          <img src="@/assets/img/logo1.png" class="mr16 dnjd">
        </a>
        <a href="https://zastone.ba/" target="_blank">
          <img src="@/assets/img/logo2.png" class="ml16 zastone">
        </a>
      </div>
    </div>
    <div class="flex flex--column flex-justify--center flex-align--center img-wrapper">
      <span>Zahvaljujući podršci</span>
      <div class="flex flex-justify--space-evenly mt8 img-container">
        <a href="https://www.ned.org/" target="_blank">
          <img src="@/assets/img/logo3.png" class="logo3">
        </a>
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

  &.zastone {
    height: 30px;
    @media (max-width: $small) {
      height: 25px;
    }
  }
  &.dnjd {
    height: 50px;
    @media (max-width: $small) {
      height: 25px;
    }
  }
  &.logo3 {
    height: 50px;
    @media (max-width: $small) {
      height: 25px;
    }
  }
}
.container-c {
  display: flex;
  justify-content: space-evenly;

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


.img-container {
  width: 40%;
  @media (max-width: $small) {
    width: 100%;
  }
}

.img-wrapper {
  @media (max-width: $small) {
    margin-top: 30px;
  }
}
</style>
