<template>

  <div class="userList">

    <!-- 面包屑 -->
    <el-breadcrumb class="userlist" separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!--/ 面包屑 -->

    <!-- 卡片 -->
    <el-card class="box-card">

      <!-- 导航栏区域 -->
      <div class="nav">

        <div class="search-box">
          <!-- 搜索框 -->
          <el-input class="search" v-model="query" placeholder="请输入内容"></el-input>
          <!--/ 搜索框 -->


          <el-button class="button" icon="el-icon-search" @click="onSearch"></el-button>
        </div>

        <!-- 添加用户 -->
        <el-button class="addButton" type="primary" @click="onShow">添加用户</el-button>

        <!-- 对话框 -->
        <div class="Dialog">
          <AddDialog :show.sync="show"></AddDialog>
        </div>

      </div>

      <!-- 表格 -->
      <div class="data">
        <Userlist :userlist='list' v-loading="loading" element-loading-text="拼命加载中"></Userlist>
      </div>

      <div class="page">
        <el-pagination @current-change="handleCurrentChange" :current-page="page" :page-sizes="[2, 5, 10]"
          :page-size="100" @size-change="sizeChange" layout="total, sizes, prev, pager, next, jumper" :total="total"
          :disabled="loading">
        </el-pagination>
      </div>
    </el-card>
    <!--/ 卡片 -->

  </div>

</template>

<script>
  import Userlist from '../components/userlist.vue'
  import AddDialog from '../components/addDialogVisible.vue'
  import {
    getUserList
  } from '@/api/userList'

  export default {
    name: 'UserList',
    components: {
      'Userlist': Userlist,
      'AddDialog': AddDialog
    },
    data() {
      return {
        page: 1, // 当前页数
        pageSize: 2, // 每页大小
        total: null, // 总条数
        list: [], // 获取到的数据
        query: '', // 查询参数
        loading: true, // loading等待
        show: false
      }
    },
    computed: {},
    watch: {},
    created() {
      this.onUserList()
    },
    mounted() { },
    methods: {

      // 获取用户列表
      onUserList() {
        this.loading = true
        let Data = {
          pagenum: this.page,
          pagesize: this.pageSize,
          query: this.query
        }
        getUserList(Data).then(res => {
          console.log(res)
          this.list = res.data.users
          // console.log(this.list)
          this.total = res.data.total
          this.$message({
            message: '成功获取到用户信息',
            type: 'success'
          })
          this.loading = false
        })
      },

      // 每页大小
      sizeChange(pageSize) {
        this.pageSize = pageSize;
        this.onUserList()
      },

      // 当前页面
      handleCurrentChange(page) {
        this.page = page;
        this.onUserList()
      },

      // 搜索获取用户信息
      onSearch() {
        this.onUserList()
      },

      // 添加用户
      onShow() {
        this.show = true
        
      }
    }
  }
</script>

<style lang="scss" scoped>
  .userList {
    padding: 20px;

    .box-card {
      margin-top: 20px;

      .nav {
        display: flex;

        .search-box {
          padding: 0 15px;
          width: 33.33%;
          display: flex;

          .button {
            padding: 0 20px;
            background-color: #f5f7fa;
            color: #909399;
            border-radius: 0 4px 0;
            outline: none;
          }
        }

        .addButton {
          padding: 0 20px;
        }
      }

      .data {
        padding: 15px;
      }
    }
  }
</style>