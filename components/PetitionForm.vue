<template>
    <div class="container-c flex flex-justify--center flex-align--center">
    <div class="mb64 flex flex--column flex-align--center flex-justify--center">

      <form class="vue-form" @submit.prevent="submit">
          <div class="error-message">
              <p v-show="!email.valid">Unesite ispravnu E-mail adresu</p>
          </div>
          <fieldset>
              <div>
                  <input type="text" name="name" id="name" required="" v-model="name" placeholder="Ime i prezime">
              </div>
              <div>
                  <input type="email" name="email" id="email" required placeholder="E-mail adresa"
                         :class="{ email , error: !email.valid }"
                         v-model="email.value">
              </div>



              <div>
                  <ul class="vue-form-list" style="padding-left: 0px">
                    <label class="label">Odaberite parlament</label>
                      <li v-for="(feature, index) in features">
                        <label class="checkbox">
                          <input type="checkbox"
                                 :value="feature"
                                 :id="'cb-feature-'+index"
                                 v-model="selection.features">
                          <span :for="'cb-feature-'+index">{{feature}}</span>
                        </label>
                      </li>
                      <li>
                        <label class="checkbox">
                          <input type="checkbox" id="checkbox-all" @click="checkAll">
                          <span for="checkbox-all">Sve</span>
                        </label>
                      </li>
                  </ul>

                  <ul class="vue-form-list" style="padding-left: 0px">
                      <li>
                        <label class="checkbox">
                          <input type="checkbox"
                                 :value="false"
                                 id="consent"
                                 v-model="consent.value">
                          <span for="consent">Dozvoljavam da objavite moje ime</span>
                        </label>
                      </li>
                  </ul>
              </div>

              <div>
                <button type="submit" class="flex flex-justify--space-between flex-align--center">
                  <span>POTPISUJEM!</span>
                  <img src="@/assets/img/right-button-arrow.png" class="button-img">
                </button>
              </div>

              <span class="additional-data text--italic">* Ime i prezime tražimo isključivo u svrhu podrške zahtjevima za otvaranje Sabora i ne objavljujemo ih bez privole niti u bilo koje druge svrhe.</span>
              <br><span class="additional-data text--italic">** Ostavite e-mail adresu ako želite primati obavjesti o kampaniji za otvaranje podatka i o aktivnostima Parlametra.</span>
          </fieldset>
      </form>
    </div>
    </div>
</template>

<script>
    export default {
        name: "PetitionForm",
        data: function() {
    return {
      name: "",
      email: {
        value: "",
        valid: true
      },
      features: ["Parlamentarna skupština BiH", "Parlament FBiH", "Narodna skupština RS"],
      selection: {
        member: "0",
        framework: "vue",
        features: []
      },
        consent:{
          value: []
        },
      submitted: false
    };
  },
  methods: {
    submit: function() {
      this.submitted = true;
    },

    validate: function(type, value) {
      if (type === "email") {
        this.email.valid = !!this.isEmail(value);
      }
    },
    isEmail: function(value) {
      return emailRegExp.test(value);
    },
    checkAll: function(event) {
      this.selection.features = event.target.checked ? this.features : [];
    }
  },
  watch: {
    "email.value": function(value) {
      this.validate("email", value);
    }
  }
    }
</script>

<style scoped lang="scss">
  @import "@/assets/style/variables";

  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .vue-form {
    font-size: 16px;
    width: 500px;
    padding: 15px 30px;
    margin: 20px auto;
    background-color: #fff;

    @media (max-width: $small) {
      width: 90%;
    }
  }

  .vue-form div {
    position: relative;
    margin: 20px 0;
  }

  input[type="text"], input[type="email"] {
    width: 100%;
    height: 50px;
    padding: 10px;
    border: 2px solid #7786ea;
    background-color: #ffffff;
  }
  input[type="text"]::placeholder, input[type="email"]::placeholder {
    font-style: italic;
    font-weight: 300;
  }

  li {
    list-style: none;
  }

  p, label {
    font-style: italic;
    font-weight: 300;
  }

  button {
    background-color: #7786ea;
    border: none;
    color: white;
    width: 100%;
    height: 50px;
    font-size: 20px;
    font-weight: 500;
    font-style: italic;
    padding-right: 30px;
    padding-left: 30px;
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
    color: #34495E;
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
    content: '\2713';
    display: block;
    text-align: center;
    color: white;
    position: absolute;
    left: 5px;
    top: 0;
  }

  .checkbox > input:active {
    border: 2px solid #34495E;
  }


</style>
