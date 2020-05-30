<template>
  <div class="container-main">
    <div class="container-c flex flex-justify--center flex-align--center flex--column mt24">
      <div class="text-wrapper text--center">
        <span class="subsubtitle">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation.
        </span>
      </div>
      <div class="tab-wrapper mt24">
        <Tab @click="selected = 1" :active="selected === 1">Predstavnički dom PS BiH</Tab>
        <Tab @click="selected = 2" :active="selected === 2">Dom naroda PS BiH</Tab>
        <Tab @click="selected = 3" :active="selected === 3">Predstavnički dom PF BiH</Tab>
        <Tab @click="selected = 4" :active="selected === 4">Dom naroda PF BiH</Tab>
        <Tab @click="selected = 5" :active="selected === 5">Narodna skupština RS</Tab>
      </div>
      <div class="text-wrapper mt32">
        <p class="subsubtitle">Materijali i izvještaji sa zajedničkih sjednica oba doma</p>
        <p class="subsubtitle">Prisustva zastupnika</p>
        <p class="subsubtitle">Obraćanja zastupnika</p>
        <p class="subsubtitle">Sjednice kolegija</p>
        <p class="subsubtitle">
          Zapisnik, obavještenje, stenogram, izvještaj, audio/video zapis, obraćanja, rezultati glasanja radnih tijela
        </p>
      </div>
    </div>
    <div class="separator separator--left">
      <div class="separator__item separator__item--left">
        <span class="mr8 text--uppercase separator__text">Recite PARLAMENTIMA da imamo pravo znati:</span>
      </div>
    </div>
    <div class="text-wrapper flex flex-justify--center flex-align--center" style="margin: auto">
      <ul>
        <li>Ko je glasao za, a ko protiv.</li>
        <li>Kako se glasalo o amandmanima na zakone i državni/entitetskI budžet.</li>
        <li>Šta se događa u radnim tijelima parlamenata i kako se glasa na tim sjednicama?</li>
        <li>Šta se događa na sjednicama Kolegija?</li>
        <li>Funkcionalne e-mail adrese na koje se možemo obratiti zastupnicima/cama.</li>
      </ul>
    </div>

    <div class="separator separator--right">
      <div class="separator__item separator__item--right">
        <span class="mr8 text--uppercase separator__text"
          >TRAŽITE POTPUNO OTVARANJE DRŽAVNOG I ENTITETSKIH PARLAMENATA</span
        >
      </div>
    </div>
    <div class="container-c flex flex-justify--center flex-align--center flex--column mt24 mb24">
      <div class="text-wrapper text--left">
        <span class="subsubtitle">
          Nove tehnologije omogućavaju brzu razmjenu informacija i bh. parlamenti imaju odgovornost koristiti ih da
          javnosti ponude službene i provjerene informacije nasuprot dezinformacijama, slobodnim interpretacijama i
          društvenim mrežama. Ipak, umjesto otvaranja podataka, bh. parlamenti ili ne objavljuju nikako dokumente ili ih
          objavljuju u neadekvatnim elektronskim formatima.
        </span>
      </div>
    </div>

    <div class="separator separator--left">
      <div class="separator__item separator__item--left">
        <span class="mr8 text--uppercase separator__text">ZA TRANSPARENTNOST</span>
      </div>
    </div>

    <div class="container-c flex flex-justify--center flex-align--center flex--column mt24 mb24">
      <div class="text-wrapper text--left mb64">
        <span class="subsubtitle">
          Veća vidljivost i preglednije praćenje aktivnosti svakog pojedinog zastupnika i zastupnice u bh. parlamentima
          povećala bi i njihov osjećaj odgovornosti prema biračicama i biračima i njihovu predanost javnom interesu. Tako
          bi parlamenti možda mogli popraviti i svoj rejting, koji je već godinama pri dnu ljestvice povjerenja
          građanstva u zakonodavne institucije.
          <br />
          Kao predstavnička tijela građanki i građana, parlamenti bi trebali predvoditi u korištenju novih tehnologija za
          veću otvorenost, pristupačnost i neposrednije uključivanje građanstva u procese donošenja odluka.
        </span>
      </div>
      <div class="text-wrapper text--center mb64">
        <span class="subtitle">
          Vjeruju li naše zastupnice i zastupnici da nas zapravo ne zanima šta rade, kako i kakve odluke donose u naše
          ime?
          <br />
          <br />
          Dokažimo im suprotno!
          <br />
          <br />
        </span>
        <span class="subtitle text--italic">
          Recite Parlamentarnoj skupštini Bosne i Hercegovine, Parlamentu Federacije BiH i Narodnoj skupštini Republike
          Srpske da je važno da otvore svoje podatke tako da budu što brže dostupni i spremni za korištenje.
        </span>
        <span></span>
      </div>
    </div>
    <div class="separator separator--left">
      <div class="separator__item separator__item--left">
        <span class="mr8 text--uppercase separator__text">POTPIŠITE PETICIJU!</span>
      </div>
    </div>
  </div>
</template>

<script>
import Tab from './Tab'
export default {
  name: 'JumboFour',
  components: { Tab },
  data() {
    return {
      selected: 1
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/style/variables';

.container-c {
  width: 100%;
}
.container-main {
  width: 100%;
}
.text-wrapper {
  width: 50%;
  @media (max-width: $small) {
    width: 90%;
  }
}
.tab-wrapper {
  display: flex;
  justify-content: space-around;
  width: 60%;
}

.separator {
  width: 100%;
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;

  &--left {
    justify-content: flex-start;
  }
  &--right {
    justify-content: flex-end;
  }
  &__text {
    margin-top: 5px;
    margin-bottom: 5px;
    @media (max-width: $small) {
      font-size: 1rem;
    }
  }
  &__item {
    width: 80%;
    background-color: #7786ea;
    display: flex;
    align-items: center;
    font-size: 2rem;
    color: #ffffff;
    font-style: italic;

    &--left {
      justify-content: flex-end;
      text-align: right;
    }
    &--right {
      justify-content: flex-start;
      text-align: left;
    }
  }
}

li {
  font-size: $font-size-subsubtitle;
  font-weight: 300;
  list-style: none;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
