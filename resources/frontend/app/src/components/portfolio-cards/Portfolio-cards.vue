<template>
  <div class="portfolio__inner">
    <div
      class="portfolio__inner-card"
      v-for="item in getPortfolio"
      :key="item.id"
    >
      <span class="portfolio__inner-card__id">Work №{{item.id}}</span>
      <router-link
        tag="div"
        :to="'/portfolio/' + item.id"
        class="portfolio__inner-card__img-box"
      >
        <img class="portfolio__inner-card__img" :src="item.url"/>
      </router-link>
      <div class="portfolio__inner-card__description">
        <p>{{item.title}}</p>
        <div class="portfolio__inner-card__description-btn">
          <button class="main-btn main-btn--portfolio">
            <span class="main-btn__text">Check</span>
          </button>
          <svg class="portfolio__inner-card__description-btn__arrow" fill="white" width="36" height="32" viewBox="0 0 36 32" xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd" d="M18.5 30.3333C9.3873 30.3333 2 23.7668 2 15.6667C2 7.56649 9.3873 1 18.5 1C27.6127 1 35 7.56649 35 15.6667C35 23.7668 27.6127 30.3333 18.5 30.3333ZM18.5 27.6667C25.9558 27.6667 32 22.2941 32 15.6667C32 9.03925 25.9558 3.66667 18.5 3.66667C11.0441 3.66667 4.99998 9.03925 4.99998 15.6667C4.99998 22.2941 11.0441 27.6667 18.5 27.6667ZM11 17H20.8787L17.4393 20.0572L19.5607 21.9428L26.6213 15.6667L19.5607 9.39052L17.4393 11.2761L20.8787 14.3333H11V17Z"/>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'portfolioCard',
  props: {
    getPortfolio: Array
  }
}
</script>
<style lang="scss">
@import 'style.scss';
</style>
