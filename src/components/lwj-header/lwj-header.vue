<template>
  <header class="lwj-header">
    <h1 class="header">李威剑的音乐播放器</h1>
    <dl class="user">
      <template v-if="user.userId">
        <router-link class="user-infor">
          <span></span>
        </router-link>
        <dd class="user-btn">退出</dd>
      </template>
      <dd v-else class="user-btn" @click="openDialog(0)">登录</dd>
    </dl>
    <!--登录-->
    <lwj-dialog ref="loginDialog" head-text="登录" cancleBtnText="关闭">
      <div class="lwj-dialog-text">
         <input type="number" autofocus placeholder="请输入网易云id"/>
      </div>
    </lwj-dialog>
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
    },

methods: {
      //打开对话框
     openDialog(key){
       switch(key){
         case 0:
              this.$refs.loginDialog.show()
       }
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
    text-align: center;
  }
  .user-btn{
    cursor: pointer;
    position: relative;
    top:-60px;
    left: 40%;
  }
</style>
