import Vue from 'vue'
import Vuei18n from 'vue-i18n'
import App from './App.vue'
import router from './router'
import store from './store/store'

Vue.config.productionTip = false

Vue.use(Vuei18n)

const messages = {
  en: {
    title: 'Lorem Blorem',
    btnCheck: 'Check',
    send: 'Send',
    close: 'Close',
    click: 'Click',
    homePage: {
      greeting: 'Hi!',
      name: "I'm Matthew",
      sphere: 'Frontend web developer',
      posts: 'Latest Posts',
      checkPortfolio: 'Check portfolio'
    }
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
