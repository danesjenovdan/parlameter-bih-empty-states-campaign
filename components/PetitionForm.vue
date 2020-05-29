<template>
    <div class="container-c flex flex-justify--center flex-align--center">
    <div class="mb64 flex flex--column flex-align--center flex-justify--center">

      <form class="vue-form" @submit.prevent="submit">
          <div class="error-message">
              <p v-show="!email.valid">Unesite ispravnu E-mail adresu</p>
          </div>
          <fieldset>
              <div>
                  <input type="text" name="name" id="name" required="" v-model="name">
              </div>
              <div>
                  <input type="email" name="email" id="email" required=""
                         :class="{ email , error: !email.valid }"
                         v-model="email.value">
              </div>
              <label class="label">Odaberite parlament</label>

              <div>
                  <ul class="vue-form-list" style="padding-left: 0px">
                      <li v-for="(feature, index) in features">
                          <input type="checkbox"
                                 :value="feature"
                                 :id="'cb-feature-'+index"
                                 v-model="selection.features">
                          <label :for="'cb-feature-'+index">{{feature}}</label>
                      </li>
                      <li>
                          <input type="checkbox" id="checkbox-all" @click="checkAll">
                          <label for="checkbox-all">Sve</label>
                      </li>
                  </ul>

                  <ul class="vue-form-list" style="padding-left: 0px">
                      <li>
                          <input type="checkbox"
                                 value="Dozvoljavam da objavite moje ime"
                                 id="consent"
                                 v-model="consent.value">
                          <label>Dozvoljavam da objavite moje ime</label>
                      </li>
                  </ul>
              </div>

              <div>
                  <input type="submit" value="POTPISUJEM!">
              </div>

              <span style="font-style: italic">* Ime i prezime tražimo isključivo u svrhu podrške zahtjevima za otvaranje Sabora i ne objavljujemo ih bez privole niti u bilo koje druge svrhe.</span>
              <br><span style="font-style: italic">** Ostavite e-mail adresu ako želite primati obavjesti o kampaniji za otvaranje podatka i o aktivnostima Parlametra.</span>
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
      name: "Ime i prezime",
      email: {
        value: "E-mail adresa",
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
    }

    .vue-form div {
      position: relative;
      margin: 20px 0;
    }

    .vue-form input[type="text"],
    .vue-form input[type="email"],
    .vue-form textarea {
      display: block;
      width: 100%;
      appearance: none;
    }

    .vue-form input[type="text"],
    .vue-form input[type="email"],
    .vue-form textarea,
    .vue-form select {
      padding: 12px;
      border: 1px solid #cfd9db;
      background-color: #ffffff;
      border-radius: 0.25em;
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.08);
    }

    .vue-form .vue-form-list::after {
      clear: both;
      content: "";
      display: table;
    }

    .vue-form .vue-form-list li {
      display: inline-block;
      position: relative;
      user-select: none;
      margin: 0 26px 16px 0;
      float: left;
    }

    .vue-form input[type="checkbox"] {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      margin: 0;
      padding: 0;
      opacity: 0;
      z-index: 2;
    }

    .vue-form input[type="checkbox"] + label {
      padding-left: 24px;
    }

    .vue-form input[type="checkbox"] + label::before,
    .vue-form input[type="checkbox"] + label::after {
      content: "";
      display: block;
      position: absolute;
      left: 0;
      top: 50%;
      margin-top: -8px;
      width: 16px;
      height: 16px;
    }

    .vue-form input[type="checkbox"] + label::before {
      border: 1px solid #7784ea;
      background: #ffffff;
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.08);
    }

    .vue-form input[type="checkbox"] + label::after {
      background-color: #7784ea;
      background-position: center center;
      background-repeat: no-repeat;
      box-shadow: 0 0 5px rgba(44, 151, 222, 0.4);
      display: none;
    }

    .vue-form input[type="checkbox"] + label::after {
      background-image: url("data:image/svg+xml;charset=utf-8,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%0D%0A%3C%21--%20Generator%3A%20Adobe%20Illustrator%2018.1.1%2C%20SVG%20Export%20Plug-In%20.%20SVG%20Version%3A%206.00%20Build%200%29%20%20--%3E%0D%0A%3C%21DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%0D%0A%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%0D%0A%09%20width%3D%2216px%22%20height%3D%2216px%22%20viewBox%3D%220%200%2016%2016%22%20enable-background%3D%22new%200%200%2016%2016%22%20xml%3Aspace%3D%22preserve%22%3E%0D%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%23FFFFFF%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-miterlimit%3D%2210%22%20points%3D%225%2C8%207%2C10%2011%2C6%20%22%2F%3E%0D%0A%3C%2Fsvg%3E");
    }

    .vue-form input[type="checkbox"]:checked + label::before,
    .vue-form input[type="checkbox"]:checked + label::after {
      animation: cd-bounce 0.3s;
    }

    .vue-form textarea {
      min-height: 120px;
      resize: vertical;
      overflow: auto;
    }

    .vue-form input[type="submit"] {
      border: none;
        width: 100%;
      background: #7784ea;
      padding: 12px 20px;
      color: #ffffff;
      font-weight: bold;
      cursor: pointer;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      appearance: none;
    }

    .no-touch .vue-form input[type="submit"]:hover {
      background: #7784ea;
    }

    .vue-form input[type="submit"]:focus {
      outline: none;
      background: #7784ea;
    }

    .vue-form input[type="submit"]:active {
      transform: scale(0.9);
    }

    .vue-form .error-message {
      height: 35px;
      margin: 0px;
    }

    .vue-form .error-message p {
      background: #e94b35;
      color: #ffffff;
      font-size: 1.4rem;
      text-align: center;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      border-radius: 0.25em;
      padding: 16px;
    }

    .vue-form .error {
      border-color: #e94b35 !important;
    }

    @-webkit-keyframes cd-bounce {
      0%,
      100% {
        -webkit-transform: scale(1);
      }
      50% {
        -webkit-transform: scale(0.8);
      }
    }
    @-moz-keyframes cd-bounce {
      0%,
      100% {
        -moz-transform: scale(1);
      }
      50% {
        -moz-transform: scale(0.8);
      }
    }
    @keyframes cd-bounce {
      0%,
      100% {
        transform: scale(1);
      }
      50% {
        transform: scale(0.8);
      }
    }

</style>