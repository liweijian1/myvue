<template>
  <transition name="toast-fade">
    <div v-show="visable" class="lwj-toast" :class="positionClass">{{message}}</div>
  </transition>
</template>

<script>// eslint-disable-next-line
  /* eslint-disable */
    export default {
        name: "lwj-toast",
        data(){
          return{
              position:'center',
              message:'',
              duration:1500, // 毫秒
              visable:false,
          }
        },
        computed:{
           positionClass(){
             return 'lwj-toast-'+this.position
           }
        }
    }
</script>

<style>

</style>
