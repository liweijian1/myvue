<template>
  <div class="music">
    <div class="music-coment">
      <div class="music-left">
        <music-btn></music-btn>
        <keep-alive>
          <router-view  class="music-list"></router-view>
        </keep-alive>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>// eslint-disable-next-line
  /* eslint-disable */
    import MusicBtn from "../components/music-btn/music-btn";
    export default {
        name: 'music',
        components: {MusicBtn},
}
</script>

<style scoped>

</style>
