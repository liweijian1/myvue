import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import * as getters from './getters'
import * as actions from './action'
import mutations from './mutations'

const debug = process.env.NODE_ENV !== 'production'
Vue.use(Vuex)

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  // VUEX调试
  strict: debug

})
