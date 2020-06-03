<template>
  <div class="container-c flex flex-justify--center flex-align--center">
    <div class="container mb64 mt64 flex flex--column flex-align--center flex-justify--center">
      <h2 class="title text--italic" data-aos="fade-up">KOJI PODACI NEDOSTAJU?</h2>
      <div class="text--center" data-aos="fade-up">
        <span class="subtitle">
          Iako postoje različitosti kada je u pitanju objavljivanje dokumenata na zvaničnim stranicama zakonodavnih institucija u BiH, ono što je zajedničko svim parlamentima jeste uskraćivanje informacija o sjednicama kolegija te radnih tijela ovih organa vlast.
        </span>
      </div>
      <div class="mt24 row">
        <div class="col-lg-4 col-sm-12 mb8">
          <Card data-aos="fade-up">
          <span class="mt24 card-title text--center">
            Proaktivno objavljivanje dokumenata
          </span>
            <Divider class="mt24" />
            <span class="text--center card-subtitle mt24">
            Parlamenti nemaju praksu proaktivnog objavljivanja dokumenata koji se odnose na monitoring i evaluaciju
            rada,kao i drugih dokumenata od društvenog značaja.
          </span>
          </Card>
        </div>
        <div class="col-lg-4 col-sm-12 mb8">
          <Card data-aos="fade-up">
          <span class="mt24 card-title text--center">
            Mašinski čitljivi dokumenti
          </span>
            <Divider class="mt24" />
            <span class="text--center card-subtitle mt24">
            Dokumenti koje je moguće pronaći na zvaničnim stranicama parlamenta, uglavnom nisu objavljeni u poluotvorenom ili otvorenom formatu.
          </span>
          </Card>
        </div>
        <div class="col-lg-4 col-sm-12">
          <Card data-aos="fade-up">
          <span class="mt24 card-title text--center">
            Automatsko ažuriranje podataka
          </span>
            <Divider class="mt24" />
            <span class="text--center card-subtitle mt24">
            Podaci parlamenata u BiH nisu otvoreni i ne potiču razvoj novih, sličnih ili od Parlametra drugačijih aplikacija. Podatke preuzete sa službenih stranica parlamenata često treba dodatno provjeravati, nadopunjavati pa i ručno unositi jer nije omogućeno strojno preuzimanje i automatsko ažuriranje podataka.
          </span>
          </Card>
        </div>
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
