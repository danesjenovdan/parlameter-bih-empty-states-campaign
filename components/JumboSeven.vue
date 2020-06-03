<template>
  <div class="jumbo " data-aos="fade-up">
    <div class="container flex flex--column flex-justify--center flex-align--center">
      <div class="text--center title mt32">
        <h2 class="text--center text--uppercase">
          <em>
            Reci i drugima da je ovo važno!
          </em>
        </h2>
      </div>
      <div class="card-container mt40 mb40">
        <div class="jumbo__card">
          <img class="social-icons" src="@/assets/svg/facebook.svg" />
        </div>
        <div class="jumbo__card">
          <img class="social-icons" src="@/assets/svg/twitter.svg" />
        </div>
        <div class="jumbo__card">
          <img class="social-icons" src="@/assets/svg/email.svg" />
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'JumboSeven'
}
</script>

<style scoped lang="scss">
@import '@/assets/style/variables';
.jumbo {
  background-image: linear-gradient(-224deg, #abb4f2 0%, #f1f2fb 100%);
  width: 100%;

  &__title {
    width: 40%;
    font-size: 30px;
    font-weight: 300;
  }

  &__card-container {
    width: 30%;
    display: flex;
    justify-content: space-between;
    margin-top: 60px;
    margin-bottom: 60px;

    @media (max-width: $medium) {
      width: 90%;
    }
    @media (min-width: $medium) and (max-width: $xlarge) {
      width: 60%;
    }
  }

  &__card {
    width: 120px;
    height: 120px;
    background-color: transparent;
    border: solid #7786ea;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    text-align: center;
    padding: 5px;
    margin: 5px;

    &:hover{
      background-color: #9db4ff;
    }

    @media (max-width: $small) {
      width: 80px;
      height: 80px;
    }

    @media (min-width: $small) and (max-width: $medium) {
      width: 120px;
      height: 120px;
    }
  }

  &__title {
    font-size: 50px;
    font-weight: bold;
    font-style: italic;
  }

  &__subtitle {
    font-size: 20px;
  }
}
.social-icons {
  width: 40%;
  margin-left: 30%;
}
</style>
