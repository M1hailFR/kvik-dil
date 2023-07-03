<template>
  <div class="auth register">
    <div class="shape shape__big"></div>
    <form class="auth__form" @submit.prevent="registerUser">
      <div class="shape shape__small"></div>
      <h1 class="auth__title">Register account</h1>
      <div class="auth__content">

        <div class="auth__box">
          <i class="ri-mail-add-line auth__icon"></i>
          <div class="auth__box-input">
            <input
              type="email"
              class="auth__input"
              placeholder=" "
              v-model="state.email"
            >
            <label for='' class="auth__label">E-mail
              <small
                class="auth__helper-text invalid"
                v-if="v$.email.$dirty && v$.email.required.$invalid"
              > should not be empty
              </small>
              <small
                class="helper-text invalid"
                v-else-if="v$.email.$dirty && v$.email.email.$invalid"
              > is incorrect
              </small>
            </label>
          </div>
        </div>

        <div class="auth__box">
          <i class="ri-user-line auth__icon"></i>
          <div class="auth__box-input">
            <input
              type="text"
              class="auth__input"
              placeholder=" "
              v-model="state.name"
            >
            <label for='' class="auth__label">Name
              <small
                class="appForm__helper-text invalid"
                v-if="v$.name.$dirty && v$.name.required.$invalid"
              > should not be empty
              </small>
            </label>
          </div>
        </div>

        <div class="auth__box">
          <i class="ri-user-shared-line auth__icon"></i>
          <div class="auth__box-input">
            <input
              type="text"
              class="auth__input"
              placeholder=" "
              v-model="state.surname"
            >
            <label for='' class="auth__label">Surname
              <small
                class="appForm__helper-text invalid"
                v-if="v$.surname.$dirty && v$.surname.required.$invalid"
              > should not be empty
              </small>
            </label>
          </div>
        </div>

        <div class="auth__box">
          <i class="ri-cake-2-line auth__icon"></i>
          <div class="auth__box-input">
            <input
              type="date"
              class="auth__input"
              placeholder=" "
              v-model="state.birthDate"
            >
            <label for='' class="auth__label">birth date
              <small
                class="appForm__helper-text invalid"
                v-if="v$.birthDate.$dirty && v$.birthDate.required.$invalid"
              > should not be empty
              </small>
            </label>
          </div>
        </div>

        <div class="auth__box">
          <i class="ri-building-2-line auth__icon"></i>
          <div class="auth__box-input">

            <div class="auth__select">
              <p class="auth__select-title select-btn" @click="state.visible = !state.visible">
                {{ state.city }}
                <i class="ri-arrow-right-double-line auth__icon" :class="{ auth__iconDown: state.visible }"></i>
              </p>
            <div class="auth__select-options" v-if="state.visible">
              <p class="" v-for="c in cities" :key="c.id" @click="selectCity(c)">
                {{ c }}
              </p>
            </div>
            </div>
          </div>
        </div>

        <div class="auth__box">
          <i class="ri-lock-line auth__icon"></i>
          <div class="auth__box-input">
            <input
              id="inputPas"
              type="password"
              class="auth__input"
              autocomplete="current-password webauthn"
              placeholder=" "
              v-model="state.password"
            >
            <label for="" class="auth__label">Password
              <small
                class="helper-text invalid"
                v-if="v$.password.$dirty && v$.password.minLength.$invalid"
              > must be {{ v$.password.minLength.$params.min }} characters. Now {{ state.password.length }}
              </small>
            </label>
            <div @click="showHiddenPas()">
              <i class="ri-eye-off-line auth__icon-eye" id="iconEye"></i>
            </div>
          </div>
        </div>

        <div class="auth__box">
          <i class="ri-lock-line auth__icon"></i>
          <div class="auth__box-input">
            <input
              id="inputPas2"
              type="password"
              class="auth__input"
              autocomplete="current-password webauthn"
              placeholder=" "
              v-model="state.repeatPassword"
            >
            <label for="" class="auth__label">Repeat password
              <small
                class="helper-text invalid"
                v-if="v$.repeatPassword.$dirty && v$.repeatPassword.$invalid && state.password != state.repeatPassword"
              > incorrect
              </small>
            </label>
          </div>
        </div>

      </div>

      <div class="auth__check">
        <div class="auth__check-group">
          <input
            type="checkbox"
            class="auth__check-input"
            v-model="state.proof"
          >
          <label for="" class="auth__check-label">proof</label>
        </div>
      </div>

      <button class="auth__button" type="submit">
        Register
        <i class="ri-login-circle-line auth__icon-login"></i>
      </button>

      <p class="auth__register">
        <router-link class="auth__register-link" to="/Login">Go to login</router-link>
      </p>
    </form>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { email, required, minLength } from '@vuelidate/validators'
export default {
  name: 'RegisterView',
  setup () {
    const state = reactive({
      visible: false,
      email: '',
      name: '',
      surname: '',
      birthDate: '',
      password: '',
      repeatPassword: '',
      proof: '',
      city: 'Your city'
    })
    const rules = {
      password: { required, minLength: minLength(8) },
      repeatPassword: { required },
      email: { required, email },
      name: { required },
      surname: { required },
      birthDate: { required },
      city: { required },
      proof: { required }
    }
    const v$ = useVuelidate(rules, state)
    const cities = ['Moscow', 'Orenburg', 'Rostov', 'Orsk', 'Saint Petersburg', 'Voronezh', 'Sorochinsk', 'Samara', 'Ufar']
    return { state, v$, cities }
  },
  data: () => ({}),
  methods: {
    async registerUser () {
      if (this.v$.$invalid) {
        this.v$.$touch()
        return
      }
      const formData = {
        email: this.state.email,
        name: this.state.name,
        surname: this.state.surname,
        birthDate: this.state.birthDate,
        city: this.state.city,
        password: this.state.password,
        repeatPassword: this.state.repeatPassword
      }
      try {
        await this.$store.dispatch('REGISTER', formData)
        this.$router.push('/')
      } catch (e) {}
    },
    showHiddenPas () {
      this.$store.dispatch('showRegPas')
    },
    selectCity (c) {
      this.state.city = c
      this.state.visible = false
    }
  }
}
</script>
