import { createStore } from 'vuex'
import errorHandler from './errorHandler'
import authUser from './authUser'
import infoUser from './infoUser'
import tikets from './tikets'
import appEvent from './appEvent'

export default createStore({
  modules: {
    appEvent,
    errorHandler,
    authUser,
    infoUser,
    tikets
  }
})
