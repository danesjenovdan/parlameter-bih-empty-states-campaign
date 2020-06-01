<template>
  <div class="container-c flex flex-justify--center flex-align--center flex--column mt64" data-aos="fade-up">
    <div class="text-wrapper">
      <div class="text--center mb16">
        <span class="title-custom">Signatories</span>
      </div>
      <div class="fading-text" :class="{'fading-text--cover': !showAll}">
        <span>
          Janez Novak, Peter Klepec, Miha Pavliha, Marija Robnik, Simona Vezovšek, Janez Novak, Peter Klepec, Miha
          Pavliha, Marija Robnik, Simona Vezovšek, Janez Novak, Peter Klepec, Miha Pavliha, Marija Robnik, Simona
          Vezovšek, Janez Novak, Peter Klepec, Miha Pavliha, Marija Robnik, Simona Vezovšek, Janez Novak, Peter Klepec,
          Miha Pavliha, Marija Robnik, Simona Vezovšek, Janez Novak, Peter Klepec, Miha Pavliha, Marija Robnik, Simona
          Vezovšek, Janez Novak, Peter Klepec, Miha Pavliha, Marija Robnik, Simona Vezovšek, Janez Novak, Peter Klepec,
          Miha Pavliha, Marija Robnik, Simona Vezovšek, Janez Novak, Peter Klepec, Miha Pavliha, Marija Robnik, Simona
          Vezovšek, Janez Novak, Peter Klepec, Miha Pavliha, Marija Robnik, Simona Vezovšek, Janez Novak, Peter Klepec,
          Miha Pavliha, Marija Robnik, Simona Vezovšek, Janez Novak, Peter Klepec, Miha Pavliha, Marija Robnik, Simona
          Vezovšek, Janez Novak, Peter Klepec, Miha Pavliha, Marija Robnik, Simona Vezovšek, Janez Novak, Peter Klepec,
          Miha Pavliha, Marija Robnik, Simona Vezovšek, Janez Novak, Peter Klepec, Miha Pavliha, Marija Robnik, Simona
          Vezovšek, Janez Novak, Peter Klepec, Miha Pavliha, Marija Robnik, Simona Vezovšek, Janez Novak, Peter Klepec,
          Miha Pavliha, Marija Robnik, Simona Vezovšek,
        </span>
      </div>
      <div class="button-wrapper">
        <button  v-if="!showAll" class="text--uppercase" @click="showAll = true">Show all signatures</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JumboSix',
  data() {
    return {
      showAll: false
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/style/variables';

.container-c {
  width: 100%;
}
.title-custom {
  font-size: 30px;
  font-weight: 300;
}

.text-wrapper {
  width: 50%;
  @media (max-width: $medium) {
    width: 90%;
  }
}
.fading-text {
  position: relative;
  width: 100%;


  &--cover {
    height: 200px;
    overflow-y: hidden;

    &:after {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 100%;
      width: 100%;
      content: '';
      background: linear-gradient(
          to top,
          rgba(255, 255, 255, 1) 0%,
          rgba(255, 255, 255, 1) 10%,
          rgba(255, 255, 255, 0) 100%
      );
      pointer-events: none; /* so the text is still selectable */
    }
  }
}
.fading-text:after {

}

button {
  background-color: #7786ea;
  border: none;
  color: white;
  height: 50px;
  font-size: 20px;
  font-weight: 500;
  font-style: italic;
  padding: 10px 30px;
  transition: background-color, 0.2s;

  &:hover {
    background-color: #6972d2;
  }
}

.button-wrapper {
  position: relative;
  width: 100%;
  text-align: center;
  top: -50px;
  z-index: 100;
  height: 50px;
}
</style>
