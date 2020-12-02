<template>
  <div class="Login">
    <div class="dialog">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password"></el-input>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  components: {},
  data() {
    return {
      ruleForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          {
            required: true,
            message: "请输入账号",
            trigger: "change"
          }
        ],
        password: [
          {
            required: true,
            message: "请输入账号",
            trigger: "change"
          }
        ]
      }
    };
  },
  created() {},
  computed: {},
  methods: {},
  mounted() {},
  activated() {} // 如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="scss" scoped>
.Login {
  width: 100%;
  height: 100%;
  background-color: rgb(76, 202, 248);
  box-sizing: border-box;
}
.dialog {
  width: 500px;
  height: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -250px;
  margin-top: -250px;
}
</style>
