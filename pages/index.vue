<template>
  <div class="container-main">
    <div class="header flex flex-justify--space-evenly flex-align--center flex--column mt4">
      <div class="header__container flex flex-justify--space-between flex-align--center">
        <img class="header__logo" src="@/assets/svg/logo.svg" />
        <div class="header__texts flex flex-justify--space-between">
          <a href="#zasto" class="header-link">Zašto?</a>
          <a href="#koji-podaci" class="header-link">Što?</a>
          <a href="#recite-parlamentima" class="header-link">Tražimo</a>
        </div>
        <a href="#petition-form" class="header__button">Potpiši za otvaranje parlamenata</a>
      </div>
    </div>
    <div class="jumbotron-first flex flex--column flex-justify--center flex-align--center">
      <div class="text--center jumbotron-first__title mt32">
        <span class="text--center">
          Prema <span class="text--underline">istraživanju otvorenosti</span> institucija zakonodavne vlasti u regionu,
          Parlamenti u BiH zauzimaju posljednje mjesto.
        </span>
      </div>
      <div class="jumbotron-first__card-container mt40 mb40">
        <div class="jumbotron-first__card">
          <span class="jumbotron-first__card__title">46 %</span>
          <span class="jumbotron-first__card__subtitle">Otvorenost parlamenata u BiH 2017</span>
        </div>
        <div class="jumbotron-first__card">
          <span class="jumbotron-first__card__title">49 %</span>
          <span class="jumbotron-first__card__subtitle">Otvorenost parlamenata u BiH 2018</span>
        </div>
        <div class="jumbotron-first__card">
          <span class="jumbotron-first__card__title">49 %</span>
          <span class="jumbotron-first__card__subtitle">Otvorenost parlamenata u BiH 2019</span>
        </div>
      </div>
      <div class="text--center jumbotron-first__title mb32">
        <span class="text--center">
          Vrijeme je da <span class="text--bold">zakonodavne vlasti u BiH</span> ulože napore kako bi
          <span class="text--bold">unaprijedile svoju otvorenost!</span>
        </span>
      </div>
    </div>
    <JumboTwo />
    <JumboThree />
    <JumboFour />
    <PetitionForm />
    <JumboFive />
    <JumboSix />
    <JumboSeven />
    <JumboEight />
  </div>
</template>

<script>
import JumboTwo from '../components/JumboTwo'
import JumboThree from '../components/JumboThree'
import JumboFour from '../components/JumboFour'
import PetitionForm from '../components/PetitionForm'
import JumboFive from '../components/JumboFive'
import JumboSix from '../components/JumboSix'
import JumboSeven from '../components/JumboSeven'
import JumboEight from '../components/JumboEight'
export default {
  components: { JumboEight, JumboSeven, JumboSix, JumboFive, PetitionForm, JumboFour, JumboThree, JumboTwo }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/variables';

.container-main {
  margin: 0 auto;
  min-height: 100vh;
  width: 100%;
}
.header {
  height: 70px;
  width: 100%;
  &__container {
    width: 80%;
  }

  &__logo {
    height: 50px;
  }

  &__texts {
    width: 30%;
    @media (max-width: $small) {
      display: none;
    }
  }

  &__button {
    color: #7786ea;
    border-width: 1px;
    border-color: #7786ea;
    border-style: solid;
    padding: 5px;
    font-size: 12px;
    text-decoration: none;
    transition: all 0.2s;

    &:hover {
      color: #ffffff;
      background-color: #7786ea;
    }
  }
}

.jumbotron-first {
  background-image: linear-gradient(-224deg, #abb4f2 0%, #f1f2fb 100%);
  width: 100%;

  &__title {
    width: 40%;
    font-size: 2rem;
    font-weight: 300;

    @media (max-width: $small) {
      font-size: 1.3rem;
      width: 90%;
    }

    @media (min-width: $small) and (max-width: $large) {
      font-size: 1.5rem;
      width: 80%;
    }
  }

  &__card-container {
    width: 40%;
    display: flex;
    justify-content: space-evenly;
    margin-top: 60px;
    margin-bottom: 60px;
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

  &__card {
    width: 27%;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    text-align: center;
    min-height: 200px;
    padding: 5px;

    @media (max-width: $small) {
      width: 100%;
      margin: 5px;
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
}
.header-link {
  color: black;
  opacity: 0.5;
  text-decoration: none;
  transition: opacity 0.2s;
  &:hover {
    opacity: 1;
  }
}
.text {
}
</style>
