<template>
  <div class="container-main">
    <div class="container-c flex flex-justify--center flex-align--center flex--column mt24" data-aos="fade-up">
      <div class="text-wrapper text--center">
        <span class="subsubtitle">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation.
        </span>
      </div>
      <div class="tab-wrapper mt24">
        <Tab @click="selected = 1" :active="selected === 1">Predstavnički dom PS BiH</Tab>
        <div class="text-wrapper mobile-list" :class="{ 'mobile-list--open': selected === 1 }" v-if="selected === 1">
          <ul class="upper-list">
            <li class="subsubtitle tab-li obracanja">Obraćanja zastupnika</li>
            <li class="subsubtitle tab-li kolegij">Sjednice kolegija</li>
            <li class="subsubtitle tab-li prisustva">Prisustva zastupnika</li>
            <li class="subsubtitle tab-li zapisnik">
              Zapisnik, stenogram, izvještaj, audio/video zapis, obraćanja, rezultati glasanja radnih tijela
            </li>
          </ul>
        </div>
        <Tab @click="selected = 2" :active="selected === 2">Dom naroda PS BiH</Tab>
        <div class="text-wrapper mobile-list" :class="{ 'mobile-list--open': selected === 2 }" v-if="selected === 2">
          <ul class="upper-list">
            <li class="subsubtitle tab-li materijali">Materijali i izvještaji sa zajedničkih sjednica oba doma</li>
            <li class="subsubtitle tab-li prisustva">Prisustva zastupnika</li>
            <li class="subsubtitle tab-li obracanja">Obraćanja zastupnika</li>
            <li class="subsubtitle tab-li kolegij">Sjednice kolegija</li>
            <li class="subsubtitle tab-li zapisnik">
              Zapisnik, obavještenje, stenogram, izvještaj, audio/video zapis, obraćanja, rezultati glasanja radnih
              tijela
            </li>
          </ul>
        </div>
        <Tab @click="selected = 3" :active="selected === 3">Predstavnički dom PF BiH</Tab>
        <div class="text-wrapper mobile-list" :class="{ 'mobile-list--open': selected === 2 }" v-if="selected == 3">
          <ul class="upper-list">
            <li class="subsubtitle tab-li materijali">Materijali za sjednice</li>
            <li class="subsubtitle tab-li zapisnik">Zapisnik</li>
            <li class="subsubtitle tab-li stenogram">Stenogram</li>
            <li class="subsubtitle tab-li izvjestaj">Izvještaj sa sjednice</li>
            <li class="subsubtitle tab-li obracanja">Obraćanja</li>
            <li class="subsubtitle tab-li prisustva">Prisustva zastupnika</li>
            <li class="subsubtitle tab-li kolegij">Sjednice kolegija</li>
            <li class="subsubtitle tab-li glasanja">Rezultati glasanja</li>
            <li class="subsubtitle tab-li audio">Audio/video zapis</li>
            <li class="subsubtitle tab-li pitanja">Delegatska pitanja i inicijative</li>
            <li class="subsubtitle tab-li zapisnik">
              Zapisnik, stenogram, izvještaj, audio/video zapis, obraćanja, rezultati glasanja radnih tijela
            </li>
          </ul>
        </div>
        <Tab @click="selected = 4" :active="selected === 4">Dom naroda PF BiH</Tab>
        <div class="text-wrapper mobile-list" :class="{ 'mobile-list--open': selected === 4 }" v-if="selected == 4">
          <ul class="upper-list">
            <li class="subsubtitle tab-li materijali">Materijali za sjednice</li>
            <li class="subsubtitle tab-li izvjestaj">Izvještaji</li>
            <li class="subsubtitle tab-li obracanja">Obraćanja</li>
            <li class="subsubtitle tab-li prisustva">Prisustva zastupnika</li>
            <li class="subsubtitle tab-li glasanja">Rezultati glasanja</li>
            <li class="subsubtitle tab-li kolegij">Sjednice kolegija</li>
            <li class="subsubtitle tab-li audio">Audio/video zapisi</li>
            <li class="subsubtitle tab-li zapisnik">
              Zapisnik, stenogram, izvještaj, audio/video zapis, obraćanja, rezultati glasanja radnih tijela
            </li>
          </ul>
        </div>
        <Tab @click="selected = 5" :active="selected === 5">Narodna skupština RS</Tab>
        <div class="text-wrapper mobile" :class="{ 'mobile-list--open': selected === 5 }" v-if="selected == 5">
          <ul class="upper-list">
            <li class="subsubtitle tab-li glasanja">Rezultati glasanja</li>
            <li class="subsubtitle tab-li stenogram">Stenogram</li>
            <li class="subsubtitle tab-li obracanja">Obraćanja zastupnika</li>
            <li class="subsubtitle tab-li prisustva">Prisustva zastupnika</li>
            <li class="subsubtitle tab-li kolegij">Sjednice kolegija</li>
            <li class="subsubtitle tab-li zapisnik">
              Zapisnik, stenogram, izvještaj, audio/video zapis, obraćanja, rezultati glasanja radnih tijela
            </li>
          </ul>
        </div>
      </div>
      <!--      END MOBILE   -->
      <div class="text-wrapper mt32 desktop-list" v-if="selected == 2">
        <ul class="upper-list">
          <li class="subsubtitle tab-li materijali">Materijali i izvještaji sa zajedničkih sjednica oba doma</li>
          <li class="subsubtitle tab-li prisustva">Prisustva zastupnika</li>
          <li class="subsubtitle tab-li obracanja">Obraćanja zastupnika</li>
          <li class="subsubtitle tab-li kolegij">Sjednice kolegija</li>
          <li class="subsubtitle tab-li zapisnik">
            Zapisnik, obavještenje, stenogram, izvještaj, audio/video zapis, obraćanja, rezultati glasanja radnih tijela
          </li>
        </ul>
      </div>
      <div class="text-wrapper mt32 desktop-list" v-else-if="selected == 1">
        <ul class="upper-list">
          <li class="subsubtitle tab-li obracanja">Obraćanja zastupnika</li>
          <li class="subsubtitle tab-li kolegij">Sjednice kolegija</li>
          <li class="subsubtitle tab-li prisustva">Prisustva zastupnika</li>
          <li class="subsubtitle tab-li zapisnik">
            Zapisnik, stenogram, izvještaj, audio/video zapis, obraćanja, rezultati glasanja radnih tijela
          </li>
        </ul>
      </div>
      <div class="text-wrapper mt32 desktop-list" v-else-if="selected == 5">
        <ul class="upper-list">
          <li class="subsubtitle tab-li glasanja">Rezultati glasanja</li>
          <li class="subsubtitle tab-li stenogram">Stenogram</li>
          <li class="subsubtitle tab-li obracanja">Obraćanja zastupnika</li>
          <li class="subsubtitle tab-li prisustva">Prisustva zastupnika</li>
          <li class="subsubtitle tab-li kolegij">Sjednice kolegija</li>
          <li class="subsubtitle tab-li zapisnik">
            Zapisnik, stenogram, izvještaj, audio/video zapis, obraćanja, rezultati glasanja radnih tijela
          </li>
        </ul>
      </div>
      <div class="text-wrapper mt32 desktop-list" v-else-if="selected == 3">
        <ul class="upper-list">
          <li class="subsubtitle tab-li materijali">Materijali za sjednice</li>
          <li class="subsubtitle tab-li zapisnik">Zapisnik</li>
          <li class="subsubtitle tab-li stenogram">Stenogram</li>
          <li class="subsubtitle tab-li izvjestaj">Izvještaj sa sjednice</li>
          <li class="subsubtitle tab-li obracanja">Obraćanja</li>
          <li class="subsubtitle tab-li prisustva">Prisustva zastupnika</li>
          <li class="subsubtitle tab-li kolegij">Sjednice kolegija</li>
          <li class="subsubtitle tab-li glasanja">Rezultati glasanja</li>
          <li class="subsubtitle tab-li audio">Audio/video zapis</li>
          <li class="subsubtitle tab-li pitanja">Delegatska pitanja i inicijative</li>
          <li class="subsubtitle tab-li zapisnik">
            Zapisnik, stenogram, izvještaj, audio/video zapis, obraćanja, rezultati glasanja radnih tijela
          </li>
        </ul>
      </div>
      <div class="text-wrapper mt32 desktop-list" v-else-if="selected == 4">
        <ul class="upper-list">
          <li class="subsubtitle tab-li materijali">Materijali za sjednice</li>
          <li class="subsubtitle tab-li izvjestaj">Izvještaji</li>
          <li class="subsubtitle tab-li obracanja">Obraćanja</li>
          <li class="subsubtitle tab-li prisustva">Prisustva zastupnika</li>
          <li class="subsubtitle tab-li glasanja">Rezultati glasanja</li>
          <li class="subsubtitle tab-li kolegij">Sjednice kolegija</li>
          <li class="subsubtitle tab-li audio">Audio/video zapisi</li>
          <li class="subsubtitle tab-li zapisnik">
            Zapisnik, stenogram, izvještaj, audio/video zapis, obraćanja, rezultati glasanja radnih tijela
          </li>
        </ul>
      </div>
    </div>
    <div class="separator separator--left" id="recite-parlamentima" data-aos="fade-up">
      <div class="separator__item separator__item--left">
        <span class="mr8 text--uppercase separator__text" href="">Recite PARLAMENTIMA da imamo pravo znati:</span>
      </div>
    </div>
    <div class="container-c flex flex-justify--center flex-align--center flex--column mt24 mb24" data-aos="fade-up">
      <div class="text-wrapper text--left">
        <ul class="lower-list">
          <li class="subsubtitle">Ko je glasao za, a ko protiv.</li>
          <li class="subsubtitle">Kako se glasalo o amandmanima na zakone i državni/entitetskI budžet.</li>
          <li class="subsubtitle">Šta se događa u radnim tijelima parlamenata i kako se glasa na tim sjednicama?</li>
          <li class="subsubtitle">Šta se događa na sjednicama Kolegija?</li>
          <li class="subsubtitle">Funkcionalne e-mail adrese na koje se možemo obratiti zastupnicima/cama.</li>
        </ul>
      </div>
    </div>

    <div class="separator separator--right" data-aos="fade-up">
      <div class="separator__item separator__item--right">
        <span class="mr8 text--uppercase separator__text"
          >TRAŽITE POTPUNO OTVARANJE DRŽAVNOG I ENTITETSKIH PARLAMENATA</span
        >
      </div>
    </div>
    <div class="container-c flex flex-justify--center flex-align--center flex--column mt24 mb24" data-aos="fade-up">
      <div class="text-wrapper text--left">
        <span class="subsubtitle">
          Nove tehnologije omogućavaju brzu razmjenu informacija i bh. parlamenti imaju odgovornost koristiti ih da
          javnosti ponude službene i provjerene informacije nasuprot dezinformacijama, slobodnim interpretacijama i
          društvenim mrežama. Ipak, umjesto otvaranja podataka, bh. parlamenti ili ne objavljuju nikako dokumente ili ih
          objavljuju u neadekvatnim elektronskim formatima.
        </span>
      </div>
    </div>

    <div class="separator separator--left" data-aos="fade-up">
      <div class="separator__item separator__item--left">
        <span class="mr8 text--uppercase separator__text">ZA TRANSPARENTNOST</span>
      </div>
    </div>

    <div class="container-c flex flex-justify--center flex-align--center flex--column mt24 mb24" data-aos="fade-up">
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
      <div class="text-wrapper text--center mb64" data-aos="fade-up">
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
    <div class="separator separator--left" data-aos="fade-up">
      <div class="separator__item separator__item--left">
        <span class="mr8 text--uppercase separator__text" id="petition-form">POTPIŠITE PETICIJU!</span>
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
  width: 40%;
  @media (max-width: $small) {
    width: 90%;
  }
  @media (min-width: $small) and (max-width: $medium) {
    width: 80%;
  }
  @media (min-width: $medium) and (max-width: $large) {
    width: 70%;
  }
}
.tab-wrapper {
  display: flex;
  justify-content: center;
  width: 60%;
  @media (max-width: $medium) {
    flex-direction: column;
    width: 90%;
  }
  @media (min-width: $medium) and (max-width: $xlarge) {
    width: 80%;
  }
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
    margin: 10px 20px;
    @media (max-width: $small) {
      font-size: 1.3rem;
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
  font-weight: 300;
  list-style: none;
  margin-top: 10px;
  margin-bottom: 10px;
  background-repeat: no-repeat;
}

ul.lower-list li {
  background-image: url('~assets/img/right-arrow.png');
  background-size: 1.75rem 1rem;
  background-position: 0 10px;
  padding-left: 2rem;
}

ul.upper-list li {
  background-size: 2.5rem;
  background-position: 0 50%;
  padding-left: 3rem;
  padding-top: 10px;
  padding-bottom: 10px;
  @media (max-width: $small) {
    background-size: 2rem;
    padding-left: 2.5rem;
  }
}

li {
  &.audio {
    background-image: url('~assets/svg/liicons/audio.svg');
  }
  &.glasanja {
    background-image: url('~assets/svg/liicons/glasanja.svg');
  }
  &.izvjestaj {
    background-image: url('~assets/svg/liicons/izvjestaj.svg');
  }
  &.kolegij {
    background-image: url('~assets/svg/liicons/kolegij.svg');
  }
  &.materijali {
    background-image: url('~assets/svg/liicons/materijali.svg');
  }
  &.obracanja {
    background-image: url('~assets/svg/liicons/obracanja.svg');
  }
  &.pitanja {
    background-image: url('~assets/svg/liicons/pitanja.svg');
  }
  &.prisustva {
    background-image: url('~assets/svg/liicons/prisustva.svg');
  }
  &.radnatijela {
    background-image: url('~assets/svg/liicons/radna-tijela.svg');
  }
  &.stenogram {
    background-image: url('~assets/svg/liicons/stenogram.svg');
  }
  &.zapisnik {
    background-image: url('~assets/svg/liicons/zapisnik.svg');
  }
}

ul {
  list-style-type: none;
  padding: 0;
}
.desktop-list {
  display: block;

  @media (max-width: $medium) {
    display: none;
  }
}

.mobile-list {
  display: none;

  @media (max-width: $medium) {
    display: block;
  }
}
</style>
