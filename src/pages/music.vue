<template>
  <div class="music">
    <div class="music-coment">
      <div class="music-left">
        <music-btn></music-btn>
        <keep-alive>
          <router-view v-if="$route.meta.keepAlive" class="music-list"></router-view>
        </keep-alive>
        <router-view :key="$route.path" v-if="!$route.meta.keepAlive" class="music-list"></router-view>
      </div>
    </div>

    <!--播放器-->
    <div class="music-bar">
      <div class="music-bar-btns">
        <i class="bar-icon btn-prev" title="上一曲 Ctrl+Left"></i>
        <i class="bar-icon btn-play" title="播放暂停 Ctrl + Space"></i>
        <i class="bar-icon btn-next" title="下一曲 Ctrl + Right"></i>
      </div>
      <div class="music-music">
        <div class="music-bar-info">
          <template v-if="currentMusic&&currentMusic.id">
            {{currentMusic.name}}
            <span> - {{currentMusic.singer}}</span>
          </template>
          <template v-else>欢迎使用mmPlayer在线音乐播放器</template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>// eslint-disable-next-line
  /* eslint-disable */
    import MusicBtn from "../components/music-btn/music-btn";
    import {mapGetters} from 'vuex';
    export default {
        name: 'music',
        components: {MusicBtn},
        computed:{
          ...mapGetters([
            'currentIndex',
            'currentMusic',
          ])
        }
}
</script>

<style lang="less" scoped>
   .music-left{
     position: relative;
     width: 60%;
     height: 500px;
     left: 5%;
     top:100px;
     overflow: hidden;
     border: 1px solid #efefef;
     .music-btn{
       position: relative;
       left: 5%;
       top:20px;
     }
     .music-list{
       border: 1px solid #efefef;
       height:calc(~'100% - 60px');
     }
   }
   .music-bar{
     display: flex;
     align-items: center;
     border:1px solid #eeee;
     box-sizing: border-box;
     padding-bottom: 15px;
     position: relative;
     left: 5%;
     top:190px;
     width: 60%;
     height: 80px;
     background-color: #9f9f9f;
     .bar-icon{
       display: block;
       background-image: url("../assets/img/player.png");
       cursor: pointer;
     }
     .music-bar-btns {
       display: flex;
       justify-content: space-around;
       align-items: center;
     }
     .btn-prev{
       width: 19px;
       min-width: 19px;
       height: 20px;
       background-position: 0 -30px;
     }
     .btn-play{
       width: 21px;
       min-width: 21px;
       height: 29px;
       margin: 0 50px;
       background-position: 0 0;
     }
     .btn-next{
       width: 19px;
       min-width: 19px;
       height: 20px;
       background-position: 0 -52px;
     }
   }

</style>
