<template>
  <div class="permissionList">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>商品列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="box-card" shadow="never">
      <el-table :data="tableData" border stripe>
        <el-table-column label="序号">
          <template slot-scope="scope">
            {{ scope.$index + 1 }}
          </template>
        </el-table-column>
        <el-table-column label="权限名称" prop="authName"> </el-table-column>
        <el-table-column label="路径" prop="path"> </el-table-column>
        <el-table-column label="权限等级" prop="level">
          <template slot-scope="scope">
            <el-tag
              :type="
                scope.row.level == 2
                  ? 'warning'
                  : scope.row.level == 1
                  ? 'success'
                  : ''
              "
            >
              {{ scope.row.level | level }}</el-tag
            >
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>
<script>
import { permissionList } from "@/api/permission.js";
export default {
  name: "PermissionList",
  components: {},
  data() {
    return {
      tableData: []
    };
  },
  created() {
    this.permissionList();
  },
  filters: {
    level(value) {
      if (value == 0) {
        return "一级";
      } else if (value == 1) {
        return "二级";
      } else {
        return "三级";
      }
    }
  },
  methods: {
    // 权限列表
    permissionList() {
      permissionList()
        .then(res => {
          console.log(res);
          this.tableData = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style lang="scss" src="" scoped></style>
