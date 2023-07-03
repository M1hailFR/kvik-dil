<template>

  <app-loader v-if="state.loading"/>

  <div class="tikets" v-else>
    <div class="title__container grid">
      <h1 class="tikets__titile">Tikets list</h1>
    </div>
    <tikets-table :tiketsArr="TIKETS" />
  </div>
</template>
<script>
import AppLoader from '@/components/appLoader.vue'
import TiketsTable from '@/components/tiketsTable.vue'
import { reactive, onMounted } from 'vue'
import { useStore, mapGetters } from 'vuex'
export default {
  name: 'TiketView',
  components: {
    TiketsTable,
    AppLoader
  },
  setup () {
    const store = useStore()
    const state = reactive({
      loading: true
    })

    onMounted(async () => {
      await store.dispatch('GET_TIKETS').then(() => {
        state.loading = false
      })
    })
    return {
      state
    }
  },
  computed: {
    ...mapGetters([
      'TIKETS'
    ])
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/variables.scss';
.tikets {
  &__container {
    padding-top: 2rem;
  }
  &__title {
    font-size: $h1-font-size;
    margin-bottom: 1rem;
    padding-bottom: .5rem;
    border-bottom: 3px solid hsl(219, 4%, 20%);
  }

  &__subtitle {
    font-size: $h2-font-size;
    color: $text-color;
    font-weight: 400;
  }
}
</style>
