<template>
  <section class="home section" id="home">
    <div class="home__container grid">
      <div class="home__data">
        <h1 class="home__title">
          Vue app
        </h1>
        <h3 class="home__prem">
          <i class="ri-fire-fill"></i> мини-личный кабинет
        </h3>
      </div>

      <h1 class="home__card-title"> My setup </h1>
      <div class="home__card">
        <div class="home__card-data">
          <div class="home__card-icon">
            <i class="ri-fire-line"></i>
          </div>
          <h2 class="home__card-name">Firebase</h2>
          <p>Auth</p>
          <p>Database</p>
          <p>Hosting</p>
        </div>
        <div class="home__card-data">
          <div class="home__card-icon">
            <i class="ri-vuejs-line"></i>
          </div>
          <h2 class="home__card-name">Vue</h2>
          <p>Vuex</p>
          <p>Vue-router</p>
          <p>Eslint</p>
        </div>
        <div class="home__card-data">
          <div class="home__card-icon">
            <i class="ri-brush-line"></i>
          </div>
          <h2 class="home__card-name">Styles</h2>
          <p>Scss</p>
          <p>Remixicon</p>
        </div>

        <div class="home__card-data">
          <div class="home__card-icon">
            <i class="ri-shape-fill"></i>
          </div>
          <h2 class="home__card-name">Media</h2>
          <p>medium</p>
          <p>laptops</p>
          <p>desktops</p>
        </div>

        <div class="home__card-data">
          <div class="home__card-icon">
            <i class="ri-checkbox-multiple-line"></i>
          </div>
          <h2 class="home__card-name">data validity</h2>
          <p>vuelidate</p>
        </div>

      </div>
    </div>
  </section>
  <router-link to="/CreateTikets" class="home__button">
    <i class="ri-add-line"></i>
  </router-link>
</template>

<script>

export default {
  name: 'HomeView',
  components: {}
}
</script>

<style lang="scss">
@import '@/assets/styles/variables.scss';

.home {
  position: relative;
  height: 100%;

  &__container {
    position: relative;
    margin: 0 auto;
  }

  &__data {
    text-align: center;
  }

  &__title {
    font-size: $h1-font-size;
  }

  &__subtitle {
    font-size: $h2-font-size;
    margin-bottom: .25rem;
  }

  &__prem {
    font-size: $h2-font-size;
    font-weight: 400;
    color: $text-color;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 2rem;
    margin-bottom: 2rem;

    i {
      font-size: 5rem;
      color: $first-color;
    }
  }

  &__card {
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 4rem;
    margin: 0 auto;
    margin-bottom: 5rem;
  }

  &__card-title {
    text-align: center;
  }

  &__card-data {
    width: 200px;
    height: 230px;
    padding: 1rem;
    border-radius: 1.5rem;
    background-color: hsla(210, 6%, 7%, 0.5);
    backdrop-filter: blur(16px);
    text-align: center;
    align-items: baseline;
    transition: 0.3s;
    p {
      text-align: center;
      gap: 2rem;
      margin-bottom: 8px;
    }
    &:hover{
      transform: scale(1.1) translateY(1rem);
    }
    &:hover{
      transform: scale(1.1) translateY(1rem);
    }
    &:hover p {
      color: $first-color;
      transform: scale(1.1);
    }
    &:hover i {
      color: $first-color;
      transform: scale(1.1);
    }
  }

  &__card-name {
    font-size: $h2-font-size;
    font-weight: $font-bold;
    margin-bottom: .8rem;
  }

  &__card-icon {
    background-color: $container-color;
    border-radius: 50%;
    padding: .376rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 2.5rem;
    margin-bottom: .5rem;
  }

  &__button {
    position: absolute;
    border: 2px solid $first-color;
    width: 70px;
    height: 70px;
    right: 3rem;
    bottom: 3rem;
    border-radius: 50%;
    display: flex;
    justify-self: center;
    justify-content: center;
    align-items: center;
    font-size: 2.5rem;
    font-weight: $font-medium;
    color: $first-color;

    &::before {
      content: '';
      position: absolute;
      border: 2px solid hsl(158, 98%, 43%);
      box-shadow: 0 0 12px hsl(158, 98%, 53%);
      width: 100px;
      height: 100px;
      border-radius: 50%;
      transition: .3s;
      animation: btn-home 3s infinite;
    }

    @keyframes btn-home {
      0% {
        box-shadow: 0 0 12px hsl(187, 98%, 53%);
      }

      50% {
        box-shadow: 0 0 24px hsl(180, 98%, 53%);
      }
    }
  }
}</style>
