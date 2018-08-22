<template>
  <transition name="lwj-dialog-fade">
     <div v-show="openDialog"></div>
  </transition>
</template>
<script>
export default {
  name: 'lwj-dialog'
}
</script>
