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
               <div class="list-menu">
                 <span class="list-menu-icon-play"></span>
               </div>
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
     height: 100%;
   }
   .list-header{
     span{
       text-align: center;
       margin-left: 10px;
       margin-right: 40%;
     }
     .list-album{
       position: relative;
       left: -145px;
     }
   }
   .list-content{
     width: calc(~'100% - 10px');
     height:calc(~'100% - 60px');
     overflow-x:hidden;
     overflow-y:auto;
     -webkit-overflow-scrolling: touch;
     margin: 15px 0 0 0;

     .list-item{
       margin: 0 0 20px 0;
       border: 3px solid #efefef;
       border-left: 0px;
       border-right: 0px;
       height: 50px;
       line-height: 50px;
       &:hover{
         cursor: pointer;
         background: #9999;
         .list-name{
           .list-menu{
             display: inline-block;
           }
         }
       }
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
       //width: 60%;
       overflow: hidden;
       text-overflow: ellipsis;
       white-space: nowrap;
       width: 20em;
       margin: 0;
       line-height: 40px;
     }
     .list-artist{
       display: inline-block;
       position: relative;
       //left:22%;
       text-align: center;
       overflow: hidden;
       text-overflow: ellipsis;
       white-space: nowrap;
       width: 25em;
       line-height: 40px;
     }
     .list-album{
       display: inline-block;
       position: relative;
       //left: 45%;
       text-align: center;
       overflow: hidden; /*自动隐藏文字*/
       text-overflow: ellipsis;/*文字隐藏后添加省略号*/
       white-space: nowrap;/*强制不换行*/
       width:19em;/*不允许出现半汉字截断*/
       line-height: 40px;
     }
     span{
       display: inline-block;
       text-align: center;
     }
     .list-menu{
       display: none;
       position: relative;
       top: 25px;
       left: 125px;
       height: 36px;
       font-size: 0;
       transform: translateY(-50%);
       span, a {
         display: inline-block;
         width: 36px;
         height: 36px;
         margin-right: 10px;
         background-image: url("../../assets/img/icon_list_menu.png");
         background-repeat: no-repeat;
         cursor: pointer;
       }
       .list-menu-icon-play{
         background-position: -80px 0;
         &.on{
           background-position: -80px -200px;
           &:hover {
             background-position: -120px -200px;
           }
         }
         &:hover{
           background-position: -120px 0;
         }
       }
     }
   }


</style>
