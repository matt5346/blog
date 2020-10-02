import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

// const messages = {
//   en: {
//     title: 'Lorem Blorem',
//     btnCheck: 'Check',
//     send: 'Send',
//     close: 'Close',
//     click: 'Click',
//     reply: 'Reply',
//     edit: 'Edit',
//     delete: 'Delete',
//     homePage: {
//       greeting: 'Hi!',
//       name: "I'm Matthew",
//       sphere: 'Frontend web developer',
//       posts: 'Latest Posts',
//       checkPortfolio: 'Check portfolio'
//     }
//   },
//   ru: {
//     title: 'Лорем Блорем'
//   }
// }
//
// const i18n = new Vuei18n({
//   locale: 'en',
//   messages
// })

function loadLocaleMessages () {
  const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
  const messages = {}
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      messages[locale] = locales(key)
    }
  })
  return messages
}

export default new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || 'en',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages: loadLocaleMessages()
})
