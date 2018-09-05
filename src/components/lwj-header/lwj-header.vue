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
    <lwj-dialog ref="loginDialog" head-text="登录" cancleBtnText="关闭" confirmBtnText="登录" @confirm="login">
      <div class="lwj-dialog-text">
         <input type="number" class="lwj-dialog-input" autofocus placeholder="请输入网易云id" v-model.trim="uidValue"/>
      </div>
      <div slot="btn" @click="openDialog(1)">帮助</div>
    </lwj-dialog>
    <lwj-dialog ref="helpDialog" head-text="登录帮助" cancleBtnText="关闭" confirmBtnText="去登录" @confirm="openDialog(0)">
      <div class="lwj-dialog-text">
        <p>1、<a target="_blank" href="http://music.163.com">点我(http://music.163.com)</a>登录网易云官网</p>
        <p>2、点击页面右上角的“登录”</p>
        <p>3、点击您的头像，进入我的主页</p>
        <p>4、复制浏览器地址栏 /user/home?id= 后面的数字（网易云 UID）</p>
      </div>
    </lwj-dialog>
  </header>
</template>

<script>// eslint-disable-next-line
  /* eslint-disable */
import {mapGetters, mapActions} from 'vuex'
import LwjDialog from "../../base/lwj-dialog/lwj-dialog";


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
               break
         case 1:
              this.$refs.loginDialog.hide()
              this.$refs.helpDialog.show()
               break
       }
     },
     // 登录
     login(){
       if(this.uidValue===""){
         this.$lwjtoast("UID不能为空");
         this.openDialog(0);

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
    height: auto;
    text-align: center;
    overflow: hidden;
  }
  .user-btn{
    cursor: pointer;
    position: relative;
    top:-60px;
    left: 40%;
  }
  .lwj-dialog-input{
    position: relative;
    top:20px;
    width: 80%;
    height: 40px;
    font-size: 15px;
    margin-bottom: 8px;
  }
  .lwj-dialog-text p,a{
    color: #fff;
    text-decoration: none;
    font-size: 8px;
  }
  .lwj-dialog-text a:hover{
    color: #dc143c;
  }
  .lwj-dialog-text p{
    text-align: left;
    margin-left: 35px;
  }
</style>
