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
  </div>
</template>

<script>// eslint-disable-next-line
  /* eslint-disable */
    import MusicBtn from "../components/music-btn/music-btn";
    export default {
        name: 'music',
        components: {MusicBtn},
}
</script>

<style lang="less" scoped>
   .music-left{
     position: relative;
     width: 40%;
     height: 500px;
     left: 5%;
     top:100px;
     border: 1px solid #9999;
     .music-btn{
       position: relative;
       left: 5%;
       top:20px;
     }
   }

</style>
