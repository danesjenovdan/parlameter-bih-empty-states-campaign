<template>
  <div class="container-c flex flex--column flex-justify--center flex-align--center" id="zasto">
    <div class="mt64 mb64 text--center wrapper flex flex--column flex-justify--center flex-align--center">
      <span class="text--bold text--italic text--uppercase title" >ZAŠTO JE OTVARANJE PARLAMENATA VAŽNO?</span>
      <div class="card-wrapper flex flex-justify--center mt24">
        <Card>
          <img src="@/assets/svg/empty-podatki.svg" width="100" class="mt24" />
          <span class="mt24 card-title"> <span class="text--italic text--bold">Brži</span> pristup podacima </span>
          <Divider class="mt24" />
          <span class="text--center mt24">
            Otvaranje državnog i entitetskih parlamenata omogućilo bi brže pretraživanje i pregledniji rad zastupnika/ca.
          </span>
        </Card>
        <Card>
          <img src="@/assets/svg/empty-aplikacija.svg" width="100" class="mt24" />
          <span class="mt24 card-title"> <span class="text--italic text--bold">Razvoj</span> novih aplikacija </span>
          <Divider class="mt24" />
          <span class="text--center mt24">
            Otvaranje parlamenata omogućilo bi razvoj novih aplikacija koje bi skupljale, učinile preglednima i
            automatski ažurirale upravo one podatke koji zanimaju njihove korisnike/ce, civilno društvo,
            znanstvenike/ice, građane/ke koje biraju kome dati glas na izborima.
          </span>
        </Card>
        <Card>
          <img src="@/assets/svg/empty-javnost.svg" width="100" class="mt24" />
          <span class="mt24 card-title">
            <span class="text--italic text--bold">Korisno</span> za građane_ke kao i novinare/ke
          </span>
          <Divider class="mt24" />
          <span class="text--center mt24">
            Otvaranjem parlamenata najviše profitiraju građani/ke: istraživački rad novinara/ki postaje brži, analize
            preciznije, a i sami građani/ke bi lakše nalazili i provjeravali informacije koje ih zanimaju.
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
  name: 'JumboTwo',
  components: { Divider, Card }
}
</script>

<style scoped lang="scss">
@import '@/assets/style/variables';

.container-c {
  width: 100%;
}
.title {
  font-size: $font-size-title;
  font-weight: 500;
  text-align: center;
  @media (max-width: $small) {
    font-size: 30px;
  }
}
.card-title {
  font-size: 25px;
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
