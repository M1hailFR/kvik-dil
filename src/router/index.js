import { createRouter, createWebHistory } from 'vue-router'
import auth from '@/firebase'
const routes = [
  {
    path: '/',
    name: 'home',
    meta: { layout: 'main', auth: true },
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/Profile',
    name: 'profile',
    meta: { layout: 'main', auth: true },
    component: () => import('../views/ProfView.vue')
  },
  {
    path: '/Tiket',
    name: 'Tiket',
    meta: { layout: 'main', auth: true },
    component: () => import('../views/TiketView.vue')
  },
  {
    path: '/CreateTikets',
    name: 'createTikets',
    meta: { layout: 'main', auth: true },
    component: () => import('../components/tiketsCreate.vue')
  },
  {
    path: '/UpdateTikets',
    name: 'updateTikets',
    meta: { layout: 'main', auth: true },
    component: () => import('../components/tiketsUpdate.vue')
  },
  {
    path: '/Setting',
    name: 'setting',
    meta: { layout: 'main', auth: true },
    component: () => import('../views/SettingView.vue')
  },
  {
    path: '/Login',
    name: 'Login',
    meta: { layout: 'empty' },
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/Register',
    name: 'Register',
    meta: { layout: 'empty' },
    component: () => import('../views/RegisterView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const user = auth.currentUser
  const requireAuth = to.matched.some(Record => Record.meta.auth)
  if (requireAuth && !user) {
    next('/Login')
    this.$com('войдите в ситему')
  } else {
    next()
  }
})

export default router
