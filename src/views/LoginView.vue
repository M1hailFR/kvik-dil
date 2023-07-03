<template>
  <div class="auth login">
    <div class="shape shape__big"></div>
    <form class="auth__form" @submit.prevent="loginUser">
      <div class="shape shape__small"></div>
      <h1 class="auth__title">Login</h1>
      <div class="auth__content">
        <div class="auth__box">
          <i class="ri-user-line auth__icon"></i>

          <div class="auth__box-input">
            <input
              type="email"
              class="auth__input"
              placeholder=" "
              v-model="state.email"
            >
            <label for="" class="auth__label">E-mail
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
          <i class="ri-lock-line auth__icon"></i>

          <div class="auth__box-input">
            <input
              id="inputPas3"
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
      </div>

      <div class="auth__check">
        <div class="auth__check-group">
          <input
            type="checkbox"
            class="auth__check-input"
            v-model="state.remember"
          >
          <label for="" class="auth__check-label">Remember me</label>
        </div>

        <a href="#" class="auth__forgot">Forgot Password?</a>
      </div>

      <button class="auth__button" type="submit">
        Login
        <i class="ri-login-circle-line auth__icon-login"></i>
      </button>

      <p class="auth__register">
        Do you have an account?
        <router-link class="auth__register-link" to="/Register">Go to register</router-link>
      </p>
    </form>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { email, required, minLength } from '@vuelidate/validators'
export default {
  name: 'LoginView',
  setup () {
    const state = reactive({
      password: '',
      email: '',
      remember: ''
    })
    const rules = {
      password: { required, minLength: minLength(8) },
      email: { required, email }
    }
    const v$ = useVuelidate(rules, state)
    return { state, v$ }
  },
  data: () => ({}),
  methods: {
    async loginUser () {
      if (this.v$.$invalid) {
        this.v$.$touch()
        return
      }
      const formData = {
        email: this.state.email,
        password: this.state.password
      }

      try {
        await this.$store.dispatch('LOGIN', formData)
        this.$router.push('/')
      } catch (e) {}
    },
    showHiddenPas () {
      this.$store.dispatch('showLogPas')
    }
  }
}
</script>
