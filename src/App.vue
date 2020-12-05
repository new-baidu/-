<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  beforeMount() {
    window.document.documentElement.setAttribute("class", "one");
  }
};
</script>
<style lang="scss" scoped>
@import '~@/assets/css/common.scss';
#app {
  height: 100vh;
}

</style>
