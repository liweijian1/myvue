// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from './store/index'
import lwjtoast from './base/lwj-totast'
import axios from 'axios'

// 网络请求
Vue.prototype.$http = axios

Vue.config.productionTip = false

// 弹出层
Vue.use(lwjtoast)
// const redirectList = ['/music']
// 路由的钩子函数
// router.beforeEach((to, from, next) => {
//   if (redirectList.includes(to.path)) {
//     next('/')
//   } else {
//     document.title = to.meta.title && 'lwj在线音乐播放器'
//     next()
//   }
// })
document.title = 'lwj在线音乐播放器'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
