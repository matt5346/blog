import Vue from 'vue'
import Vuei18n from 'vue-i18n'
import App from './App.vue'
import router from './router'
import store from './store/store'

Vue.config.productionTip = false

Vue.use(Vuei18n)

const messages = {
  en: {
    title: 'Lorem Blorem'
  },
  ru: {
    title: 'Лорем Блорем'
  }
}

const i18n = new Vuei18n({
  locale: 'en',
  messages
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
