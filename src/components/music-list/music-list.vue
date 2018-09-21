<template>
    <div class="music-list">
      <template v-if="list.length>0">
        <div class="list-item list-header">
          <span class="list-name">歌曲名</span>
          <span class="list-artist">歌手</span>
          <span v-if="listType === 1" class="list-item">时长</span>
          <span v-else class="list-album">专辑</span>
        </div>
        <div class="list-content" @scroll = "listScroll($event)">
           <div class="list-item" v-for="(item,index) in list" :key="item.id">
             <div class="list-num" style="display: inline-block"><span >{{index+1}}</span></div>
             <div class="list-name" :title="item.name">
               <span>{{item.name}}</span>
             </div>
             <div class="list-artist" :title="item.singer"><span>{{item.singer}}</span></div>
             <div class="list-album" :title="item.album"><span>{{item.album}}</span></div>
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
        },
        data(){
          return{
            lockUp: true, // 是否锁定滚动加载事件，默认锁定
          }
        },
      watch:{
          list(newList,oldList){
               if(this.listType !== 2){
                 return
               }
               if(newList.length !== oldList.length){
                 this.lockUp = false
               }else if(newList[newList.length - 1].id !== oldList.length > 0 && oldList[oldList.length - 1].id)
               {
                 this.lockUp = false
               }
             }
          },
        methods:{
          // 滚动事件
          listScroll(e){
            if(this.listType !== 2){
              return
            }
            if(this.lockUp){
              return
            }
            let scrollTop = e.target.scrollTop,
                 scrollHeight = e.target.scrollHeight,
                 height = e.target.offsetHeight;
            if(scrollTop+height>=scrollHeight){
              this.lockUp = true;
              this.$emit('pullup')
            }
          },

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
     .list-album{
       position: relative;
       left: -45px;
     }
   }
   .list-content{
     width: 100%;
     overflow-x:hidden;
     overflow-y:auto;
     -webkit-overflow-scrolling: touch;
     margin: 15px 0 0 0;
     height: 250px;

     .list-item{
       margin: 0 0 20px 0;
       border: 3px solid #efefef;
       border-left: 0px;
       border-right: 0px;
       height: 40px;
     }
     .list-num{
       position: relative;
       line-height: 40px;
       overflow: hidden;
       text-overflow: ellipsis;
       white-space: nowrap;
     }
     .list-name{
       display: inline-block;
       width: 30%;
       overflow: hidden;
       text-overflow: ellipsis;
       white-space: nowrap;
       width: 10em;
       line-height: 40px;
     }
     .list-artist{
       display: inline-block;
       position: relative;
       left:22%;
       text-align: center;
       overflow: hidden;
       text-overflow: ellipsis;
       white-space: nowrap;
       width: 20%;
       line-height: 40px;
     }
     .list-album{
       display: inline-block;
       position: relative;
       left: 45%;
       text-align: center;
       overflow: hidden; /*自动隐藏文字*/
       text-overflow: ellipsis;/*文字隐藏后添加省略号*/
       white-space: nowrap;/*强制不换行*/
       width:10em;/*不允许出现半汉字截断*/
       //width: 20%;
       line-height: 40px;
     }
     span{
       display: inline-block;
       text-align: center;
     }
   }
</style>
