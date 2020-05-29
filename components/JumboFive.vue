<template>
    <div class="container-c flex flex-justify--center flex-align--center">
    <div class="mb64 mt64 flex flex--column flex-align--center flex-justify--center">
        <span class="title" style="font-weight: 100">Potpiši - jer imamo pravo znati</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "JumboFive"
    }
</script>

<style scoped lang="scss">
@import "@/assets/style/variables";

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
</style>