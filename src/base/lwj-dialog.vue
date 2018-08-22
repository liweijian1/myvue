<template>
  <!--对话框，transition用于过渡-->
  <transition name="lwj-dialog-fade">
     <div class="lwj-dialog-box" v-show="dialogShow">
       <div class="lwj-dialog-wrapper">
         <div class="lwj-dialog-content">
           <div class="lwj-dialog-head" v-text="headText"></div>
         </div>
       </div>
     </div>
  </transition>
</template>
<script>
export default {
  name: 'lwj-dialog'
}
</script>
