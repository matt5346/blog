import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/Home.vue'
import About from './views/about/About.vue'
import Portfolio from './views/portfolio-page/Portfolio-page.vue'
import PortfolioItem from './views/portfolio-item-page/Portfolio-item-page.vue'
import Posts from './views/posts-page/Posts-page.vue'
import Post from './views/post-page/Post-page.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/',
      name: 'about',
      component: About
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio
    },
    {
      path: '/portfolio/:id',
      name: 'portfolioItem',
      component: PortfolioItem
    },
    {
      path: '/posts',
      name: 'posts',
      component: Posts
    },
    {
      path: '/posts/:id',
      name: 'post',
      component: Post
    }
  ]
})
