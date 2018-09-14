<template>
    <div class="music-list">
      <template v-if="list.length>0">
        <div class="list-item list-header">
          <span class="list-name">歌曲名</span>
          <span class="list-artist">歌手</span>
          <span v-if="listType === 1" class="list-item">时长</span>
          <span v-else class="list-album">专辑</span>
        </div>
        <div class="list-content">
           <div class="list-item" v-for="(item,index) in list" :key="item.id">
             <span class="list-num">{{index+1}}</span>
             <div class="list-name">
               <span>{{item.name}}</span>
             </div>
             <span class="list-artist">{{item.singer}}</span>
             <span class="list-album">{{item.album}}</span>
           </div>
        </div>
      </template>
      <div v-else title="弄啥呢，怎么啥也没有！！！"></div>
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

<style lang="less" scoped>
   .music-list{
     position: relative;
     top:30px;
   }
   .list-header{
     span{
       text-align: center;
       margin-left: 10px;
       margin-right: 40%;
     }
   }
   .list-content{
     margin: 15px 0 0 0;
     height: 8px;
     .list-item{
       margin: 0 0 20px 0;
     }
     .list-name{
       display: inline-block;
       width: 25%;
     }
     .list-artist{
       margin-left: 18%;
       overflow: hidden;
       text-overflow: ellipsis;
       white-space: nowrap;
       width: 20%;
       height: 20px;
     }
     .list-album{
       position: relative;
       left: 20%;
       //margin-left: 30%;
     }
     span{
       display: inline-block;
     }
   }
</style>
