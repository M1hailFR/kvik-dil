<template>
  <div class="table table__container">
    <ul class="table__content">

      <li class="table__header">
        <div class="col col-1">Id</div>
        <div class="col col-2">Tiket title</div>
        <div class="col col-3">Tiket description</div>
        <div class="col col-4">Open</div>
      </li>

      <li class="table__row" v-for="(t, idx) of paginatedTikets" :key="t.id">
        <div class="col col-1" data-label="Tiket Id">{{ idx }}</div>
        <div class="col col-2" data-label="Tiket title">{{ t.title }}</div>
        <div class="col col-3" data-label="Tiket description">{{ t.description }}</div>
        <button class="col col-4 table__btn" data-label="Open">
          <i class="ri-arrow-right-fill"></i>
        </button>
      </li>
    </ul>
  </div>
  <div class="table__pagination">
    <div class="table__page-number" v-for="p in pages" :key="p" :class="{ 'table__page-selected': p === state.pageNumber }"
      @click="nextPage(p)">
      {{ p }}
    </div>
  </div>
</template>

<script>
import { reactive, computed } from 'vue'
export default {
  setup (props) {
    const state = reactive({
      pageNumber: 1,
      perPage: 5
    })
    const pages = computed(() => { return Math.ceil(props.tiketsArr.length / 5) })
    const paginatedTikets = computed(() => {
      const from = (state.pageNumber - 1) * state.perPage
      const to = from + state.perPage
      return props.tiketsArr.slice(from, to)
    })
    function nextPage (page) {
      state.pageNumber = page
    }
    return { state, pages, paginatedTikets, nextPage }
  },
  props: {
    tiketsArr: {
      type: Array
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/variables.scss';

.table {
  position: relative;

  &__container {
    max-width: 1024px;
    min-height: 70vh;
    margin-top: 2rem;
    margin-left: auto;
    margin-right: auto;
  }

  &__content {
    height: 100%;
    li {
      border-radius: 3px;
      padding: 25px 30px;
      display: flex;
      justify-content: space-between;
      margin-bottom: 25px;
      font-size: $normal-font-size;
      font-weight: $font-medium;
      color: $white-color;
    }

    .table__header {
      color: $first-color;
      background-color: $container-color;
      font-size: $h2-font-size;
      text-transform: uppercase;
      letter-spacing: 0.03em;
      align-items: center;
    }

    .table__row {
      background-color: $container-color;
      box-shadow: 0px 0px 2px 1px hsl(219, 4%, 20%);
      cursor: pointer;
      transition: .3s;
      &:hover {
        scale: (1.01);
        box-shadow: 0px 0px 2px 1px $first-color;
        transform: translateY(-.5rem);
      }
      &:hover .table__btn {
        color: $first-color;
        scale: (1.1);
        transform: translateX(.5rem);
      }
    }
    .col-1 {
      min-width: 30px;
      flex-basis: 5%;
    }

    .col-2 {
      min-width: 150px;
      flex-basis: 20%;
    }

    .col-3 {
      flex-basis: 70%;
    }

    .col-4 {
      width: 50px;
    }
    .col-1,
    .col-2,
    .col-3 {
      padding: 0 1rem;
    }
    .col-4 {
      text-align: center;
    }
    .table__btn{
      background: none;
      border: none;
      color: $white-color;
      font-size: 1.4rem;
      cursor: pointer;
      transition: .3s;
    }
  }

  &__pagination {
    margin: 0 auto;
    position: absolute;
    bottom: 10px;
    left: 24.1%;
    display: flex;
    gap: 1rem;
  }

  &__page-number {
    padding: .2rem .5rem;
    font-size: $normal-font-size;
    font-weight: $font-bold;
    border-radius: .2rem;
    background-color: $first-color-alt;
    color: $black-color;
  }
}
</style>
