<template>
  <div class="app-select">
    <div class="app-select__container grid">
      <h1>Select</h1>
      <div class="app-select__card">
        <h1 class="app-select__title">Сhoose a city</h1>
          <div class="app-select__input" @click="visible = !visible">
            {{ selectedPar }}
            <i class="ri-arrow-right-double-line app-select__icon" :class="{select__icon__down: visible}"></i>
          </div>

          <div class="app-select__data" v-if="visible">
            <div class="app-select__data-option" v-for="p in parameters" :key="p.id" @click="selectParameter(p)">
              {{ p }}
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'appSelect',
  props: {
    parameters: {
      type: Array,
      default () {
        return []
      }
    },
    selectedPar: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    visible: true
  }),
  methods: {
    selectParameter (p) {
      this.$emit('selectParameter', p)
      this.visible = !this.visible
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/variables.scss';

.app-select {

  &__card {
    position: relative;
    width: 400px;
    max-height: 400px;
    background-color: $container-color;
    padding: 2rem 1.5rem 1.5rem;
    border-radius: 1rem;
    overflow: hidden;
  }

  &__title,
  &__subtitle {
    position: relative;
  }

  &__title {
    font-size: $h1-font-size;
    padding-bottom: .5rem;
    margin-bottom: 1rem;
    border-bottom: 3px solid hsl(219, 4%, 20%);
  }

  &__input {
    position: relative;
    width: 350px;
    display: inline-flex;
    font-size: $h2-font-size;
    color: $text-color;
    font-weight: 400;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
    i {
      position: absolute;
      right: 0;
      font-size: 1.4rem;
      transition: .3s;
    }
  }

  &__data {
    display: grid;
    grid-template-columns: repeat(1, max-content);
    gap: .5rem 0rem;
    margin: 1rem 0;
    height: 100%;
    overflow: scroll;
  }

  &__data-option {
    width: 300px;
    padding: .7rem;
    font-size: $normal-font-size;
    color: $white-color;
    border-radius: .3rem;
    transition: .3s;
    cursor: pointer;
    &:hover{
      background-color: hsl(219, 4%, 20%);
      color: $first-color;
      transform: translateX(0.5rem);
    }
  }
}
.select__icon__down {
  transform: rotate(90deg);
}
.app-select__input:hover .app-select__icon {
  transform: rotate(90deg);
}

</style>
