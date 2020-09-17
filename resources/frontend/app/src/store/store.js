import Vue from 'vue'
import Vuex from 'vuex'

// MODULES
import Posts from './modules/posts'
import Portfolio from './modules/portfolio'

Vue.use(Vuex)

const mainStore = {
  modules: {
    Posts,
    Portfolio
  },
  state: {
    isLoaded: false
  }
}

export const store = new Vuex.Store(mainStore)

export default store
