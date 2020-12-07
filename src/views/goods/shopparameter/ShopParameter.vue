<template>
  <div class="shopparameter">
    <!-- 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>分类参数</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片 -->
    <el-card class="box-card" shadow="never">
      <!-- 警告 -->
      <el-alert
        title="注意：只允许为第三级分类设置相关参数！"
        show-icon
        type="warning"
      >
      </el-alert>
      <!-- 层级选择器 -->
      <div class="block">
        <span class="demonstration">选择商品分类：</span>
        <el-cascader
          v-model="value"
          :options="options"
          :props="{ expandTrigger: 'hover' }"
          @change="handleChange"
        ></el-cascader>
      </div>
      <!-- tab切换 -->
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="动态参数" name="dynamic"><shop-dynamic /></el-tab-pane>
        <el-tab-pane label="静态属性" name="static"><shop-static /></el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
import Dynamic from './components/Dynamic'
import Static from './components/Static'
export default {
  name: "ShopParameter",
  components: {
    'shop-dynamic':Dynamic,
    'shop-static': Static
  },
  props: {},
  data() {
    return {
      options: [],
      value: [],
      activeName: "dynamic", // tab选中高亮
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    handleChange() {},
    handleClick() {},
  },
};
</script>

<style scoped lang="scss">
.shopparameter {
  padding: 20px;
  .box-card {
    margin-top: 20px;
  }
  .block {
    margin: 20px 0;
  }
}
</style>
