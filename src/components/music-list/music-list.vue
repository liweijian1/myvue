<template>
    <div class="music-list">
      <template v-if="list.length>0">
        <div class="list-item list-header">
          <span class="list-name">歌曲名</span>
          <span class="list-artist">歌手</span>
          <span v-if="listType === 1" class="list-item">时长</span>
          <span v-else class="list-album"></span>
        </div>
      </template>
      <span v-else title="没有啊啊啊啊"></span>
    </div>
</template>

<script>// eslint-disable-next-line
  /* eslint-disable */
import {mapGetters} from 'vuex'
    export default {
        name: "music-list",
        props:{
          // 歌曲数据
          list:{
            type:Array,
            default:[]
          },
          /**
           *  0：显示专辑栏目（默认）
           *  1：显示时长栏目
           */
          listType: {
            type: Number,
            default: 0
          }
        }
    }

</script>

<style scoped>

</style>
