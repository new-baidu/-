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
        <template class="state" slot-scope="scope">
          <!-- 编辑 -->
          <el-button class="states el-icon-edit" type="primary" size="mini" @click="onStatesEdit(scope.row)">
          </el-button>

          <!-- 删除 -->
          <el-button class="states el-icon-delete" type="danger" size="mini" @click="onDelete"></el-button>

          <!-- 设置 -->
          <el-button class="states el-icon-s-tools" type="warning" size="mini"></el-button>

        </template>

      </el-table-column>
    </el-table>
    <!-- 编辑弹出层 -->
    <el-dialog title="修改用户" :visible.sync="edit" width="30%">
      <div style="margin-right: 20px; ">
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
          <el-form-item label="用户名 ">
            <el-input v-model="formLabelAlign.name" disabled="disabled" ></el-input>
          </el-form-item>
          <el-form-item label="邮箱 ">
            <el-input v-model="formLabelAlign.region"></el-input>
          </el-form-item>
          <el-form-item label="手机号 ">
            <el-input v-model="formLabelAlign.type"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="edit = false">取 消</el-button>
        <el-button type="primary" @click="edit = false">确 定</el-button>
      </span>
    </el-dialog>


  </div>
</template>

<script>
  import {
    getUserList,
    putUserList,
    compileUser
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
        edit: false, // 编辑弹出层
        labelPosition: 'right',
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        }
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
      },

      // 编辑
      onStatesEdit(row) {
        this.edit = true;
        console.log(row)
      },

      // 删除
      onDelete() {

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