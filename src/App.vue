<template>
  <div id="app">
    <lwj-header></lwj-header>
    <router-view class="router-view"/>
    <!--播放器-->
    <audio></audio>
  </div>
</template>

<script>
import LwjHeader from './components/lwj-header/lwj-header'
export default {
  name: 'App',
  components: {LwjHeader}
}
</script>

<style>
   #app{
     position: relative;
     width: 100%;
     height: 100%;
   }
  .router-view{
    width: 100%;
    height: 100%;
  }
</style>
