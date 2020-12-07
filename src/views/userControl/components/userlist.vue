<template>
  <div class="userlist-box">
    <!-- 表格 -->
    <el-table :data="userlist" border style="width: 100%">
      <el-table-column prop="index" label="#" width="50">
        <template slot-scope="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column prop="username" label="姓名" width="170">
      </el-table-column>
      <el-table-column prop="email" label="邮箱" width="170">
      </el-table-column>
      <el-table-column prop="mobile" label="电话" width="170">
      </el-table-column>
      <el-table-column prop="role_name" label="角色" width="170">
      </el-table-column>
      <el-table-column prop="address" label="状态" width="170">

        <!-- 状态开启关闭 -->
        <template slot-scope="scope">
          <el-switch v-model="scope.row.mg_state" active-color="#13ce66" inactive-color="#ff4949"
            @change="onStatusChange(scope.row)" :disabled="scope.row.statusDisabled">
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="操作">

        <!-- 编辑、删除、设置按钮 -->
        <el-row class="state">

          <!-- 添加 -->
          <el-button class="states el-icon-edit" type="primary" size="mini"></el-button>

          <!-- 删除 -->
          <el-button class="states el-icon-delete" type="danger" size="mini"></el-button>

          <!-- 设置 -->
          <el-button class="states el-icon-s-tools" type="warning" size="mini"></el-button>

        </el-row>

      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import {
    putUserList
  } from '@/api/userList'
  export default {
    name: 'userlist-box',
    props: {
      userlist: {
        type: [String, Array, Object],
      }
    },
    data() {
      return {
        uId: 0, // 用户ID
        // value: true // 用户状态
      }
    },
    created() {
      // this.onStatusChange()
    },
    methods: {
      // 状态的开启和关闭
      onStatusChange(article) {
        console.log(article)
        putUserList(article.id.toString(), article.mg_state).then(res => {
          console.log(res)
          if (article.mg_state == true) {
            this.$message({
              message: '用户状态已开启',
              type: 'success'
            })
          }
          if (article.mg_state == false) {
            this.$message({
              message: '用户状态已关闭',
              type: 'success'
            })
          }
        })
      }
    }

  }

</script>

<style lang="scss" scoped>
  .state {
    display: flex;
    justify-content: left;

    .states {
      width: 20%;
      color: #fff;
    }
  }
</style>