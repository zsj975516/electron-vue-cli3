import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: () => import(/* webpackChunkName: "about" */ './components/LandingPage.vue')
    },
    {
      path: '*',
      redict: '/'
    }
  ]
})
