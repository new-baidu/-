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
          <el-button class="states el-icon-delete" type="danger" size="mini" @click="onDelete(scope.row.id)">
          </el-button>

          <!-- 设置 -->
          <!-- <el-button class="states el-icon-s-tools" type="warning" size="mini"></el-button> -->

        </template>

      </el-table-column>
    </el-table>
    <!-- 编辑弹出层 -->
    <el-dialog title="修改用户" :visible.sync="edit" width="30%" :close-on-click-modal="false">
      <div style="margin-right: 20px; ">
        <el-form :label-position="labelPosition" label-width="80px" :model="form" :rules="rules" ref="refForm">
          <el-form-item label="用户名 ">
            <el-input v-model="form.name" disabled="disabled"></el-input>
          </el-form-item>
          <el-form-item label="邮箱 " prop="email">
            <el-input v-model="form.email"></el-input>
          </el-form-item>
          <el-form-item label="手机号 " prop="mobile">
            <el-input v-model="form.mobile"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancel()">取 消</el-button>
        <el-button type="primary" @click="onEdit()">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
  import {
    putUserList,
    compileUser,
    deleteUser
  } from '@/api/userList'
  export default {
    name: 'userlist-box',
    props: {
      userlist: {
        type: [String, Array, Object],
      }
    },
    data() {
      // 邮箱验证
      var checkEmail = (rule, value, callback) => {
        const mailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
        if (!value) {
          return callback(new Error('邮箱不能为空'))
        }
        setTimeout(() => {
          if (mailReg.test(value)) {
            callback()
          } else {
            callback(new Error('请输入正确的邮箱格式'))
          }
        }, 100)
      };

      // 手机号
      var checkPhone = (rule, value, callback) => {
        const phoneReg = /^1[3|4|5|7|8][0-9]{9}$/
        if (!value) {
          return callback(new Error('电话号码不能为空'))
        }
        setTimeout(() => {
          // Number.isInteger是es6验证数字是否为整数的方法,实际输入的数字总是识别成字符串
          // 所以在前面加了一个+实现隐式转换

          if (!Number.isInteger(+value)) {
            callback(new Error('请输入数字值'))
          } else {
            if (phoneReg.test(value)) {
              callback()
            } else {
              callback(new Error('电话号码格式不正确'))
            }
          }
        }, 100)
      };
      return {
        uId: 0, // 用户ID
        // value: true // 用户状态
        edit: false, // 编辑弹出层
        labelPosition: 'right',
        form: {
          name: '',
          email: '',
          mobile: '',
          id: ""
        },
        // 校验
        rules: {
          // 邮箱
          email: [
            { required: true, trigger: 'blur', validator: checkEmail }
          ],

          // 手机
          mobile: [
            { validator: checkPhone, required: true, trigger: 'blur' }
          ]
        },

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

      // 修改(显示)
      onStatesEdit(row) {
        console.log(row)
        this.edit = true;
        this.form.name = row.username;
        this.form.id = row.id;
        this.form.email = row.email;
        this.form.mobile = row.mobile;
      },
      // 修改(替换)
      onEdit() {
        console.log(100)
        this.$refs.refForm.validate((valid) => {
          if (!valid) return
          let Data = {
            // id: this.form.id,
            email: this.form.email,
            mobile: this.form.mobile
          };
          compileUser(this.form.id, Data).then((res) => {
            this.$parent.$parent.onUserList()
            console.log(res)

            this.$message({
              type: 'success',
              message: '修改成功！'
            })
            this.edit = false
          }).catch(() => {
            this.$message({
              type: 'warning',
              message: '修改失败！'
            })
          })
        })
      },

      // 删除
      onDelete(id) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          deleteUser(id).then(() => {
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
            this.$parent.$parent.onUserList()
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            })
            this.$parent.$parent.onUserList()
          })
        })
      },

      // 取消添加
      cancel(formName, edit) {
        this.edit = false
        this.$refs.refForm.resetFields();
        this.$message({
              type: 'info',
              message: '取消编辑!'
            });
      },
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