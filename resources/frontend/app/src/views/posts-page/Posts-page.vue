<template>
  <section class="section s-posts">
    <div class="container" v-show="isLoaded">
      <Breadcrumbs :links="BreadcrumbLinks"/>
      <h1 class="section__title">Blog</h1>
      <div class="posts__inner">
        <Posts
          :getParentPosts="this.getPosts"
        />
      </div>
      <button
        class="main-btn main-btn--paginate"
        @click="loadPosts"
      >
        <span class="main-btn__text">Load more!</span>
        <svg class="main-btn__icon" width="28" height="28" fill="#000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M17.8069 7C16.4465 5.0787 14.3936 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12H22C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C14.8042 2 17.2749 3.18251 19 5.27035V2H21V9H14V7H17.8069Z"/>
        </svg>
      </button>
    </div>
    <Preloader  v-show="!isLoaded"/>
  </section>
</template>

<script>
import Breadcrumbs from '@/components/breadcrumbs/Breadcrumbs'
import Posts from '@/components/posts-cards/Posts-cards'
import Preloader from '@/components/preloader/Preloader'
import { mapGetters, mapActions, mapState } from 'vuex'

export default {
  data () {
    return {
      filteredPosts: [],
      num: 10
    }
  },
  components: {
    Breadcrumbs,
    Posts,
    Preloader
  },
  mounted () {
    this.fetchPosts()
    console.log(this.isLoading, 'THIS IS LOADING')
  },
  computed: {
    ...mapGetters('Posts', ['getPosts']),
    ...mapState('Posts', ['isLoaded']),
    BreadcrumbLinks () {
      return [
        {
          active: false,
          name: 'Home',
          href: '/'
        },
        {
          active: false,
          name: 'Posts',
          href: '/Posts'
        }
      ]
    }
  },
  methods: {
    ...mapActions('Posts', ['fetchPosts']),
    loadPosts () {
      this.num += 10
      this.fetchPosts(this.num)
    }
  }
}
</script>
