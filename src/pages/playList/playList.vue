<template>
  <div class="playList">
    <music-list :list="playlist" :listType="1">
    </music-list>
    <div>清空列表</div>
  </div>
</template>

<script>// eslint-disable-next-line
  /* eslint-disable */
  import {mapGetters, mapMutations, mapActions} from 'vuex'
  import MusicList from "../../components/music-list/music-list";
  export default {
    components: {MusicList},
    computed:{
      ...mapGetters([
        'playlist'
      ])
    }
  }
</script>

<style lang="less" scoped>
   .playList{
     position: relative;
     left: 5%;
     top:20px;
   }
</style>
