<template>
  <div class="addgood">
    <!-- 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>添加商品</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片 -->
    <el-card class="box-card">
      <!-- 消息提示 -->
      <el-alert
        title="添加商品信息"
        type="info"
        center
        :closable="false"
        show-icon
      >
      </el-alert>
      <!-- 步骤条 -->
      <el-steps
        :active="active"
        space="200px"
        :align-center="true"
        finish-status="success"
      >
        <el-step title="基本信息"></el-step>
        <el-step title="商品参数"></el-step>
        <el-step title="商品属性"></el-step>
        <el-step title="商品图片"></el-step>
        <el-step title="商品内容"></el-step>
        <el-step title="完成"></el-step>
      </el-steps>
      <!-- 添加商品信息 -->
      <add-goodinfo @tabClick="stepactive($event)"/>
    </el-card>
  </div>
</template>

<script>
import AddGoodinfo from './components/AddGoodinfo'
export default {
  name: "AddGodd",
  components: {
    AddGoodinfo
  },
  props: {},
  data() {
    return {
      active: 0, //步骤条显示
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    stepactive (e) {
      this.active = Number(e)
      // console.log(e);
    }
  },
};
</script>

<style scoped lang="scss">
.addgood {
  padding: 10px 15px 0 15px;
  .box-card {
    margin-top: 15px;
    .el-alert {
      margin-bottom: 10px;
    }
  }
}
</style>
