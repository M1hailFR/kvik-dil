import { getDatabase, ref, child, get } from 'firebase/database'
export default {
  state: {
    INFO: {}
  },
  getters: {
    INFO: s => s.INFO
  },
  mutations: {
    SET_INFO (state, info) {
      state.INFO = info
    },
    CLEAR_INFO (state) {
      state.INFO = {}
    }
  },
  actions: {
    async GET_INFO ({ commit, dispatch }) {
      const uid = await dispatch('GET_UID')
      const dbRef = ref(getDatabase())
      get(child(dbRef, `/users/${uid}/info`)).then((snapshot) => {
        if (snapshot.exists()) {
          const info = snapshot.val()
          commit('SET_INFO', info)
          console.log('GET_INFO')
        } else {
          console.log('No data available')
        }
      }).catch((e) => {})
    }
  }
}
