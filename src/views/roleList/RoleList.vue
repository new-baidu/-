<template>
  <div class="permissionList">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }"> 首页 </el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>角色列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="box-card" shadow="never">
      <el-button type="primary" @click="add"> 添加角色 </el-button>
      <el-table :data="tableData" border stripe>
        <el-table-column type="expand">
          <template slot-scope="scope">
            <div v-if="scope.row.children.length != 0" class="box">
              <div
                v-for="(item, index) in scope.row.children"
                :key="index"
                class="item"
              >
                <div class="left">
                  <el-tag closable>
                    {{ item.authName }}
                  </el-tag>
                </div>
                <div class="right">
                  <div
                    v-for="(item1, index1) in item.children"
                    :key="index1"
                    class="btnList"
                  >
                    <div class="right1">
                      <el-tag closable class="tag1" type="success">
                        {{ item1.authName }}
                      </el-tag>
                      <i class="el-icon-caret-right tag2" />
                    </div>

                    <div class="right2">
                      <el-tag
                        v-for="(item2, index2) in item1.children"
                        :key="index2"
                        closable
                        type="warning"
                      >
                        {{ item2.authName }}
                      </el-tag>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-else />
          </template>
        </el-table-column>
        <el-table-column label="#">
          <template slot-scope="scope">
            {{ scope.$index + 1 }}
          </template>
        </el-table-column>
        <el-table-column label="角色名称" prop="roleName" />
        <el-table-column label="角色描述" prop="roleDesc" />
        <el-table-column label="操作">
          <template>
            <el-button><i class="iconfont iconbianji1" />编辑</el-button>
            <el-button><i class="iconfont icondelete" />删除</el-button>
            <el-button><i class="iconfont iconsum" />分配权限</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <!-- 弹窗 -->
    <el-dialog :title="dialogTitle" :visible.sync="visible">
      <el-form :model="form" :rules="rules">
        <el-form-item label="角色名称" prop="name">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="角色描述">
          <el-input v-model="form.describe" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false"> 取 消 </el-button>
        <el-button type="primary" @click="submit">
          确 定
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { rolesList } from "@/api/rolesList.js";
import moment from "moment";
export default {
  name: "RoleList",
  components: {},
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
    },
  },
  data() {
    return {
      tableData: [],
      page: 1,
      pageSize: 10,
      query: "",
      total: null,
      dialogTitle: "",
      visible: false,
      rules: {
        name: [{ required: true, message: "请输入活动名称", trigger: "blur" }]
      },
      form: {
        name: "",
        describe: "",
      },
    };
  },
  created() {
    this.rolesList();
  },
  methods: {
    // 角色列表
    rolesList() {
      const params = {
        pagenum: this.page,
        pagesize: this.pageSize,
        query: this.query,
      };
      rolesList()
        .then((res) => {
          console.log(res);
          // this.total = res.data.total;
          this.tableData = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    add() {
      this.dialogTitle = "添加角色";
      this.visible = true;
    },
    edit() {
      this.dialogTitle = "修改角色";
      this.visible = true;
    },
    submit(){

    }
  },
};
</script>
<style lang="scss" scoped>
.input-with-select {
  width: 20%;
}
.el-table {
  margin-top: 20px;
}
/deep/.box {
  display: flex;
  flex-direction: column;
  border-top: 1px solid #ebeef5;
  .item {
    display: flex;
    border-bottom: 1px solid #ebeef5;
    .left {
      flex: 6;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .right {
      flex: 14;
      display: flex;
      flex-direction: column;
      .btnList {
        border-bottom: 1px solid #ebeef5;
        display: flex;
        .right1 {
          flex: 2;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .right2 {
          flex: 8;
        }
      }
      .btnList:last-child {
        border: none;
      }
    }
  }
  .el-tag {
    margin: 10px;
  }
}
.el-form-item {
  display: flex;
  width: 100%;
  padding-left: 10px;
  font-size: 14px;
  .el-form-item__label {
    flex: 3;
  }
  .el-form-item__content {
    flex: 7;
    .el-input {
      width: 100%;
    }
  }
}
</style>
