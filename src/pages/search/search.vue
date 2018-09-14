<template>
    <div class="search">
       <div class="search-head">
         <span v-for="(item,index) in Artists.slice(0,5)" :key="index" @click="clickHot(item.first)">{{item.first}}</span>
         <input class="search-input" type="text" placeholder="音乐/歌手" v-model="searchValue" @keyup.enter="OnEnter"/>
       </div>
       <music-list :list="list" :list-type="2"></music-list>
    </div>
</template>

<script>// eslint-disable-next-line
/* eslint-disable */

import {search,searchHot} from "../../api";
import MusicList from "../../components/music-list/music-list";
import formatSongs from "../../assets/js/song"

export default {
        name: "search",
  components: {MusicList},
  data(){
          return{
            Artists: [], //热搜数组
            list:[], //搜索数组
            page:0, // 分页
            searchValue:''
          }
        },
        created(){
          // 获取热搜
          searchHot().then(res =>{
            if(res.data.code === 200){
              //console.log(res.data.result);
              this.Artists = res.data.result.hots;
            }
          })
        },
        methods:{
          // 点击热搜
          clickHot(name){
            this.searchValue = name;
            this.OnEnter();
          },
          // 搜索事件
          OnEnter(){
            if(this.searchValue.replace(/(^\s+)|(\s+$)/g, "") === ''){
              alert('不能为空');
              return;
            }
            this.page = 0;
            search(this.searchValue).then(res =>{
              if(res.data.code===200){
                this.list=formatSongs(res.data.result.songs);
              }
            })
          }
        }
    }
</script>

<style lang="less" scoped>
    .search-head{
      display: flex;
      position: relative;
      top:20px;
      border: 1px solid #9999;
      width: auto;
      height: 40px;
      padding: 10px 15px;
      background-color: #9999;
      span{
        cursor: pointer;
        line-height: 40px;
        margin-right: 15px;
        &:hover{
          color: white;
        }
      }
    }
</style>
