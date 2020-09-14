import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/home/Home.vue';
import About from './views/about/About.vue';
import Portfolio from './views/portfolio/Portfolio.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/',
      name: 'about',
      component: About,
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio,
    },
  ],
});
