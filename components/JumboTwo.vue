<template>
  <div class="mt64 mb64 container flex flex--column flex-justify--center flex-align--center">
      <h2 class="text--italic text--uppercase text--center" data-aos="fade-up">ZAŠTO JE OTVARANJE PARLAMENATA VAŽNO?</h2>
      <div class="mt24 row">
        <div class="col-lg-4 col-sm-12 mb8">
          <Card data-aos="fade-up">
            <img src="@/assets/svg/empty-podatki.svg" width="100" class="mt24" />
            <span class="mt24 card-title"> <span class="text--italic text--bold">Brži</span> pristup podacima </span>
            <Divider class="mt24" />
            <span class="text--center mt24">
            Otvaranje državnog i entitetskih parlamenata omogućilo bi brže pretraživanje i pregledniji rad zastupnika/ca.
          </span>
          </Card >
        </div>
        <div class="col-lg-4 col-sm-12 mb8">
          <Card data-aos="fade-up">
            <img src="@/assets/svg/empty-aplikacija.svg" width="100" class="mt24" />
            <span class="mt24 card-title"> <span class="text--italic text--bold">Razvoj</span> novih aplikacija </span>
            <Divider class="mt24" />
            <span class="text--center mt24">
            Otvaranje parlamenata omogućilo bi razvoj novih aplikacija koje bi skupljale, učinile preglednima i
            automatski ažurirale upravo one podatke koji zanimaju njihove korisnike/ce, civilno društvo,
            znanstvenike/ice, građane/ke koje biraju kome dati glas na izborima.
          </span>
          </Card>
        </div>
        <div class="col-lg-4 col-sm-12">
          <Card data-aos="fade-up">
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
.card-title {
  font-size: 25px;
  text-align: center;
}
</style>
