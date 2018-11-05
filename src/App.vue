<template>
    <div id="app">
      <lwj-header></lwj-header>
      <router-view class="router-view"/>
      <!--播放器-->
      <audio ref="lwjPlayer"></audio>
    </div>
</template>

<script>// eslint-disable-next-line
  /* eslint-disable */
import LwjHeader from './components/lwj-header/lwj-header'
import {mapMutations,mapActions} from 'vuex'
import {topList} from "./api";
import {defaultSheetId} from  './assets/js/config'
import {createTopList} from './assets/js/song'

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
    // 获取正在播放的列表
    topList(defaultSheetId).then(res => {
       if(res.status === 200){
         let list = this._formatSongs(res.data.playlist.tracks.slice(0,100));
         this.setPlaylist({list});
       }
    })

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

    // 设置audio元素
    this.$nextTick(() => {
      this.setAudioele(this.$refs.lwjPlayer)
    })
  },
  methods:{
    // 歌曲数据处理
    _formatSongs(list){
        let ret = [];
        list.forEach((item) => {
            const musicData = item;
            if(musicData.id){
              ret.push(createTopList(musicData))
            }
        });
        return ret
    },
    ...mapMutations({
      setAudioele: 'SET_AUDIOELE'
    }),
    ...mapActions([
      'setPlaylist'
    ])
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
