<template>
  <div class="addDialog">
    <el-dialog class="dialog" title="添加用户" :visible.sync="addDialogVisible" style="width: 700px;" :close-on-click-modal="false">
      <el-form :model="form" :rules="Rules" style="width: 300px;" size="medium" ref="ruleForm">
        <!-- 用户 -->
        <el-form-item label="新用户" :label-width="formLabelWidth" class="dialogForm" prop="name">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>

        <!-- 密码 -->
        <el-form-item label="密码" :label-width="formLabelWidth" class="dialogForm" prop="password">
          <el-input type="password" v-model="form.password" autocomplete="off"></el-input>
        </el-form-item>

        <!-- 邮箱 -->
        <el-form-item label="邮箱" :label-width="formLabelWidth" class="dialogForm" prop="email">
          <el-input v-model="form.email" autocomplete="off"></el-input>
        </el-form-item>

        <!-- 手机号 -->
        <el-form-item label="手机" :label-width="formLabelWidth" class="dialogForm" prop="mobile">
          <el-input v-model="form.mobile" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="onAddDialog">取 消</el-button>
        <el-button type="primary" @click="submitForm" ref="btn">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import {
    addUserList
  } from '@/api/userList'

  export default {
    name: 'AddDing',
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
        // addDialogVisible: this.show, // 对话框
        // 对话框表单
        form: {
          name: '', // 账号
          password: '', // 密码
          email: '', // 邮箱
          mobile: '', // 手机号
          delivery: false,
          type: [],
          resource: '',
          desc: ''

        },
        formLabelWidth: '60px',
        Rules: {
          // 用户
          name: [
            { required: true, message: '请输入账号名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],

          // 密码
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
          ],

          // 邮箱
          email: [
            { required: true, trigger: 'blur', validator: checkEmail }
          ],

          // 手机
          mobile: [
            { validator: checkPhone, required: true, trigger: 'blur' }
          ]
        }
      }
    },
    props: {
      show: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      addDialogVisible: {
        get() {
          return this.show
        },
        set(newValue) {
          this.$emit('update:show', newValue)

        }
      }
    },
    watch: {},
    methods: {

      // 把信息封装到数组里
      add() {
        //没啥问题
        let type = {
          name: this.name,
          password: this.password,
          email: this.email,
          mobile: this.mobile
        }
      },

      // 取消添加
      onAddDialog(formName, addDialogVisible) {
        this.addDialogVisible = false
        this.$refs.ruleForm.resetFields();
      },

      // 确定添加
      submitForm() {
        // console.log(this, this.$refs,this.$refs['ruleForm'].$el,this.$refs.btn)
        this.$refs.ruleForm.validate((valid) => {
          if (!valid) return
          const userForm = addUserList({
            username: this.form.name,
            password: this.form.password,
            email: this.form.email,
            mobile: this.form.mobile,
            
          }).then((res) => {
            this.$parent.$parent.onUserList()
            this.addDialogVisible = false
          })
          
        })
      }
    }
  }

</script>

<style lang="scss" scoped>
  .dialog {
    margin: 0 auto;
  }
</style>