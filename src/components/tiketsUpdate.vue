<template>
  <div class="tiketsCreate">
    <form class="appForm__form" @submit.prevent="updateTiket">
      <h1 class="appForm__title">Udate tiket</h1>
        <div class="tiket-select">
          <div class="tiket-select__container">
              <p class="tiket-select-title select-btn" @click="visible = !visible">
                {{ state.selected }}
                <i class="ri-arrow-right-double-line tiket-select-icon" :class="{select__iconDown: visible}"></i>
              </p>
              <div class="tiket-select-options" v-if="visible">
                <p class="" v-for="t in arrTikets" :key="t.id" @click="selectParameter(t)">
                  {{ t.title }}
                </p>
              </div>
            </div>
          </div>
      <div class="appForm__content">
        <div class="appForm__box box1">
          <i class="ri-file-line appForm__icon"></i>
          <div class="appForm__box-input">
            <input
              type="text"
              class="appForm__input"
              placeholder=" "
              v-model="state.newTitleTiket">
            <label for="" class="appForm__label">New Title tiket
              <small
                class="appForm__helper-text invalid"
                v-if="v$.newTitleTiket.$dirty && v$.newTitleTiket.required.$invalid"
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
              v-model="state.newDescTiket">
            </textarea>
            <label for="" class="appForm__label-textarea">New Description title
              <small
                class="helper-text invalid"
                v-if="v$.newDescTiket.$dirty && v$.newDescTiket.$invalid"
              > should not be empty
              </small>
            </label>
          </div>
        </div>
      </div>

      <button class="appForm__button" type="submit">
        updateTiket
        <i class="ri-mail-send-fill appForm__icon"></i>
      </button>
    </form>
  </div>
</template>

<script>
import { reactive, computed } from 'vue'
import { useStore } from 'vuex'
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
export default {
  name: 'createTiket',
  setup () {
    const store = useStore()
    const state = reactive({
      newTitleTiket: '',
      newDescTiket: '',
      selected: 'choose tiket',
      tiketId: ''
    })
    const rules = {
      newDescTiket: { required },
      newTitleTiket: { required }
    }
    const v$ = useVuelidate(rules, state)
    const arrTikets = computed(() => store.getters.TIKETS)
    return { state, v$, arrTikets }
  },
  data: () => ({
    visible: true
  }),
  methods: {
    selectParameter (t) {
      this.visible = !this.visible
      this.state.selected = t.title
      this.state.tiketId = t.id
    },
    async updateTiket (t) {
      if (this.v$.$invalid) {
        this.v$.$touch()
        return
      }

      const formData = {
        tiketId: this.state.tiketId,
        newTitleTiket: this.state.newTitleTiket,
        newDescTiket: this.state.newDescTiket
      }

      try {
        await this.$store.dispatch('UPDATE_TIKET', formData)
        await this.$store.dispatch('GET_TIKET_BY_ID', this.state.selected.id)
      } catch (e) { }
      this.state.selected = 'shoose tiket'
      this.state.tiketId = ''
      this.state.newTitleTiket = ''
      this.state.newDescTiket = ''
    }
  }
}
</script>
<style lang="scss">
@import '@/assets/styles/variables.scss';
.tiket-select {
  position: relative;
  display: flex;
  padding-block: .9rem;
  cursor: pointer;
  width: 100%;
  margin-bottom: 2rem;
  justify-content: flex-end;
  i{
    position: absolute;
    top: 14px;
    right: 0;
    transition: .3s;
  }
}
.tiket-select-icon {
  font-size: 2rem;
}
.tiket-select-title{
  transition: .3s;
  font-size: 1.5rem;
  margin-right: 3rem;
}
.tiket-select-options {
  width: 100%;
  display: block;
  background: rgba(43, 45, 48, 0.4);
  backdrop-filter: blur(7px);
  position: absolute;
  height: 350px;
  z-index: 20;
  border-radius: 1rem;
  padding: 1.3rem 2rem;
  left: -0px;
  top: 3.5rem;
  overflow-y: scroll;
  p {
    padding: 0.7rem;
    border-radius: .5rem;
    transition: .3s;
  }
  p:hover{
    background-color: hsla(225, 4%, 20%, 0.4);
    backdrop-filter: blur(7px);
    color: $first-color;
    transform: translateX(0.5rem);
  }
}
.select__iconDown {
  transform: rotate(90deg);
}
.tiket-select-title:hover .tiket-select-icon {
  transform: rotate(90deg);
}
</style>
