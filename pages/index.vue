<template>
  <div class="container-main">
    <div class="header flex flex-justify--space-evenly flex-align--center flex--column mt4">
      <div class="header__container flex flex-justify--space-between flex-align--center">
        <img class="header__logo" src="@/assets/svg/logo.svg">
        <div class="header__texts flex flex-justify--space-between">
          <span>Why?</span>
          <span>Which?</span>
          <span>Sign</span>
        </div>
        <div class="header__button">Potpiši za otvaranje parlamenata</div>
      </div>
    </div>
    <div class="jumbotron-first flex flex--column flex-justify--center flex-align--center">
      <div class="text--center jumbotron-first__title mt32">
        <span class="text--center">
          Prema <span class="text--underline">istraživanju otvorenosti</span> institucija zakonodavne vlasti u regionu, Parlamenti u BiH zauzimaju posljednje mjesto.
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
          Vrijeme je da <span class="text--bold">zakonodavne vlasti u BiH</span> ulože napore kako bi <span class="text--bold">unaprijedile svoju otvorenost!</span>
        </span>
      </div>
    </div>
    <JumboTwo />
    <JumboThree />
    <JumboFour />
    <PetitionForm />
    <JumboFive />
    <JumboSix />
    <Signees />

    <div class="jumbotron-first flex flex--column flex-justify--center flex-align--center">
      <div class="text--center jumbotron-first__title mt32">
        <span class="text--center text--uppercase text--bold" style="font-size: 2.5rem;">
          Reci i drugima da je ovo važno!
        </span>
      </div>
      <div class="jumbotron-first__card-container mt40 mb40">
        <div class="jumbotron-first__card2">
          <img class="social-icons" src="@/assets/svg/facebook.svg">
        </div>
        <div class="jumbotron-first__card2">
          <img class="social-icons" src="@/assets/svg/twitter.svg">
        </div>
        <div class="jumbotron-first__card2">
          <img class="social-icons" src="@/assets/svg/email.svg">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import JumboTwo from '../components/JumboTwo'
import JumboThree from '../components/JumboThree'
import JumboFour from '../components/JumboFour'
import PetitionForm from "../components/PetitionForm";
import JumboFive from "../components/JumboFive";
import JumboSix from '../components/JumboSix'
import Signees from "../components/Signees";
export default {
  components: {JumboSix, Signees, JumboFive, PetitionForm, JumboFour, JumboThree, JumboTwo },
  data() {
      return {
        form: {
          email: '',
          name: '',
          checked: []
        },
        show: true,
        value: 976,
        max: 5000,
        signatures: ['John Doe', 'Johnina Doe']
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault();
        alert(JSON.stringify(this.form))
      },
      //IN CASE OF RESETING THE FORM
      onReset(evt) {
        evt.preventDefault();
        this.form.email = '';
        this.form.name = '';
        this.form.food = null;
        this.form.checked = [];
        this.show = false;
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
}
</script>

<style lang="scss" scoped>


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
  }

  &__button {
    color: #7786ea;
    border-width: 1px;
    border-color: #7786ea;
    border-style: solid;
    padding: 5px;
    font-size: 12px;
  }
}

.jumbotron-first {
  background-image: linear-gradient(-224deg, #abb4f2 0%, #f1f2fb 100%);
  width: 100%;

  &__title {
    width: 40%;
    font-size: 30px;
    font-weight: 300;
  }

  &__card-container {
    width: 60%;
    display: flex;
    justify-content: space-between;
    margin-top: 60px;
    margin-bottom: 60px;
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
  }

    &__card2 {
      width: 27%;
      background-color: transparent;
      border: solid #7786ea;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      text-align: center;
      min-height: 200px;
      padding: 5px;
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
  .social-icons{
    width: 40%;
    margin-left: 30%;
  }
</style>
