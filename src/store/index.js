import Vue from 'vue'
import Vuex from 'vuex'
import puppies from './puppies'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { puppies },
  namespaced: true
})
