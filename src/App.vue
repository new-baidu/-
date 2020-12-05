<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
// import Canvas from '@/assets/js/canvas-nest.min.js'

export default {
  components: {
    // Canvas
  }
};
</script>
<style lang="scss" scoped>
canvas{
  background: rgb(226, 225, 225);
  opacity: 0.3;
}
@import '~@/assets/css/common.scss';
#app {
  height: 100vh;
}

</style>
