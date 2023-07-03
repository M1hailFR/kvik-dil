<template>
  <div class="tiketsCreate">
    <form class="appForm__form" @submit.prevent="createTiket">
      <h1 class="appForm__title">Create tiket</h1>
      <div class="appForm__content">
        <div class="appForm__box box1">
          <i class="ri-file-line appForm__icon"></i>
          <div class="appForm__box-input">
            <input
              type="text"
              class="appForm__input"
              placeholder=" "
              v-model="state.titleTiket">
            <label for="" class="appForm__label">Title tiket
              <small
                class="appForm__helper-text invalid"
                v-if="v$.titleTiket.$dirty && v$.titleTiket.required.$invalid"
              > should not be empty
              </small>
            </label>
          </div>
        </div>

        <div class="appForm__box">
          <i class="ri-file-text-line appForm__icon"></i>
          <div class="appForm__box-input">
            <textarea
              type="text"
              class="appForm__textarea"
              placeholder=" "
              v-model="state.descTiket">
            </textarea>
            <label for="" class="appForm__label-textarea">Description title
              <small
                class="helper-text invalid"
                v-if="v$.descTiket.$dirty && v$.descTiket.$invalid"
              > should not be empty
              </small>
            </label>
          </div>
        </div>
      </div>

      <button class="appForm__button" type="submit">
        Create
        <i class="ri-mail-send-fill appForm__icon"></i>
      </button>
    </form>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
export default {
  name: 'createTiket',
  setup () {
    const state = reactive({
      titleTiket: '',
      descTiket: ''
    })
    const rules = {
      descTiket: { required },
      titleTiket: { required }
    }
    const v$ = useVuelidate(rules, state)
    return { state, v$ }
  },
  data: () => ({}),
  methods: {
    async createTiket () {
      if (this.v$.$invalid) {
        this.v$.$touch()
        return
      }
      const formData = {
        titleTiket: this.state.titleTiket,
        descTiket: this.state.descTiket
      }

      try {
        await this.$store.dispatch('CREATE_TIKET', formData)
        this.state.titleTiket = ''
        this.state.descTiket = ''
      } catch (e) { }
    }
  }
}
</script>
