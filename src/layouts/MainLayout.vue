<template>
  <div class="main-layout">
    <app-loader v-if="loading"/>
      <div v-else>
        <app-sidebar
        :userInfo="INFO"
        @toggleMenu="addFull()"/>

      <main class="container" :class="{full: fullSize }">
        <div class="shape shape__big"></div>
        <div class="shape shape__small"></div>

        <div class="page">
          <router-view />
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AppLoader from '@/components/appLoader.vue'
import appSidebar from '@/components/appSidebar.vue'
export default {
  components: { appSidebar, AppLoader },
  data: () => ({
    fullSize: false,
    loading: true
  }),
  computed: {
    ...mapGetters([
      'INFO',
      'TIKETS'
    ])
  },
  methods: {
    addFull () {
      this.fullSize = !this.fullSize
    }
  },
  async mounted () {
    await this.$store.dispatch('GET_TIKETS')
    await this.$store.dispatch('GET_INFO').then(() => {
      setTimeout(() => {
        this.loading = false
      }, 0)
    })
  }
}
</script>

<style lang="scss">
.container .shape__big,
.container .shape__small {
  position: absolute;
  z-index: -1;
}

.container .shape__big {
  left: -10rem;
  top: -5rem;
}

.container .shape__small {
  right: 1rem;
  bottom: 3rem;
}
</style>
