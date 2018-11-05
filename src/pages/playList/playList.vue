<template>
  <div class="playList">
    <music-list :list="playlist" :listType="1" @select="selectItem"></music-list>
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
        'palyinng',
        'playlist',
        'currentMusic',
        'audioEle'
      ])
    },
    methods:{
      selectItem(item,index){
        if(item.id === this.currentMusic.id && !this.playing){
          this.setPlaying(true)
        }else{
          this.setCurrentIndex(index);
          this.setPlaying(true);

        }      },
      ...mapMutations({
        setPlaying:'SET_PLAYING',
        setCurrentIndex:'SET_CURRENTINDEX',
      })
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
