<template>
  <div class="main-page">
    <div class="main-page-wrapper" v-show="isLoading">
      <div class="header-intro-wrapper">
        <section class="section s-intro">
          <div class="container">
            <div class="s-intro__box">
              <svg
                class="s-intro__box__bg"
                width="1231"
                height="1052"
                viewBox="0 0 1231 1052"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1211.68 953.162C1307.06 1009.98 1015.65 1095.89 670.461 1025.54C285.853 947.161 84.5 828 5.00121 563.695C-54.5002 300 447.805 0 908.383 0C1143.18 119.43 966.516 807.137 1211.68 953.162Z"
                  fill="url(#paint0_linear)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="569.113"
                    y1="389.725"
                    x2="878.724"
                    y2="1138.2"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop
                      class="s-intro__box__bg-stop-start"
                      stop-opacity="0.78"
                    />
                    <stop
                      class="s-intro__box__bg-stop-end"
                      offset="1"
                      stop-opacity="0.928958"
                    />
                  </linearGradient>
                </defs>
              </svg>
              <div class="s-intro__box__text">
                <h1 class="s-intro__box__text-title">Loememremasd</h1>
              </div>
              <div class="s-intro__box__cube-wrapper">
                <img class="s-intro__box__cube-wrapper-box" src="@/resources/img/cube.svg"/>
                <svg class="s-intro__box__cube-wrapper-shadow" width="602" height="269" viewBox="0 0 602 269" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="602" height="269">
                    <rect width="328.613" height="330.754" transform="matrix(0.912997 0.407967 -0.912997 0.407967 301.977 0)" fill="#C4C4C4"/>
                  </mask>
                  <g mask="url(#mask0)">
                    <path d="M517.051 55.807C734.932 129.359 622.374 162.328 457.836 224.029C287.465 287.917 275.502 288.754 93.2576 208.593C-84.1003 130.582 -49.3512 95.0802 142.199 37.0375C345.661 -24.6147 323.936 -9.38448 517.051 55.807Z" fill="url(#paint0_radial)"/>
                  </g>
                  <defs>
                    <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(299.565 143.286) rotate(1.1267) scale(622.508 336.841)">
                      <stop stop-color="#757373" stop-opacity="0.47"/>
                      <stop offset="0.588389" stop-color="#676767" stop-opacity="0"/>
                    </radialGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section class="section s-postIntro">
        <div class="container">
          <div class="s-postIntro__box">
            <svg
              class="s-postIntro__box__bg"
              width="798"
              height="925"
              viewBox="0 0 798 925"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.7203 747.677C-99.9876 969.755 302.451 938.333 542.98 890.845C817.722 836.603 810.811 759 787.635 587.781C760.999 391 735.856 -376.998 205.999 228.856C57.98 413.946 207.497 417.763 23.7203 747.677Z"
                fill="url(#paint0_linear)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="421.003"
                  y1="535.792"
                  x2="211.554"
                  y2="1058.46"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop
                    class="s-postIntro__box__bg-stop-start"
                    stop-opacity="0.78"
                  />
                  <stop
                    class="s-postIntro__box__bg-stop-end"
                    offset="1"
                    stop-opacity="0.928958"
                  />
                </linearGradient>
              </defs>
            </svg>
            <div class="s-postIntro__box__info">
              <h1 class="s-postIntro__box__info-title">Loememremasd</h1>
              <div class="s-postIntro__box__info-images">
                <img
                  class="s-postIntro__box__info-images__item"
                  src="@/resources/img/placeholder.png"
                />
                <img
                  class="s-postIntro__box__info-images__item"
                  src="@/resources/img/placeholder.png"
                />
              </div>
              <button class="main-btn main-btn--s-postIntro">
                <span class="main-btn__text">BUTTON</span>
              </button>
            </div>
            <div class="s-postIntro__box__cube-wrapper">
              <img
                class="s-postIntro__box__cube-wrapper__img"
                src="@/resources/img/iphone.png"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
    <Preloader v-show="!isLoading"/>
  </div>
</template>

<script>
import Preloader from '@/components/preloader/Preloader'

export default {
  name: 'Home',
  data () {
    return {
      isLoading: false
    }
  },
  components: {
    Preloader
  },
  mounted () {
    setTimeout(() => {
      this.loaderChange()
    }, 300)
  },
  updated () {
    setTimeout(() => {
      this.loaderChange()
    }, 300)
  },
  methods: {
    loaderChange () {
      this.isLoading = true
    }
  }
}
</script>
