<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <div class="header__inner__logo-wrapper">
          <h1>{{$t('title')}}</h1>
        </div>
        <nav class="header__inner__nav">
          <ul class="header__inner__nav-list">
            <li class="header__inner__nav-list__item">
              <router-link
                class="router-link"
                to="/"
              >
                Home
              </router-link>
            </li>
            <li class="header__inner__nav-list__item">
              <router-link
                class="router-link"
                to="/portfolio"
              >
              Portfolio
              </router-link>
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
export default {
  name: 'Header',
  mounted() {
    console.log('loaded');
  },
  methods: {
    toggleThemeLight() {
      const sun = document.querySelector('.header__inner__nav-theme_img.sun');
      const moon = document.querySelector('.header__inner__nav-theme_img.moon');
      const body = document.querySelector('body');
      const themeWrapper = document.querySelector('.header__inner__nav-theme');

      document.documentElement.setAttribute('data-theme', 'dark');

      sun.classList.toggle('active');
      moon.classList.toggle('active');
      body.classList.remove('light');
      body.classList.add('dark');
      themeWrapper.className = 'header__inner__nav-theme moon';
    },
    toggleThemeDark() {
      const sun = document.querySelector('.header__inner__nav-theme_img.sun');
      const moon = document.querySelector('.header__inner__nav-theme_img.moon');
      const body = document.querySelector('body');
      const themeWrapper = document.querySelector('.header__inner__nav-theme');

      document.documentElement.setAttribute('data-theme', 'default');

      sun.classList.toggle('active');
      moon.classList.toggle('active');
      body.classList.remove('dark');
      body.classList.add('light');
      themeWrapper.className = 'header__inner__nav-theme sun';
    },
  },
};
</script>

<style lang="scss">
@import './style';
</style>
