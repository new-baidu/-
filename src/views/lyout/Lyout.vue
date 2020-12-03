<template>
  <div class="Lyout">
    <!-- <el-container class="main"> -->
    <el-header>
      <img src="@/assets/img/head.png" alt="" />
    </el-header>
    <el-container class="container">
      <el-aside width="300px">Aside</el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
    <!-- </el-container> -->
  </div>
</template>
<script>
export default {
  name: "Lyout",
  components: {},
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
  .contaniner {
    flex: 1;
    width: 100%;
    box-sizing: border-box;
    display: flex;
  }
}
</style>
