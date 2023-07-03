import auth from '@/firebase/index'
import { getDatabase, ref, set } from 'firebase/database'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth'
export default {
  state: {},
  getters: {},
  mutations: {},
  actions: {
    async LOGIN ({ commit }, { email, password }) {
      await signInWithEmailAndPassword(auth, email, password).then(() => {
        console.log('LOGIN')
      }).catch((e) => {
        commit('SET_ERROR', e)
        console.log(e)
      })
    },
    async LOGOUT ({ commit }) {
      await signOut(auth).then(() => {
        commit('CLEAR_INFO')
        commit('CLEAR_TIKETS')
        console.log('LOGOUT')
      }).catch((e) => {
        commit('SET_ERROR', e)
        console.log(e)
      })
    },
    async REGISTER ({ commit, dispatch }, { email, name, surname, birthDate, city, password }) {
      await createUserWithEmailAndPassword(auth, email, password)
      const uid = await dispatch('GET_UID')
      const db = getDatabase()
      await set(ref(db, `users/${uid}/info`), {
        userName: name,
        userSurname: surname,
        birthDate: birthDate,
        email: email,
        city: city
      }).catch((e) => {
        commit('SET_ERROR', e)
        console.log(e)
      })
      console.log('REGISTER')
    },
    GET_UID () {
      const user = auth.currentUser
      return user ? user.uid : null
    }
  }
}
