<template>
  <div id="app">
    <lwj-header></lwj-header>
    <router-view/>
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

</style>
