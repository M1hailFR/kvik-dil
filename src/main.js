import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import auth from '@/firebase'
import '@/assets/styles/index.scss'

auth.onAuthStateChanged(() => {
  const app = createApp(App)
  app.use(store)
  app.use(router)
  app.mount('#app')
})
