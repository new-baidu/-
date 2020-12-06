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
          <el-input class="search" v-model="input" placeholder="请输入内容"></el-input>
          <!--/ 搜索框 -->


          <el-button class="button" icon="el-icon-search"></el-button>
        </div>

        <!-- 添加用户 -->
        <el-button class="addButton" type="primary">添加用户</el-button>

      </div>

      <!-- 表格 -->
      <div class="data">
        <Userlist :userlist='list'></Userlist>
      </div>

      <div class="page">
        <el-pagination @size-change="" @current-change="handleCurrentChange"
          :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100"
          layout="total, sizes, prev, pager, next, jumper" :total="400">
        </el-pagination>
      </div>
    </el-card>
    <!--/ 卡片 -->

  </div>

</template>

<script>
  import Userlist from '../components/userlist.vue'
  import {
  getUserList
} from '@/api/userList'

  export default {
    name: 'UserList',
    components: {
      'Userlist': Userlist
    },
    data() {
      return {
        page: 1, // 当前页数
        pageSize: 2, // 每页大小
        total: null, // 总条数
        list: [], // 获取到的数据
        input: '',
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
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
        let Data = {
          pagenum: this.page,
          pagesize: this.pageSize,
          query: this.total
        }
        getUserList(Data).then(res => {
          this.list = res.data.users
          console.log(this.list)
        })
      },

      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
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