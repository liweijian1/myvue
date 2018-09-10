<template>
  <div class="music-btn">
    <router-link to="/music/playlist" tag="span">正在播放</router-link>
    <router-link to="/music/toplist" tag="span">排行榜</router-link>
    <router-link to="/music/search" tag="span">搜索</router-link>
    <router-link to="/music/userlist" tag="span">我的歌单</router-link>
    <router-link to="/music/historylist" tag="span">我听过的</router-link>
  </div>
</template>

<script>// eslint-disable-next-line
/* eslint-disable */
  export default {
    name:'music-btn'
  }
</script>

<style scoped>
   .music-btn{
     width: 100%;
     height: 60px;
   }
  span {
    display: inline-block;
    width: 100px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    vertical-align: middle;
    border: 1px solid #9999;
    border-radius: 4px;
    cursor: pointer;
    margin-right: 15px;
  }
</style>
