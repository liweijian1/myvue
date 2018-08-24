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
             <div></div>
             <div></div>
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
    cancleBtnText: {
      type: String,
      dafault: '取消'
    }
  },
  data () {
    return {
      dialogShow: false
    }
  },
  methods: {
    show () {
      this.dialogShow = true
    }
  }
}
</script>
