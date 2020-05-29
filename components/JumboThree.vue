<template>
  <div class="container-c flex flex-justify--center flex-align--center">
    <div class="mb64 mt64 flex flex--column flex-align--center flex-justify--center">
      <span class="title text--italic">KOJI PODACI NEDOSTAJU?</span>
      <div class="subtitle-wrapper">
        <span class="subtitle">
          U svim institucijama nedostaje
        </span>
      </div>
      <div class="flex flex-justify--center mt24 card-wrapper">
        <Card>
          <span class="mt24 card-title text--center">
            Proaktivno objavljivanje dokumenata
          </span>
          <Divider class="mt24" />
          <span class="text--center card-subtitle mt24">
            Parlamenti nemaju praksu proaktivnog objavljivanja dokumenata koji se odnose na monitoring i
            evaluaciju rada,kao i drugih dokumenata od društvenog značaja.
          </span>
        </Card>
        <Card>
          <span class="mt24 card-title text--center">
            Mašinski čitljivi dokumenti
          </span>
          <Divider class="mt24" />
          <span class="text--center card-subtitle mt24">
            Dokumenti koje je moguće pronaći na zvaničnim stranicama parlamenta, uglavnom nisu objavljeni
            u poluotvorenom ili otvorenom formatu.
          </span>
        </Card>
        <Card>
          <span class="mt24 card-title text--center">
            Automatsko ažuriranje podataka
          </span>
          <Divider class="mt24" />
          <span class="text--center card-subtitle mt24">
            Podaci parlamenata u BiH nisu otvoreni i ne potiču razvoj novih, sličnih ili od Parlametra drugačijih
            aplikacija. Podatke preuzete sa službenih stranica parlamenata često treba dodatno provjeravati,
            nadopunjavati pa i ručno unositi jer nije omogućeno strojno preuzimanje i automatsko ažuriranje podataka.
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
