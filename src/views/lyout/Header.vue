<template>
  <div class="Header">
    <div class="left">
      <img src="@/assets/img/head.png" alt="" />
      <span class="big">名媛男团-435</span>
    </div>

    <el-button class="btn" @click="$store.commit('user/removeToken')">退出</el-button>
  </div>
</template>
<script>
export default {
  name: "Header",
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
.Header {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left {
    display: flex;
    align-items: center;
  }
  .big {
    font-size: 30px;
    color: rgb(247, 238, 247);
    margin-left: 20px;
  }
}
</style>
