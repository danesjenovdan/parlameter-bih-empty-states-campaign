<template>
  <div class="container-c flex flex-justify--center flex-align--center" data-aos="fade-up">
    <div class="mb64 flex flex--column flex-align--center flex-justify--center">
      <form class="vue-form" @submit.prevent="submit" @submit="sendData">
        <div class="error-message">
          <p v-show="!email.valid">Unesite ispravnu E-mail adresu</p>
        </div>
        <fieldset>
          <div>
            <input type="text" name="name" id="name" required="" v-model="name" placeholder="Ime i prezime" />
          </div>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="E-mail adresa"
              :class="{ email, error: !email.valid }"
              v-model="email.value"
            />
          </div>

          <div>
            <ul class="vue-form-list" style="padding-left: 0px">
              <label class="label">Odaberite parlament</label>
              <li v-for="(feature, index) in features">
                <label class="checkbox">
                  <input type="checkbox" :value="feature.value" :id="'cb-feature-' + index" v-model="selection.features" />
                  <span :for="'cb-feature-' + index">{{ feature.text }}</span>
                </label>
              </li>
              <li>
                <label class="checkbox">
                  <input type="checkbox" id="checkbox-all" @click="checkAll" />
                  <span for="checkbox-all">Sve</span>
                </label>
              </li>
            </ul>

            <ul class="vue-form-list" style="padding-left: 0px">
              <li>
                <label class="checkbox">
                  <input type="checkbox" :value="false" id="consent" v-model="consent" />
                  <span for="consent">Dozvoljavam da objavite moje ime</span>
                </label>
              </li>
            </ul>
          </div>

          <div>
            <button type="submit" class="flex flex-justify--space-between flex-align--center">
              <span>POTPISUJEM!</span>
              <img src="@/assets/img/right-button-arrow.png" class="button-img" />
            </button>
          </div>

          <span class="additional-data text--italic"
            >* Ime i prezime tražimo isključivo u svrhu podrške zahtjevima za otvaranje parlamenata i ne objavljujemo ih bez
            privole niti u bilo koje druge svrhe.</span
          >
          <br /><span class="additional-data text--italic"
            >** Ostavite e-mail adresu ako želite primati obavjesti o kampaniji za otvaranje podatka i o aktivnostima
            Parlametra.</span
          >
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script>
import { petitionName } from '../constants'

export default {
  name: 'PetitionForm',
  data: function() {
    return {
      name: '',
      email: {
        value: '',
        valid: true
      },
      features: [
        {value: 'PS-BIH', text: 'Parlamentarna skupština BiH'},
        {value: 'P-FBIH', text: 'Parlament FBiH'},
        {value: 'NS-RS', text: 'Narodna skupština RS'},
      ],
      selection: {
        member: '0',
        framework: 'vue',
        features: []
      },
      consent: false,
      submitted: false
    }
  },
  methods: {
    submit: function() {
      this.submitted = true
    },
    checkAll: function(event) {
      this.selection.features = event.target.checked ? this.features.map(obj => obj.value) : []
    },
    async sendData() {
      const extraData = this.selection.features.toString().replace(',', '_');
      const peticijaType = `${petitionName}${this.consent ? '.public' : '.private'}.sign.${extraData}`;

      let signUrl = 'https://api.djnd.si/sign/';
      signUrl += `?name=${encodeURIComponent(this.name)}`;
      signUrl += `&email=${encodeURIComponent(this.email.value)}`;
      signUrl += `&peticija=${encodeURIComponent(peticijaType)}`;
      console.log(signUrl)
      try {
        const response = await this.$axios.get(signUrl)
        if (response.data === 'Saved') {
          alert('Hvala!');
          this.$store.disptach('getSignatures')
        } else {
          alert('Greška: ' + response.data);
        }
      } catch (e) {
      }
    }
  },
}
</script>

<style scoped lang="scss">
@import '@/assets/style/variables';

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.vue-form {
  font-size: 1.25rem;
  width: 500px;
  padding: 15px 30px;
  margin: 20px auto;
  background-color: #fff;

  @media (max-width: $small) {
    width: 90%;
    font-size: 1rem;
  }
}

.vue-form div {
  position: relative;
  margin: 20px 0;
}

input[type='text'],
input[type='email'] {
  width: 100%;
  height: 60px;
  padding: 20px;
  border: 2px solid #7786ea;
  background-color: #ffffff;
}
input[type='text']::placeholder,
input[type='email']::placeholder {
  font-style: italic;
  font-weight: 300;
}

li {
  list-style: none;
}

p,
label {
  font-style: italic;
  font-weight: 300;
}

button {
  background-color: #7786ea;
  border: none;
  color: white;
  width: 100%;
  height: 60px;
  font-size: 20px;
  font-weight: 500;
  font-style: italic;
  padding-right: 30px;
  padding-left: 30px;
  transition: background-color, 0.2s;

  &:hover {
    background-color: #6972d2;
  }
}

.button-img {
  height: 50%;
}

.additional-data {
  font-size: 12px;
  font-weight: 300;
}

.checkbox {
  display: inline-flex;
  cursor: pointer;
  position: relative;
}

.checkbox > span {
  color: #34495e;
  margin-left: 10px;
}

.checkbox > input {
  height: 25px;
  width: 25px;
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  appearance: none;
  border: 2px solid #7786ea;
  outline: none;
  transition-duration: 0.3s;
  background-color: white;
  cursor: pointer;
}

.checkbox > input:checked {
  border: 2px solid #7786ea;
  background-color: #7786ea;
}

.checkbox > input:checked + span::before {
  content: '';
  display: block;
  text-align: center;
  color: white;
  position: absolute;
  left: 6px;
  top: 7px;
  width: 14px;
  height: 8px;
  border-bottom: 4px solid white;
  border-left: 4px solid white;
  transform: rotate(-45deg);
}

.checkbox > input:active {
  border: 2px solid #34495e;
}
</style>
