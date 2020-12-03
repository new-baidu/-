<template>
  <div class="Login">
    <div class="dialog">
      <el-form
        ref="ruleForm"
        :model="ruleForm"
        :rules="rules"
        label-width="100px"
      >
        <el-form-item label="用户名" 
        prop="username">
          <el-input
            placeholder="请输入账号"
            v-model="ruleForm.username"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            placeholder="请输入密码"
            v-model="ruleForm.password"
            type="password"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submit">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { login ,usersList} from "@/api/login.js";
export default {
  name: "Login",
  components: {},
  data() {
    return {
      ruleForm: {
        username: "admin",
        password: "123456",
      },
      rules: {
        username: [
          {
            required: true,
            message: "请输入账号",
            trigger: "change",
          },
        ],
        password: [
          {
            required: true,
            message: "请输入账号",
            trigger: "change",
          },
        ],
      },
    };
  },
  created() {},
  computed: {},
  methods: {
    submit() {
      this.$refs["ruleForm"].validate((valid) => {
        if (!valid) return false;
        login(this.ruleForm).then((res) => {
          // console.log(res);
          localStorage.setItem('token', res.data.token)
          // this.usersList()
          this.$router.push('/home')
        });
      });
    },
    usersList(){
      let params = {
        query: '',
        pagenum: 1,
        pagesize: 10
      }
      usersList(params).then((res)=> {
        console.log(res)
      })
    }
  },
  mounted() {},
  activated() {}, // 如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="scss" scoped>
.Login {
  width: 100%;
  height: 100%;
  background-color: rgb(76, 202, 248);
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
}
.dialog {
  
}
</style>
