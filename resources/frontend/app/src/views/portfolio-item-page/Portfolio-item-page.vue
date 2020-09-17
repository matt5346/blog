<template>
  <div class="section s-post">
    <div class="container">
      <Breadcrumbs :links="BreadcrumbLinks"/>
      <div class="post__item" v-for="item in getPortfolioItem" :key="item.id">
        <h1 class="post__item-title">{{item.title}}</h1>
        <div class="post__item__body">
          <img class="post__item__body-img" :src="item.url"/>
          <p class="post__item__body-description">{{item.body}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Breadcrumbs from '@/components/breadcrumbs/Breadcrumbs'

export default {
  name: 'portfolioItem',
  components: {
    Breadcrumbs
  },
  props: {
    getParentPosts: Array
  },
  mounted () {
    this.fetchPortfolioItem(this.$route.params.id)
  },
  computed: {
    ...mapGetters('Portfolio', ['getPortfolioItem']),
    BreadcrumbLinks () {
      return [
        {
          active: false,
          name: 'Home',
          href: '/'
        },
        {
          active: false,
          name: 'Portfolio',
          href: '/Portfolio'
        },
        {
          active: true,
          name: 'Portfolio work №' + this.$route.params.id,
          href: '/Portfolio/' + this.$route.params.id
        }
      ]
    }
  },
  methods: {
    ...mapActions('Portfolio', ['fetchPortfolioItem'])
  }
}
</script>
