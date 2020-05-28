<template>
  <div class="container">
    <div class="header">
      <b-row>
        <b-col>Logo</b-col>
        <b-col>Menu</b-col>
        <b-col>Button</b-col>
      </b-row>
    </div>
    <div class="banner__blue">
      <p>Prema istraživanju otvorenosti institucija zakonodavne vlasti v regionu, Parlamenti u BiH zauzimaju poslednje mjesto.</p>
      <b-row>
        <b-col>
          <p>46%</p>
          <p>Otvorenost parlamenta u BiH 2017</p>
        </b-col>
        <b-col>
          <p>49%</p>
          <p>Otvorenost parlamenta u BiH 2018</p>
        </b-col>
        <b-col>
          <p>49%</p>
          <p>Otvorenost parlamenta u BiH 2019</p>
        </b-col>
        <p>Vrijeme je da <b>zakonodavne vlasti u BiH</b> ulože napore kako bi <b>unaprijedile svoju otvorenost</b>!</p>
      </b-row>
    </div>
    <div class="banner--blank">
      <h1>Zašto je otvaranje parlamenta važno?</h1>
      <b-col>
          <img src="@/assets/svg/.." />
          <h2><b>Brži</b> pristup podacima</h2>
          <div class="color-line"></div>
          <p>Otvaranje državnog i entitetskih parlamenata omogućilo bi brže pretraživanje i pregledniji rad zastupnika/ca.</p>
        </b-col>
        <b-col>
          <img src="@/assets/svg/.." />
          <h2><b>Razvoj</b> novih aplikacija</h2>
          <div class="color-line"></div>
          <p>Otvaranje parlamenata omogućilo bi razvoj novih aplikacija koje bi skupljale, učinile preglednima i automatski ažurirale upravo one podatke koji zanimaju njihove korisnike/ce, civilno društvo, znanstvenike/ice, građane/ke koje biraju kome dati glas na izborima.</p>
        </b-col>
        <b-col>
          <img src="@/assets/svg/.." />
          <h2><b>Korisno</b> za građane/ke kao i novinare/ke</h2>
          <div class="color-line"></div>
          <p>Otvaranjem parlamenata najviše profitiraju građani/ke: istraživački rad novinara/ki postaje brži, analiza preciznije, a i sami građani/ke bi lakše nalazili i provjeravali informacije koje ih zanimaju.</p>
        </b-col>
    </div>
    <div class="banner__yellow">
      <h1>Koji podaci nedostaju?</h1>
      <p>U svim institucijama nedostaje</p>
      <b-col>
          <img src="@/assets/svg/.." />
          <h2 class="bold">Proaktivno objavljivanje dokumenata</h2>
          <div class="color-line"></div>
          <p>Parlamenti nemaju praksu proaktivnog objavljivanja dokumenata koji se odnose na monitoring i evaluaciju rada, kao i drugih dokumenata od društvenog.</p>
        </b-col>
        <b-col>
          <img src="@/assets/svg/.." />
          <h2 class="bold">Mašinski čistljivi dokumenti</h2>
          <div class="color-line"></div>
          <p>Dokumenti koje je moguće pronaći na zvaničnim stranicama parlamenta, uglavnom nisu objavljeni u poluotvorenom ili otvorenom formatu.</p>
        </b-col>
        <b-col>
          <img src="@/assets/svg/.." />
          <h2 class="bold">Automatsko ažuriranje podataka</h2>
          <div class="color-line"></div>
          <p>Podaci parlamenata u BiH nisu otvoreni i ne potiču razvoj novih, sličnih ili od Parlametra drugačijih aplikacija. Podatke preuzete sa službenih stranica parlamenata često treba dodatno provjeravati, nadopunjavati pa i ručno unositi jer nije omogučeno strojno preuzimanje i automatsko ažuriranje podataka.</p>
        </b-col>
    </div>
    <div>
      <p>lahko postoje različitosti kada je u pitanju objavljivanje dokumenata na zvaničnim stranicama zakonodavnih institucija u BiH, ono što je zajedničko svim parlamentama jeste uskraćivanje informacija o sjednicama kolegija te radnih tijela ovih organa vlast.</p>
      <b-tabs content-class="mt-3">
        <b-tab title="Predstavnički dom PS BiH" active>
          <ul>
            <li>Obraćanja zastupnika</li>
            <li>Sjednice kolegija</li>
            <li>Prisustva zastupnika</li>
            <li>Zapisnik, stenogram, izvještaj, audio/video zapis, obraćanja, rezultati glasanja radnih tijela </li>
          </ul>
        </b-tab>
        <b-tab title="Dom naroda PS BiH">
          <ul>
            <li>Materijali i izvještaji sa zajedničkih sjednica oba doma</li>
            <li>Prisustva zastupnika</li>
            <li>Obraćanja zastupnika</li>
            <li>Sjednice kolegija</li>
            <li>Zapisnik, stenogram, izvještaj, audio/video zapis, obraćanja, rezultati glasanja radnih tijela</li>
          </ul>
        </b-tab>
        <b-tab title="Predstavnički dom PF BiH"><p>
           <ul>
            <li>Materijali za sjednice</li>
            <li>Zapisnik</li>
            <li>Stenogram</li>
            <li>Izvještaj sa sjednice</li>
            <li>Obraćanja</li>
            <li>Prisustva zastupnika</li>
            <li>Sjednice kolegija</li>
            <li>Rezultati glasanja</li>
            <li>Delegatska pitanja i inicijative</li>
            <li>Zapisnik, stenogram, izvještaj, audio/video zapis, obraćanja, rezultati glasanja radnih tijela </li>
          </ul>
        </p></b-tab>
        <b-tab title="Dom naroda PF BiH">
          <ul>
            <li>Materijali za sjednice</li>
            <li>Izvještaji</li>
            <li>Obraćanja</li>
            <li>Prisustva zastupnika</li>
            <li>Rezultati glasanja</li>
            <li>Sjednice kolegija</li>
            <li>Audio/video zapisi</li>
            <li>Zapisnik, stenogram, izvještaj, audio/video zapis, obraćanja, rezultati glasanja radnih tijela</li>
          </ul>
        </b-tab>
        <b-tab title="Narodna skupština RS">
          <ul>
            <li>Rezultati glasanja</li>
            <li>Stenogram</li>
            <li>Obraćanja zastupnika</li>
            <li>Prisustva zastupnika</li>
            <li>Sjednice kolegija</li>
            <li>Zapisnik, stenogram, izvještaj, audio/video zapis, obraćanja, rezultati glasanja radnih tijela</li>
          </ul>
        </b-tab>
      </b-tabs>
    </div>

    <!-- FIRST DIV -->
    <div class="blue-div--left">
      <h1>Recite parlamentima da imamo pravo znati:</h1>
    </div>
    <div class="content">
      <ul>
        <li>Ko je glasao za, a ko protiv.</li>
        <li>Kako se glasalo o amandmanima na zakone i državni/entitetski budžet.</li>
        <li>Šta se događa u radnim tijelima parlamenata i kako se glasa na tim sjednicama?</li>
        <li>Šta se događa na sjednicama Kolegija?</li>
        <li>Funkcionalne e-mail adrese na koje se možemo obratiti zastupnicima/cema</li>
      </ul>
    </div>

    <!-- SECOND DIV-->
    <div class="blue-div--right">
      <h1>Tražite potpuno otvaranje državnog i entitetskih parlamenata</h1>
    </div>
    <div class="content">
      <p>Nove tehnologije omogućavaju brzu razmjenu informacija i bh. parlamenti imajo odgovornost koristiti ih da javnosti ponude službene i provjerene informacije nasuprot dezinformacijama, slobodnim interpretacijama i društvenim mrežama. Ipak, umjesto otvaranja podataka, bh. parlamenti ili ne objavljuju nikako dokumente ili ih objavljuju u neadekvatnim elektronskim formatima.</p>
    </div>

    <!-- THIRD DIV -->
    <div class="blue-div--left">
      <h1>Za transparentnost</h1>
    </div>
    <div class="content">
      <p>Veća vidljivost i preglednije praćenje aktivnosti svakog pojedinog zastupnika i zastupnice u bh. parlamentima povećala bi i njihov osjećaj odgovornosti prema biračicama i biračima i njihovu predanost javnom interesu. Tako bi parlamenti možda mogli popraviti i svoj rejting, koji je već godinama pri dni ljestvice povjerenja građanstva u zakonodavne institucije.</p>
      <p>Kao predstavnićka tijela građanki i građana, parlamenti bi trebali predvoditi u korištenju novih tehnologija za veću otvorenost, pristupačnost, i neposrednije uključivanje građanstva u procese donošenja odluka</p>
    </div>

    <!-- STATEMENT -->
    <div class="statement">
      <h1>Vjeruju li naše zastupnice i zastupnici da nas zapravo ne zanima šta rade, kako i kakve odluke donose u naše ime?</h1>
      <h1>Dokažimo im suprotno!</h1>
      <h2>Recite Parlamentarnoj skupštini Bosne i Hercegovine, Parlamentu Federacije BiH i Narodnoj skupštini Republike Srpske da je važno da otvore svoje podatke tako da budu što brže dostupni i spremni za koršitenje.</h2>
    </div>

    <!-- CONTACT -->
    <div>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">

        <b-form-group id="input-group-1">
          <b-form-input
            id="input-1"
            v-model="form.name"
            required
            placeholder="Ime i prezime"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2">
          <b-form-input
            id="input-2"
            v-model="form.email"
            type="email"
            required
            placeholder="E-mail adresa"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3">
          <b-form-checkbox-group v-model="form.checked" id="checkboxes-3">
            <b-form-checkbox value="PS-BiH">Parlamentarna skupština BiH</b-form-checkbox>
            <b-form-checkbox value="P-FBiH">Parlament FBiH</b-form-checkbox>
            <b-form-checkbox value="NS-RS">Narodna skupština RS</b-form-checkbox>
            <b-form-checkbox value="sve">Sve</b-form-checkbox>
            <b-form-checkbox value="ime">Dozvoljavam da objavite moje ime</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>

        <b-button type="submit" variant="primary">Potpisujem!</b-button>
      </b-form>
      <span>* Ime i prezime tražimo isključivo u svrhu podrške zahtjevima za otvaranje Sabora i ne objavljujemo ih bez privole niti u bilo koje druge svrhe.</span>
      <span>** Ostavite e-mail adresu ako želite primati obavjesti o kampanji za otvaranje podataka i o aktivnostima Parlametra.</span>
    </div>

    <div class="banner__yellow">
      <h1>Potpiši - jer imamo pravo znati</h1>
      <b-progress :value="value" :max="max" :precision="2" show-progress class="mb-3"></b-progress>
      <p>{{ value }} / {{ max }}</p>
    </div>

    <div class="content">
      <p>Potpisnice i potpisnici</p>
      <p>{{ signatures }}</p>
      <b-button variant="primary">Prikaži svih {{ value }} potpisa!</b-button>
    </div>

    <div class="banner__blue">
      <h1>Reci i drugima da je ovo važno!</h1>
      <b-row>
        <b-col>
          <!-- FACEBOOK -->
          <img src="@/assets/svg/.." />
        </b-col>
        <b-col>
          <!-- TWITTER-->
          <img src="@/assets/svg/.." />
        </b-col>
        <b-col>
          <!-- EMAIL -->
          <img src="@/assets/svg/.." />
        </b-col>
      </b-row>
    </div>

    <div id="footer">
      <b-row>
        <b-col cols="6">
          <p>Pripremili</p>
          <b-col cols="6">
            <img src="@/assets/svg/.." />
          </b-col>
          <b-col cols="6">
            <img src="@/assets/svg/.." />
          </b-col>
        </b-col>
        <b-col cols="6">
          <p>Zahvaljujući podršci</p>
          <img src="@/assets/svg/.." />
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
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

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
