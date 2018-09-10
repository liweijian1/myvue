import Vue from 'vue'
import Router from 'vue-router'
import music from '../pages/music'
import playList from '../pages/playList/playList'
import topList from '../pages/topList/topList'
import search from '../pages/search/search'
import userList from '../pages/userList/userList'
import historyList from '../pages/historyList/historyList'

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/music'
  },
  {
    path: '/music',
    component: music,
    redirect: '/music/playlist',
    children: [
      {
        path: '/music/playlist',
        component: playList,
        meta: {
          keepAlive: true
        }
      },
      {
        path: '/music/toplist',
        component: topList,
        meta: {
          keepAlive: true
        }
      },
      {
        path: '/music/search',
        component: search,
        meta: {
          keepAlive: true
        }
      },
      {
        path: '/music/userlist',
        component: userList,
        meta: {
          keepAlive: true
        }
      },
      {
        path: '/music/historylist',
        component: historyList,
        meta: {
          keepAlive: true
        }
      }
    ]
  }
]

export default new Router({
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  routes
})
