<template>
  <header class="lwj-header">
    <h1 class="header">李威剑的音乐播放器</h1>
    <dl class="user">
      <template>
        <router-link class="user-infor">
          <span></span>
        </router-link>
        <dd class="user-btn">退出</dd>
      </template>
      <dd class="user-btn">登录</dd>
    </dl>
    <lwj-dialog></lwj-dialog>
  </header>
</template>

<script>// eslint-disable-next-line
  /* eslint-disable */
import {mapGetters, mapActions} from 'vuex'
import LwjDialog from "../../base/lwj-dialog";

  export default {
    name: 'lwj-header',
    components: {
      LwjDialog

    },
    data(){
      return{
        user:{}, // 获取用户数据
        uidValue: '',//记录用户id
      }
    }
  }
</script>

<style>
  .lwj-header{
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 60px;
    border: 1px solid #999;
  }
</style>
