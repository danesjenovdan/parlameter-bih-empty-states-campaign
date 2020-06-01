<template>
  <div class="container-c flex flex-justify--center flex-align--center">
    <div class="mb64 mt64 flex flex--column flex-align--center flex-justify--center">
      <span class="title text--italic" id="koji-podaci">KOJI PODACI NEDOSTAJU?</span>
      <div class="subtitle-wrapper">
        <span class="subtitle">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </span>
      </div>
      <div class="flex flex-justify--center mt24 card-wrapper">
        <Card>
          <span class="mt24 card-title text--center">
            Proaktivno objavljivanje dokumenata
          </span>
          <Divider class="mt24" />
          <span class="text--center card-subtitle mt24">
            Parlamenti nemaju praksu proaktivnog objavljivanja dokumenata koji se odnose na monitoring i evaluaciju
            rada,kao i drugih dokumenata od društvenog značaja
          </span>
        </Card>
        <Card>
          <span class="mt24 card-title text--center">
            Proaktivno objavljivanje dokumenata
          </span>
          <Divider class="mt24" />
          <span class="text--center card-subtitle mt24">
            Parlamenti nemaju praksu proaktivnog objavljivanja dokumenata koji se odnose na monitoring i evaluaciju
            rada,kao i drugih dokumenata od društvenog značaja
          </span>
        </Card>
        <Card>
          <span class="mt24 card-title text--center">
            Proaktivno objavljivanje dokumenata
          </span>
          <Divider class="mt24" />
          <span class="text--center card-subtitle mt24">
            Parlamenti nemaju praksu proaktivnog objavljivanja dokumenata koji se odnose na monitoring i evaluaciju
            rada,kao i drugih dokumenata od društvenog značaja
          </span>
        </Card>
      </div>
    </div>
  </div>
</template>

<script>
import Card from './Card'
import Divider from './Divider'
export default {
  name: 'JumboThree',
  components: { Divider, Card }
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
  @media (max-width: $medium) {
    width: 90%;
  }
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
  width: 50%;
  flex-wrap: wrap;
  @media (max-width: $small) {
    width: 90%;
  }

  @media (min-width: $small) and (max-width: $large) {
    width: 80%;
  }

  @media (min-width: $large) and (max-width: $xlarge) {
    width: 60%;
  }
}
</style>
