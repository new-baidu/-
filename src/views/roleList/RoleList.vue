<template>
  <div class="permissionList">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>角色列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="box-card" shadow="never">
      <el-button slot="append" icon="el-icon-search"
        >添加角色</el-button
      >
      <el-table :data="tableData" border stripe>
        <el-table-column type="expand">
          <template slot-scope="props">
            fhosdhfosd
            fhsldifhlidshf;isdhf;isnj
            flnsdnfsd
            fjds;fnd
            {{props.row}}
          </template>
        </el-table-column>
        <el-table-column label="#">
          <template slot-scope="scope">
            {{ scope.$index + 1 }}
          </template>
        </el-table-column>
        <el-table-column label="角色名称" prop="roleName"> </el-table-column>
        <el-table-column label="角色描述" prop="roleDesc"> </el-table-column>
        <el-table-column label="操作">
          <template>
            <el-button><i class="iconfont iconbianji1"></i>编辑</el-button>
            <el-button><i class="iconfont icondelete"></i>删除</el-button>
            <el-button><i class="iconfont iconsum"></i>分配权限</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <!-- 编辑弹窗
    <el-dialog title="修改地址" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="省市区/县" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="详细地址" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
  </div>
</el-dialog> -->
  </div>
</template>
<script>
import { rolesList } from "@/api/rolesList.js";
import moment from "moment";
export default {
  name: "RoleList",
  components: {},
  data() {
    return {
      tableData: [],
      page: 1,
      pageSize: 10,
      query: "",
      total: null
    };
  },
  created() {
    this.rolesList();
  },
  filters: {
    // 时间
    time(value) {
      return moment(value).format("YYYY-MM-DD HH-mm-ss");
    },
    // 付款
    pay(val) {
      if (val == 1) {
        return "已付款";
      } else {
        return "未付款";
      }
    }
  },
  methods: {
    // 角色列表
    rolesList() {
      let params = {
        pagenum: this.page,
        pagesize: this.pageSize,
        query: this.query
      };
      rolesList()
        .then(res => {
          console.log(res);
          // this.total = res.data.total;
          this.tableData = res.data
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.input-with-select {
  width: 20%;
}
.el-table {
  margin-top: 20px;
}
</style>
