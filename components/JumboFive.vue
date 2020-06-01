<template>
  <div class="container-c flex flex-justify--center flex-align--center" data-aos="fade-up">
    <div class="mb16 mt16 flex flex--column flex-align--center flex-justify--center p32">
      <span class="title-custom">We need 5000 signatures to send this letter to Sabor. </span>
      <ProgressBar :width="50" class="mt16" />
      <div class="flex flex-align--center flex-justify--flex-end counter">
        <span>976 / 5000</span>
      </div>
    </div>
  </div>
</template>

<script>
import ProgressBar from './ProgressBar'
export default {
  name: 'JumboFive',
  components: { ProgressBar }
}
</script>

<style scoped lang="scss">
@import '@/assets/style/variables';

.container-c {
  width: 100%;
  background-image: linear-gradient(-224deg, #f2db7c 0%, #f6f1de 100%);
}

.subtitle-wrapper {
  width: 50%;
  text-align: center;
}

.card-title {
  font-size: 25px;
  font-weight: 500;
  font-style: italic;
}
.card-subtitle {
  font-size: 15px;
  font-weight: 300;
}
.card-wrapper {
  width: 70%;
  @media (max-width: $small) {
    width: 100%;
    flex-wrap: wrap;
  }
}
.counter {
  width: 100%;
}

.title-custom {
  font-size: 30px;
  font-weight: 300;
  @media (max-width: $medium) {
    font-size: 1.5rem;
  }
}
</style>
