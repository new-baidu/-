<template>
  <div class="Lyout">
    <!-- <el-container class="main"> -->
    <el-header class="header">
    <Header />
    </el-header>
    <el-container class="container">
      <el-aside width="200px"><Aside /></el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
    <!-- </el-container> -->
  </div>
</template>
<script>
import Aside from "./Aside";
import Header from "./Header";
export default {
  name: "Lyout",
  components: {
    Aside,Header
  },
  data() {
    return {};
  },
  created() {},
  computed: {},
  methods: {},
  mounted() {},
  activated() {} // 如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="scss" scoped>
.Lyout {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  // overflow: hidden;
  .header {
    background-color: $admin-color;
    padding: 10px;
    height: auto !important;
  }
  .container {
    flex: 1;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    overflow: hidden !important;
  }
  .el-main {
    padding: 10px;
    overflow: auto;
    background-color: rgb(250, 249, 246);
  }
}
</style>
