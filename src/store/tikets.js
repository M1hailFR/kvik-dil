import { getDatabase, ref, push, onValue, set, update } from 'firebase/database'
export default {
  state: {
    TIKETS: {},
    TIKETSById: {}
  },
  getters: {
    TIKETS: s => s.TIKETS,
    TIKETSById: s => s.TIKETSById
  },
  mutations: {
    SET_TIKETS (state, tiketsArr) {
      state.TIKETS = tiketsArr
    },
    UPDATE_TIKETSById (state, TIKETSById) {
      state.TIKETSById = TIKETSById
    },
    CLEAR_TIKETS (state) {
      state.TIKETS = {}
    }
  },
  actions: {
    async CREATE_TIKET ({ commit, dispatch }, { titleTiket, descTiket }) {
      const uid = await dispatch('GET_UID')
      const db = getDatabase()
      set(push(ref(db, 'tikets')), {
        title: titleTiket,
        description: descTiket,
        userID: uid
      }).catch((e) => {
        commit('SET_ERROR', e)
        console.log(e)
      })
      console.log('CREATE_TIKET')
    },
    async GET_TIKETS ({ commit }) {
      const db = getDatabase()
      onValue(ref(db, 'tikets'), (snapshot) => {
        const tikets = snapshot.val()
        const tiketsArr = Object.keys(tikets).map(key => ({ ...tikets[key], id: key }))
        commit('SET_TIKETS', tiketsArr)
        console.log('GET_TIKET')
      })
    },
    async GET_TIKET_BY_ID ({ commit, dispatch }, id) {
      const db = getDatabase()
      onValue(ref(db, `tikets/${id}`), (snapshot) => {
        const TIKETSById = snapshot.val()
        commit('UPDATE_TIKETSById', TIKETSById)
      })
    },
    async UPDATE_TIKET ({ commit, dispatch, getters }, toUpdate) {
      const db = getDatabase()
      const updateData = {
        ...getters.TIKETSById,
        title: toUpdate.newTitleTiket,
        description: toUpdate.newDescTiket
      }
      console.log(updateData)
      update(ref(db, `tikets/${toUpdate.tiketId}/`), updateData).then(() => {
        commit('SET_TIKETS', updateData)
        dispatch('GET_TIKETS')
      }).catch((e) => {
        commit('SET_ERROR', e)
        throw e
      })
    }
  }
}
