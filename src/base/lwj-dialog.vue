<template>
  <!--对话框，transition用于过渡-->
  <transition name="lwj-dialog-fade">
     <div class="lwj-dialog-box" v-show="dialogShow">
       <div class="lwj-dialog-wrapper">
         <div class="lwj-dialog-content">
           <div class="lwj-dialog-head" v-text="headText"></div>
           <slot>
             <div class="lwj-dialog-text" v-html="bodyText"></div>
           </slot>
           <div class="lwj-dialog-btn">
             <div class="cancle-btn" @click="cancle" v-text="cancleBtnText"></div>
             <slot name="btn"></slot>
             <div class="confirm-btn"  v-text="confirmBtnText"></div>
           </div>
         </div>
       </div>
     </div>
  </transition>
</template>
<script>
export default {
  name: 'lwj-dialog',
  props: {
    // 标题文本
    headText: {
      type: String,
      default: '提示'
    },
    // 内容文本
    bodyText: {
      type: String,
      default: ''
    },
    // 取消文本
    cancleBtnText: {
      type: String,
      dafault: '取消'
    },
    // 确认文本
    confirmBtnText: {
      type: String,
      dafault: '确认'
    }
  },
  data () {
    return {
      dialogShow: false // 默认对话框不显示
    }
  },
  methods: {
    // 显示事件
    show () {
      this.dialogShow = true
    },
    // 隐藏事件
    hide () {
      this.dialogShow = false
    },
    // 取消事件
    cancle () {
      this.hide()
      this.$emit('cancle')
    }
  }
}
</script>

<style>
  .lwj-dialog-head{
    font-family:Arial;
    justify-content: flex-start;
    font-size: 18px;
  }
  .lwj-dialog-box{
    position: relative;
    left: 41%;
    width: 480px;
    height: 140px;
    border: 1px solid #9999;
    border-radius: 3px;
  }
  .lwj-dialog-btn div{
    display: inline-block;
    /*justify-content: flex-end; !*容器位于尾部*!*/
    width: 80px;
    height: 30px;
    border: 1px solid #9999;
    border-radius: 2px;
    cursor: pointer;
  }
</style>
