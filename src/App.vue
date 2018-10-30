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
  data(){
    return{
      screenWidth:document.body.clientWidth,
      screenHeight:document.body.clientHeight,
    }
  },
  mounted(){
     const that = this
    // 监控网页的变化
     window.onresize = () =>{
       window.screenWidth = document.body.clientWidth;
       window.screenHeight = document.body.clientHeight;
       that.screenWidth = window.screenWidth;
       that.screenHeight = window.screenHeight;
       return that.screenWidth,that.screenHeight;
     }
  },
  watch:{
    screenWidth(val){
      if(!this.timer){
        this.screenWidth = val
        this.timer = true
        let that = this
        setTimeout(function(){
          console.log(that.screenWidth)
          that.timer = false
      },400)
    }
  },
    screenHeight(val){
      if(!this.timer){
        this.screenHeight = val
        this.timer = true
        let that = this
        setTimeout(function(){
          console.log(that.screenHeight)
          that.timer = false
        },400)
      }
    }
  },
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

<style lang="less">
   #app{
     position: relative;
     width: 100%;
     height:calc(~'100% * 60%');
     overflow-y: scroll;
   }
  .router-view{
    width: 100%;
    height: 100%;
  }
</style>
