<template>
  <div class="topList">
    <div class="topList-head">
      云音乐特色榜
    </div>
    <div class="topList-content">
      <div class="list-item" v-for="(item,index) in list" :key="index" :title="item.name+item.updateFrequency">
        <router-link :to="{path:`/music/details/${item.id}`}" tag="div" class="topList-item">
          <img class="cover-img" v-lazy="`${item.coverImgUrl}?param=200y200`"/>
          <h3 class="name">{{item.name}}</h3>
        </router-link>
      </div>
    </div>
    <div class="topList-head">热销榜</div>
    <div class="topList-content">
       <div class="list-item" v-for="(item,index) in hostlist" :key="index" :title="item.name">
         <router-link :to="{path:`/music/details/${item.id}`}" tag="div" class="topList-item">
           <img class="cover-img"  v-lazy="`${item.picUrl}?param=200y200`"/>
           <h3 class="name">{{item.name}}</h3>
         </router-link>
       </div>
    </div>
  </div>
</template>
<script>// eslint-disable-next-line
  /* eslint-disable */
  import {getToplistDetail} from './../../api/index'
  import  {getHottoplist} from "./../../api/index";

export default {
    name:'topList',

    data(){
      return{
        list:[],
        hostlist:[],
      }
    },

    created(){
      //获取音乐排行榜
      const _getToplistDetail = getToplistDetail().then((res) =>{
         if(res.data.code===200){
           let list;
           list = res.data.list.filter(item => {
             if(item.ToplistType){
               return item;
             }
           });
           return list;

         }
      });

      //获取热销榜
      const _getHottoplist = getHottoplist().then(res => {
        if(res.data.code === 200){
          let hotlist = res.data.result
          return hotlist;
        }
      });
      Promise.all([_getToplistDetail,_getHottoplist]).then(([list,hotlist]) =>{
        this.list = list;
        this.hostlist = hotlist.slice();
      })
    }

  }

</script>
<style lang="less">
  .topList-content{
    width: auto;
    height: auto;
    .list-item{
      display: inline-block;
      margin-right: 40px;
      text-align: center;
    }
  }

</style>
