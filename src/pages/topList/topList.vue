<template>
  <div class="topList-head">
    云音乐特色榜
  </div>
</template>
<script>// eslint-disable-next-line
  /* eslint-disable */
  import {getToplistDetail} from './../../api/index'

  export default {
    name:'topList',

    data(){
      return{
        list:[],
      }
    },

    created(){
      //获取音乐排行榜
      const _getToplistDetail = getToplistDetail().then((res) =>{
         if(res.data.code===200){
           let list;
           console.log(res.data);
         }
      });
      Promise.all([_getToplistDetail]);
    }
  }

</script>
