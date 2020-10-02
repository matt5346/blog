<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <router-link
          to="/"
        >
          <div
            class="header__inner__logo-wrapper"
            @mouseover.stop="logoHover"
          >
            <svg class="header__inner__logo-wrapper__logo" width="69" height="60" viewBox="0 0 69 60" fill="black"  xmlns="http://www.w3.org/2000/svg">
              <path class="header__inner__logo-wrapper__logo-path" d="M9.60147 41.1942C11.3291 41.1942 13.0247 40.7548 14.5094 39.9225C15.994 39.0903 17.2127 37.8959 18.0367 36.4655L23.1679 27.5818L27.4804 35.1192C29.638 39.1255 35.6914 39.6505 37.8835 35.6605L42.4057 27.4343L49.2234 39.3555L57.3972 39.4053L47.6231 21.9003C45.5531 18.1891 39.9708 18.1229 37.7774 21.7692L32.9076 29.9129L28.1771 21.7854C26.0553 18.1404 20.4889 18.1229 18.3671 21.7738L11.7405 33.07C10.5409 35.1237 7.25282 34.3188 7.25282 31.9862L7.23575 16.9612C7.23575 11.3787 12.0525 6.83127 17.9679 6.83127H50.9975C56.9116 6.83127 61.7296 11.3787 61.7296 16.9625V43.005C61.7296 48.5875 56.9116 53.1363 50.9975 53.1363H6.6784V60H50.9976C60.9297 60 69 52.3813 69 43.005V16.995C69 7.60252 60.9456 0 50.9976 0H18.0024C8.05309 0 0 7.60252 0 16.995V32.135C0 37.1425 4.29658 41.1988 9.60161 41.1988L9.60147 41.1942Z"/>
            </svg>
          </div>
        </router-link>
        <nav class="header__inner__nav">
          <ul class="header__inner__nav-list">
            <li class="header__inner__nav-list__item">
              <router-link
                class="router-link"
                to="/"
              >
                {{$t('header.home')}}
              </router-link>
            </li>
            <li class="header__inner__nav-list__item">
              <router-link
                class="router-link"
                to="/portfolio"
              >
              {{$t('header.portfolio')}}
              </router-link>
            </li>
            <li class="header__inner__nav-list__item">
              <router-link
                class="router-link"
                to="/posts"
              >
                {{$t('header.posts')}}
              </router-link>
            </li>
            <li
              class="header__inner__nav-list__item"
              @click="toggleLanguages = !toggleLanguages"
            >
              <div class="header__inner__nav-list__item-language">
                <svg
                  :class="['header__inner__nav-list__item-global', {active: toggleLanguages}]"
                  width="24" height="24" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
                  <g id="24 / maps / 360">
                    <path id="icon" fill-rule="evenodd" clip-rule="evenodd" d="M23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12ZM3.64232 8.65452C4.5557 6.37479 6.3748 4.5557 8.65452 3.64232C8.11964 4.67487 7.70006 5.96224 7.41726 7.41726C5.96224 7.70006 4.67487 8.11964 3.64232 8.65452ZM15.3455 3.64232C15.8804 4.67487 16.2999 5.96224 16.5827 7.41726C18.0378 7.70006 19.3251 8.11964 20.3577 8.65452C19.4443 6.37479 17.6252 4.5557 15.3455 3.64232ZM3 12C3 11.1008 4.62868 10.125 7.11448 9.53819C7.03905 10.3308 7 11.155 7 12C7 12.845 7.03905 13.6692 7.11448 14.4618C4.62868 13.875 3 12.8992 3 12ZM17 12C17 12.845 16.961 13.6692 16.8855 14.4618C19.3713 13.875 21 12.8992 21 12C21 11.1008 19.3713 10.125 16.8855 9.53819C16.961 10.3308 17 11.155 17 12ZM3.64232 15.3455C4.67487 15.8804 5.96224 16.2999 7.41726 16.5827C7.70006 18.0378 8.11964 19.3251 8.65452 20.3577C6.37479 19.4443 4.5557 17.6252 3.64232 15.3455ZM16.5827 16.5827C16.2999 18.0378 15.8804 19.3251 15.3455 20.3577C17.6252 19.4443 19.4443 17.6252 20.3577 15.3455C19.3251 15.8804 18.0378 16.2999 16.5827 16.5827ZM9 12C9 11.0097 9.06211 10.0597 9.17262 9.17262C10.0597 9.06211 11.0097 9 12 9C12.9903 9 13.9403 9.06211 14.8274 9.17262C14.9379 10.0597 15 11.0097 15 12C15 12.9903 14.9379 13.9403 14.8274 14.8274C13.9403 14.9379 12.9903 15 12 15C11.0097 15 10.0597 14.9379 9.17262 14.8274C9.06211 13.9403 9 12.9903 9 12ZM9.53819 16.8855C10.125 19.3713 11.1008 21 12 21C12.8992 21 13.875 19.3713 14.4618 16.8855C13.6692 16.961 12.845 17 12 17C11.155 17 10.3308 16.961 9.53819 16.8855ZM12 3C11.1008 3 10.125 4.62868 9.53819 7.11448C10.3308 7.03905 11.155 7 12 7C12.845 7 13.6692 7.03905 14.4618 7.11448C13.875 4.62868 12.8992 3 12 3Z"/>
                  </g>
                </svg>
                <div
                  :class="['header__inner__nav-list__item-language-select', {active: toggleLanguages}]"
                >
                  <span>{{currentLanguage}}</span>
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="black" xmlns="http://www.w3.org/2000/svg">
                    <g id="24 / arrows / chevron-bottom">
                      <path id="icon" fill-rule="evenodd" clip-rule="evenodd" d="M10.4504 3.72822L11.2164 4.45118L6.50004 8.90237L1.78369 4.45118L2.54972 3.72822L6.50004 5.19078L10.4504 3.72822Z"/>
                    </g>
                  </svg>
                </div>
              </div>
              <transition name="fade">
                <Lang
                  @change-locale="setLocale"
                  v-if="toggleLanguages"
                />
              </transition>
            </li>
          </ul>
          <div class="header__inner__nav-theme sun">
            <img
              class="header__inner__nav-theme_img moon"
              src="@/resources/img/moon.svg"
              @click="toggleThemeDark"
            />
            <img
              class="header__inner__nav-theme_img sun active"
              src="@/resources/img/sun.svg"
              @click="toggleThemeLight"
            />
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
import Lang from './lang/Lang'

export default {
  name: 'Header',
  data () {
    return {
      toggleLanguages: false,
      currentLanguage: 'En'
    }
  },
  components: {
    Lang
  },
  methods: {
    setLocale (lang) {
      this.currentLanguage = lang
      this.$root.$i18n.locale = lang.toLowerCase()
    },
    logoHover () {
      const logo = document.querySelector('.header__inner__logo-wrapper__logo')
      logo.classList.add('animate')
      logo.addEventListener('animationend', (e) => {
        logo.classList.remove('animate')
      }, false)
    },
    toggleThemeLight () {
      const sun = document.querySelector('.header__inner__nav-theme_img.sun')
      const moon = document.querySelector('.header__inner__nav-theme_img.moon')
      const body = document.querySelector('body')
      const themeWrapper = document.querySelector('.header__inner__nav-theme')

      document.documentElement.setAttribute('data-theme', 'dark')

      sun.classList.toggle('active')
      moon.classList.toggle('active')
      body.classList.remove('light')
      body.classList.add('dark')
      themeWrapper.className = 'header__inner__nav-theme moon'
    },
    toggleThemeDark () {
      const sun = document.querySelector('.header__inner__nav-theme_img.sun')
      const moon = document.querySelector('.header__inner__nav-theme_img.moon')
      const body = document.querySelector('body')
      const themeWrapper = document.querySelector('.header__inner__nav-theme')

      document.documentElement.setAttribute('data-theme', 'default')

      sun.classList.toggle('active')
      moon.classList.toggle('active')
      body.classList.remove('dark')
      body.classList.add('light')
      themeWrapper.className = 'header__inner__nav-theme sun'
    }
  }
}
</script>

<style lang="scss">
@import './style';
</style>
