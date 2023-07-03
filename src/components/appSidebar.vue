<template>
  <aside :class="`${is_expanded ? 'is-expanded' : ''}`">
    <div class="logo" @click="ToggleMenu">
      <i class="ri-fire-fill"></i>
      <div class="logo-info">
        <div class="text-logo">{{userInfo.userName}}</div>
        <div class="text-logo">{{userInfo.userSurname}}</div>
      </div>
    </div>

    <div class="menu-toggle-wrap">
      <button class="menu-toggle" @click="ToggleMenu">
        <i class="ri-arrow-right-double-line"></i>
      </button>
    </div>

    <h3>Menu</h3>
    <div class="menu">
      <router-link to="/" class="button">
        <i class="ri-home-line"></i>
        <span class="text">Home</span>
      </router-link>
      <router-link to="/Profile" class="button">
        <i class="ri-account-box-line"></i>
        <span class="text">Profile</span>
      </router-link>
      <router-link to="/Tiket" class="button">
        <i class="ri-task-line"></i>
        <span class="text">Tikets</span>
      </router-link>
      <router-link to="/CreateTikets" class="button">
        <i class="ri-add-line"></i>
        <span class="text">Create tiket</span>
      </router-link>
      <router-link to="/UpdateTikets" class="button">
        <i class="ri-add-line"></i>
        <span class="text">Update tiket</span>
      </router-link>
    </div>

    <div class="border"></div>

    <div class="menu">
      <router-link to="/Setting" class="button">
        <i class="ri-settings-3-line"></i>
        <span class="text">Settings</span>
      </router-link>

      <div class="button" @click="logout()">
        <i class="ri-logout-box-line"></i>
        <span class="text">Logout</span>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  data: () => ({
    is_expanded: true
  }),
  props: {
    userInfo: {
      type: Object,
      required: true
    }
  },
  methods: {
    ToggleMenu () {
      this.is_expanded = !this.is_expanded
      this.$emit('toggleMenu')
    },
    hideMehu () {
      this.is_expanded = false
    },
    logout () {
      this.$router.push('/Login')
      this.$store.dispatch('LOGOUT')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

aside {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  background-color: $container-color;
  color: $text-color;
  width: calc(2rem + 32px);
  overflow: hidden;
  min-height: 100vh;
  padding: 1rem;
  transition: 0.3s ease-in-out;

  .border {
    border-top: 3px solid hsl(219, 4%, 20%);
    border-radius: 3px;
    margin: 1rem 0;
  }

  .logo {
    display: flex;
    margin-bottom: 2rem;
    align-items: flex-end;
    i {
      margin-left: 5px;
      color: $first-color;
      font-size: 1.5rem;
      transition: 0.3s ease-in-out;
      &:hover {
        filter: invert(15%);
      }
    }
  }
  .logo-info {
    padding-block: .4rem;
  }

  .menu-toggle-wrap {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;
    position: relative;
    top: 0;
    transition: 0.3s ease-in-out;

    .menu-toggle {
      transition: 0.3s ease-in;

      i {
        font-size: 2rem;
        color: $first-color;
        ;
        transition: 0.3s;
      }

      &:hover {
        i {
          color: $first-color-alt;
          transform: translateX(-1rem);
        }
      }
    }
  }

  h3,
  .button .text {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  h3 {
    color: $text-color;
    font-size: 2rem;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }

  .menu {
    margin: 0 -1rem;
    .button {
      display: flex;
      align-items: center;
      text-decoration: none;
      transition: 0.3s ease-in-out;
      cursor: pointer;
      padding: 0.5rem 1rem;

      i {
        font-size: 2rem;
        color: $text-color;
        transition: 0.3s ease-in-out;
      }

      .text {
        color: $text-color;
        transition: 0.3s ease-in-out;
      }

      &:hover {
        background-color: hsl(219, 4%, 20%);
        border-right: 5px solid $first-color-alt;

        i,
        .text {
          color: $first-color-alt;

        }
      }

      &.router-link-active {

        border-right: 5px solid $first-color;

        i,
        .text {
          color: $first-color;
        }
      }
    }
  }

  &.is-expanded {
    width: $sidebar-width;

    .menu-toggle-wrap {
      top: 0rem;
      right: -15px;
      border-right: 5px solid $first-color;

      .menu-toggle {
        transform: rotate(-180deg);
      }
    }

    .logo {
      i {
        font-size: 3rem;
      }
    }

    h3,
    .button .text {
      opacity: 1;
    }

    .text-logo {
      opacity: 1;
      color: $first-color;
      font-size: $h3-font-size;
      font-weight: $font-semi-bold;
    }

    .button {
      i {
        margin-right: 1rem;
      }
    }

    .footer {
      opacity: 0;
    }
  }
}

.text-logo {
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
  font-size: 2rem;
  font-weight: $font-bold;
  color: $first-color;
}</style>
