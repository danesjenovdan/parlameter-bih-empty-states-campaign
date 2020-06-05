<template>
  <div class="container-main">
    <div class="container header flex flex-justify--space-evenly flex-align--center mt4" >
      <div class="header__container flex flex-justify--space-between flex-align--center">
        <img class="header__logo" src="@/assets/svg/logo.svg" />
        <div class="header__texts flex flex-justify--space-between">
          <a href="#zasto" class="link header-link">Zašto?</a>
          <a href="#koji-podaci" class="link header-link">Što?</a>
          <a href="#recite-parlamentima" class="link header-link">Tražimo</a>
        </div>
        <a href="#petition-form" class="link header__button">Potpiši za otvaranje parlamenata</a>
      </div>
    </div>
    <div class="jumbotron-first flex flex--column flex-justify--center flex-align--center">
      <div class="container text--center jumbotron-first__title mt32 text-container" data-aos="fade-up">
        <h1 class="lead text--center">
          Prema <a href="http://www.otvoreneinstitucije.cdtmn.org/index.php#portfolio" class="black-link">
          <strong>istraživanju otvorenosti</strong></a>
          institucija zakonodavne vlasti u regionu,
          Parlamenti u BiH zauzimaju posljednje mjesto.
        </h1>
      </div>
      <div class="container jumbotron-first__card-container-c mt40 mb40">
        <div class="col-lg-4 col-12">
          <div class="jumbotron-first__card" data-aos="fade-up">
            <span class="jumbotron-first__card__title">46 %</span>
            <span class="jumbotron-first__card__subtitle">Otvorenost parlamenata u BiH 2017</span>
          </div>
        </div>
        <div class="col-lg-4 col-12">
          <div class="jumbotron-first__card" data-aos="fade-up">
            <span class="jumbotron-first__card__title">49 %</span>
            <span class="jumbotron-first__card__subtitle">Otvorenost parlamenata u BiH 2018</span>
          </div>
        </div>
        <div class="col-lg-4 col-12">
          <div class="jumbotron-first__card" data-aos="fade-up">
            <span class="jumbotron-first__card__title">39 %</span>
            <span class="jumbotron-first__card__subtitle">Otvorenost parlamenata u BiH 2019</span>
          </div>
        </div>
      </div>
      <div class="flex flex-justify--center container mb32 text-container" data-aos="fade-up" >
        <div class="text--center">
          <h3 class="">
            Vrijeme je da <strong>zakonodavne vlasti u BiH</strong> ulože napore kako bi
            <strong>unaprijedile svoju otvorenost!</strong>
          </h3>
        </div>
      </div>
    </div>
    <JumboTwo id="zasto"/>
    <JumboThree id="koji-podaci"/>
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
  components: { JumboEight, JumboSeven, JumboSix, JumboFive, PetitionForm, JumboFour, JumboThree, JumboTwo },
  mounted() {
    this.$store.dispatch('getSignatures')

    document.querySelectorAll('a.link').forEach((link) => {
      link.addEventListener('click', (event) => {
        const href = link.getAttribute('href');
        if (href.indexOf('#') === 0) {
          event.preventDefault();
          document.querySelector(href).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
          });
        }
      });
    });
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/variables';

.container-main {
  min-height: 100vh;
}
.header {
  height: 70px;

  &__container {
    width: 100%;
  }

  &__logo {
    height: 50px;
  }

  &__texts {
    width: 30%;
    @media (max-width: $large) {
      display: none;
    }
  }

  &__button {
    color: #7786ea;
    border-width: 1px;
    border-color: #7786ea;
    border-style: solid;
    padding: .375rem .75rem;
    font-size: 1rem;
    text-decoration: none;
    transition: all 0.2s;

    @media (max-width: $medium) {
      padding: 5px;
      font-size: 0.8rem;
      margin: 5px;
    }

    &:hover {
      color: #ffffff;
      background-color: #7786ea;
    }
  }
}

.jumbotron-first {
  width: 100%;
  background-image: linear-gradient(-224deg, #abb4f2 0%, #f1f2fb 100%);

  &__card-container-c {
    width: 65%;
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
      width: 70%;
    }
  }

  &__card {
    width: 90%;
    background-color: rgba(255, 255, 255, 0.7);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    text-align: center;
    min-height: 200px;
    padding: 5px;

    @media (max-width: $large) {
      margin: 5px;
      width: 100%;
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
  font-size: 1.25rem;
  &:hover {
    opacity: 1;
  }
}
.black-link {
  color: #000;
  text-decoration: none;
}

strong {
  font-weight: 500;
}

.text-container {
  width: 50%;
  @media (max-width: $small) {
    width: 90%;
  }

  @media (min-width: $small) and (max-width: $large) {
    width: 80%;
  }

  @media (min-width: $large) and (max-width: $xlarge) {
    width: 70%;
  }
}
</style>
