<template>
  <div class="roleList">
    <!-- 面包屑 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>角色列表</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 卡片 -->
    <el-card class="box-card">
      <el-button class="btn" type="primary">添加角色</el-button>

      <div>
        <Table></Table>
      </div>
    </el-card>
  </div>
</template>

<script>
  import Table from './compontent/table.vue'
  export default {
    name: 'roleList',
    components: {
      'Table': Table
    },
    data() {
      return {
      }

    }

  }
</script>

<style lang='scss' scoped>
  .box-card {
    margin-top: 20px;
    .btn {
      padding: 10px;
      margin-bottom: 20px;
    }
  }
</style>