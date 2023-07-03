export default {
  state: {
    error: null
  },
  getters: {
    error: s => s.error
  },
  mutations: {
    SET_ERROR (state, error) {
      state.error = error
    },
    CLEAR_ERROR (state) {
      state.error = null
    }
  },
  actions: {
  }
}
