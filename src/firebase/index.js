import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCjcAiP0R8vlI6R1QfbrdjrQMsIbfoGCRQ',
  authDomain: 'vue-tt-app.firebaseapp.com',
  projectId: 'vue-tt-app',
  storageBucket: 'vue-tt-app.appspot.com',
  messagingSenderId: '532757318690',
  appId: '1:532757318690:web:a7dca8865ec7966da94e7b',
  measurementId: 'G-YYVZQYYC81'
}
initializeApp(firebaseConfig)
const auth = getAuth()

export default auth
