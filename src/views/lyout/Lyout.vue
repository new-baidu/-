<template>
  <div class="Lyout">
    <el-container>
      <el-header>
          <img src="@/assets/img/head.png" alt="">
      </el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
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
}
</style>
