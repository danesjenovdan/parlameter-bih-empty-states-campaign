<template>
  <div class="container-c flex flex-justify--center flex-align--center" data-aos="fade-up">
    <div class="mb16 mt16 flex flex--column flex-align--center flex-justify--center p32">
      <span class="title-custom">Potpiši - jer imamo pravo znati </span>
      <ProgressBar :width="count" class="mt16" />
      <div class="flex flex-align--center flex-justify--flex-end counter">
        <span>{{ $store.state.totalSignatureCount }} / 15000</span>
      </div>
    </div>
  </div>
</template>

<script>
import ProgressBar from './ProgressBar'
export default {
  name: 'JumboFive',
  components: { ProgressBar },
  computed: {
    count() {
      let count = this.$store.state.totalSignatureCount;
      count = Math.round(count * 100 / 15000)
      count = count > 100 ? 100 : count
      return count
    }
  }
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
