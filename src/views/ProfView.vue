<template>
  <div class="profile">
    <div class="profile__container grid">
      <h1>Profile</h1>
      <div class="profile__card">
        <h1 class="profile__title">Info</h1>

        <div class="profile__data">

          <div class="profile__data-group">
            <div class="profile__img">
              <img src="@/assets/ava.jpg" alt="">
              <i class="ri-user-3-line pofile__icon"></i>
            </div>
            <h2 class="profile__subtitle">{{ INFO.userName }} {{ INFO.userSurname }}</h2>
          </div>

          <div class="profile__data-group">
            <i class="ri-mail-add-line profile__icon"></i> E-mail: {{ INFO.email }}
          </div>

          <div class="profile__data-group">
            <i class="ri-cake-2-line profile__icon"></i> Birth date: {{ INFO.birthDate }}
          </div>

          <div class="profile__data-group">
            <i class="ri-building-2-line profile__icon"></i> City: {{ INFO.city }}
          </div>

        </div>
      </div>
    </div>
    <app-select
        :parameters="cities"
        :selectedPar="city"
        @selectParameter="selectCity"
      />
  </div>
</template>

<script>
import AppSelect from '@/components/appSelect.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'ProfileView',
  components: { AppSelect },
  data: () => ({

    cities: [
      'Moscow', 'Orenburg', 'Rostov', 'Orsk', 'Saint Petersburg', 'Voronezh', 'Sorochinsk', 'Samara', 'Ufar'
    ],
    visible: false,
    city: 'Your city'
  }),
  computed: {
    ...mapGetters([
      'INFO'
    ])
  },
  methods: {
    selectCity (p) {
      this.city = p
    }
  },
  mounted () {
    setTimeout(() => {
      this.loading = false
    }, 1500)
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/variables.scss';

.profile {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;

  &__card {
    position: relative;
    width: 400px;
    height: 400px;
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
    margin-bottom: 1rem;
    padding-bottom: .5rem;
    border-bottom: 3px solid hsl(219, 4%, 20%);
  }

  &__subtitle {
    font-size: $h2-font-size;
    color: $text-color;
    font-weight: 400;
  }

  &__data {
    display: grid;
    grid-template-columns: repeat(1, max-content);
    gap: 1rem 1.25rem;
    margin: 2rem 0;
  }

  &__data-group {
    display: inline-flex;
    align-items: center;
    column-gap: .9rem;
    font-size: $normal-font-size;
    color: $white-color;

    i {
      font-size: 1.4rem;
    }
  }
  &__img {
    position: relative;
    width: 150px;
    height: 150px;
    background-color: $first-color-alt;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-self: center;
    z-index: 1;
    i {
      position: absolute;
      font-size: 4rem;
      z-index: 2;
    }
    img {
      object-fit: contain;
      border-radius: 50%;
      z-index: 3;
    }
  }
}
</style>
