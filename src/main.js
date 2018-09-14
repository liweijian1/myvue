// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// eslint-disable-next-line
/* eslint-disable */
import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from './store/index'
import lwjtoast from './base/lwj-totast'
import axios from 'axios'
import VueLazyload from 'vue-lazyload'

// import '@/assets/css/index.less'
// require('!style-loader!css-loader!less-loader!./assets/css/index.less');

// 网络请求
Vue.prototype.$http = axios

Vue.config.productionTip = false

// 懒加载
Vue.use(VueLazyload, {
   preLoad:1,
})

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
