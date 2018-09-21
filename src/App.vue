<template>
  <div id="app">
    <lwj-header></lwj-header>
    <router-view class="router-view"/>
    <!--播放器-->
    <audio></audio>
  </div>
</template>

<script>// eslint-disable-next-line
  /* eslint-disable */
import LwjHeader from './components/lwj-header/lwj-header'
export default {
  name: 'App',
  components: {LwjHeader},
  created () {
    // 设置title
    let OriginTitle = document.title, titleTime
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) {
        document.title = '不要走啊'
        clearTimeout(titleTime)
      } else {
        document.title = '爷，您回来了啊'
        titleTime = setTimeout(function () {
          document.title = OriginTitle
        }, 2000)
      }
    })
  }
}
</script>

<style>
   #app{
     position: relative;
     width: 100%;
     height: 100%;
   }
  .router-view{
    width: 100%;
    height: 100%;
  }
</style>
