import Vue from 'vue'
import Router from 'vue-router'
import music from '../pages/music'

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/music'
  },
  {
    path: '/music',
    component: music
  }
]

export default new Router({
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  routes
})
