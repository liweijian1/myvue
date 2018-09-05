import TempToast from './lwj-toast.vue'

// eslint-disable-next-line to ignore the next line.
/* eslint-disable */
let instance, showToast = false, time // 存储toast状态
// 注册组件
const lwjtoast = {
  install (Vue, options = {}) {
    let opt = TempToast.data() // 获取组件中的默认配置
    Object.assign(opt, options)
    Vue.prototype.$lwjtoast = (message, position) => {
      if (showToast) {
        clearTimeout(time)
        instance.vm.visable = showToast = false
        document.body.removeChild(instance.vm.$el)
      }
      if (message) {
        opt.message = message
      }
      if (position) {
        opt.position = position
      }
      let TempToastConstructor = Vue.extend(TempToast)
      instance = new TempToastConstructor({
        data: opt
      })
      instance.vm = instance.$mount()
      document.body.appendChild(instance.vm.$el)
      instance.vm.visible = showToast = true

      time = setTimeout(function () {
        instance.vm.visible = showToast = false
        document.body.removeChild(instance.vm.$el)
      }, opt.duration)
    }
  }
}

export default lwjtoast
