<template>
  <div class="permissionList">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        首页
      </el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>角色列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card
      class="box-card"
      shadow="never"
    >
      <el-button
        type="primary"
        @click="add"
      >
        添加角色
      </el-button>
      <el-table
        :data="tableData"
        border
        stripe
      >
        <el-table-column type="expand">
          <template slot-scope="scope">
            <div
              v-if="scope.row.children.length != 0"
              class="box"
            >
              <div
                v-for="(item, index) in scope.row.children"
                :key="index"
                class="item"
              >
                <div class="left">
                  <el-tag
                    closable
                    @close="delRights(scope.row.id, item.id)"
                  >
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
                      <el-tag
                        closable
                        class="tag1"
                        type="success"
                        @close="delRights(scope.row.id, item1.id)"
                      >
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
                        @close="delRights(scope.row.id, item2.id)"
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
        <el-table-column
          label="角色名称"
          prop="roleName"
        />
        <el-table-column
          label="角色描述"
          prop="roleDesc"
        />
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button @click="edit(scope.row)">
              <i class="iconfont iconbianji1" />编辑
            </el-button>
            <el-button @click="del(scope.row.id)">
              <i class="iconfont icondelete" />删除
            </el-button>
            <el-button @click="clcikTree(scope.row)">
              <i class="iconfont iconsum" />分配权限
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <!-- 弹窗 -->
    <el-dialog
      :title="dialogTitle"
      :visible.sync="visible"
      width="40%"
    >
      <el-form
        ref="ruleForm"
        :model="form"
        :rules="rules"
      >
        <el-form-item
          label="角色名称"
          prop="name"
        >
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="角色描述">
          <el-input v-model="form.describe" />
        </el-form-item>
      </el-form>
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="visible = false">
          取 消
        </el-button>
        <el-button
          type="primary"
          @click="submit"
        >
          确 定
        </el-button>
      </div>
    </el-dialog>
    <el-dialog
      title="分配权限"
      :visible.sync="treeVisible"
      width="50%"
    >
      <el-tree
        ref="rightsTree"
        :data="treeData"
        :props="prop"
        show-checkbox
        default-expand-all
        node-key="id"
        :default-checked-keys="checkeds"
        check-on-click-node
        
      />
      <!-- @check="check" -->
      <!-- @check-change="checkChange" -->
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="treeVisible = false">
          取消
        </el-button>
        <el-button @click="setRights">
          确定
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import {
  rolesList,
  add,
  edit,
  del,
  tree,
  delRights,
  setRights
} from "@/api/rolesList.js";
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
    }
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
        describe: ""
      },
      treeData: [],
      treeVisible: false,
      prop: {
        label: "authName"
      },
      checked: [],
      checkeds: [],
      roleId: null
    };
  },
  created() {
    this.rolesList();
    this.tree();
  },
  methods: {
    // 设置权限
    setRights() {
      const ids = this.$refs.rightsTree.getCheckedKeys().join(',');
      console.log(ids)
      setRights(this.roleId,{ rids: ids })
        .then(res => {
          console.log(res);
          this.$message({
            type: 'success',
            message: '更新成功！'
          })
          this.treeVisible = false
          this.rolesList()
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 删除角色指定权限
    delRights(roleId, rightId) {
      delRights(roleId, rightId)
        .then(res => {
          console.log(res);
          // this.tableData = res.data
          const data = this.tableData;
          const index = data.findIndex(item => {
            return item.id == roleId;
          });
          console.log(index);
          data[index].children = res.data;
          this.$nextTick(() => {
            this.tableData = data;
          });
        })
        .catch(err => {
          console.log(err);
        });
    },
    setName(datas) {
      // 遍历树  获取id数组
      for (var i in datas) {
        if (datas[i].children) {
          this.setName(datas[i].children);
        } else {
          this.checked.push(datas[i].id);
        }
      }
    },
    clcikTree(row) {
      this.roleId = row.id;
      this.checked = [];
      this.checkeds = [];
      this.setName(row.children);
      this.$nextTick(() => {
        // this.checkeds = [105]
        this.checkeds = JSON.parse(JSON.stringify(this.checked));
        this.$refs.rightsTree.setCheckedKeys(this.checkeds);
      });
      this.treeVisible = true;
    },
    tree() {
      tree().then(res => {
        console.log(res);
        this.treeData = res.data;
      });
    },
    // 角色列表
    rolesList() {
      const params = {
        pagenum: this.page,
        pagesize: this.pageSize,
        query: this.query
      };
      rolesList()
        .then(res => {
          console.log(res);
          // this.total = res.data.total;
          this.tableData = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    add() {
      this.dialogTitle = "添加角色";
      this.visible = true;
      this.id = null;
      this.form.name = "";
      this.form.describe = "";
    },
    edit(row) {
      this.dialogTitle = "修改角色";

      this.id = row.id;
      this.form.name = row.roleName;
      this.form.describe = row.roleDesc;
      this.visible = true;
    },
    del(id) {
      this.$confirm("此操作将删除该角色, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          del(id)
            .then(() => {
              this.$message({
                type: "success",
                message: "删除成功"
              });

              this.rolesList();
            })
            .catch(() => {
              this.$message({
                type: "warning",
                message: "删除失败，请退出重试！"
              });

              this.rolesList();
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    submit() {
      this.$refs.ruleForm.validate(valid => {
        if (!valid) return;
        if (this.id) {
          // 修改
          this.edit();
        } else {
          // 添加
          this.add();
        }
      });
    },
    add() {
      add({
        roleName: this.form.name,
        roleDesc: this.form.describe
      })
        .then(res => {
          this.$message({
            type: "success",
            message: "添加成功"
          });
          this.visible = false;
          this.rolesList();
        })
        .catch(() => {
          this.$message({
            type: "warning",
            message: "添加失败，请退出重试！"
          });
          this.visible = false;
        });
    },
    edit() {
      edit(this.id, {
        roleName: this.form.name,
        roleDesc: this.form.describe
      })
        .then(res => {
          this.$message({
            type: "success",
            message: "修改成功"
          });
          this.visible = false;
          this.rolesList();
        })
        .catch(() => {
          this.$message({
            type: "warning",
            message: "添加失败，请退出重试！"
          });
          this.visible = false;
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
/deep/.el-form-item {
  display: flex;
  width: 100%;
  padding-left: 10px;
  font-size: 14px;
  padding: 0px 20px;
  box-sizing: border-box;
  .el-form-item__label {
    flex: 1;
  }
  .el-form-item__content {
    flex: 9;
    .el-input {
      width: 100%;
    }
  }
}
</style>
