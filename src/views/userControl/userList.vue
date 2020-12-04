<template>

  <div class="userList">

    <!-- 面包屑 -->
    <el-breadcrumb class="title" separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!--/ 面包屑 -->

    <!-- 卡片 -->
    <el-card class="box-card">

      <!-- 搜索框 -->
      <el-input class="search" v-model="input" placeholder="请输入内容"></el-input>
      <!--/ 搜索框 -->

      <el-button class="button">按钮</el-button>

    </el-card>
    <!--/ 卡片 -->

  </div>

</template>

<script>
export default {
  name: 'UserList',
  data() {
    return {
      input: ''
    }
  },
}

</script>

<style lang="scss" scoped>
  .title{
    padding: 20px;
  }

  .search{
    float: left;
    line-height: 40px;
    margin-bottom: 20px;
    padding: 0 15px;
    width: 290px;
    height: 40px;
    outline: 0;
    box-sizing: border-box;
    border-radius: 4px;
    
  }

  .button{
    float: left;
    margin: 0 -15px;
    height: 40px;
    outline: 0;
  }
</style>
