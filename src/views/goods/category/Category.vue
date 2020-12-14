<template>
  <div class="category">
    <!-- 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        首页
      </el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>商品分类</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片 -->
    <el-card
      class="box-card"
      shadow="never"
    >
      <el-button
        type="primary"
        @click="addGoodCategories('添加')"
      >
        添加分类
      </el-button>
      <el-table
        :data="categories"
        style="width: 100%; margin-bottom: 20px"
        border
        row-key="cat_id"
        lazy
        :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
      >
        <el-table-column
          prop="cat_name"
          label="分类名称"
          width="400"
          align="left"
        >
          <template slot-scope="scope">
            {{ scope.row.cat_name }}
          </template>
        </el-table-column>
        <el-table-column
          type=""
          prop="cat_deleted"
          label="是否有效"
          width="400"
        >
          <template slot-scope="scope">
            <i
              v-if="scope.row.cat_deleted == false"
              class="el-icon-success"
            />
          </template>
        </el-table-column>
        <el-table-column
          type=""
          prop="paixu"
          label="排序"
        >
          <template slot-scope="scope">
            <el-tag
              v-if="scope.row.cat_level == 0"
              style="
                color: #409eff;
                background-color: #ecf5ff;
                border-color: #d9ecff;
              "
            >
              一级
            </el-tag>
            <el-tag
              v-else-if="scope.row.cat_level == 1"
              type="success"
            >
              二级
            </el-tag>
            <el-tag
              v-else-if="scope.row.cat_level == 2"
              type="warning"
            >
              三级
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column
          type=""
          prop="caozuo"
          label="操作"
        >
          <template slot-scope="scope">
            <el-button
              type="primary"
              icon="el-icon-edit"
              @click="
                uploadCategories(scope.row.cat_name, '编辑', scope.row.cat_id)
              "
            >
              编辑
            </el-button>
            <el-button
              type="danger"
              icon="el-icon-delete"
              @click="deleteGoodcategories(scope.row.cat_id)"
            >
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        :current-page="page"
        layout="sizes, prev, pager, next,total"
        :page-sizes="pagesizes"
        :total="total"
        @size-change="sizeChange"
        @current-change="currentChange"
      />
    </el-card>
    <!-- 弹出框 -->
    <el-dialog
      :title="operation + '分类'"
      :visible.sync="dialogVisible"
      width="30%"
    >
      <el-form
        ref="ruleForm"
        :model="ruleForm"
        :rules="rules"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item
          label="分类名称"
          prop="name"
        >
          <el-input v-model="ruleForm.name" />
        </el-form-item>
        <el-form-item
          v-if="operation == '添加'"
          label="父级分类"
        >
          <el-cascader
            v-model="value"
            :options="options"
            :props="optionsProps"
            clearable
          />
        </el-form-item>
      </el-form>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="dialogVisible = false"> 取 消 </el-button>
        <el-button
          type="primary"
          @click="onSubmitGoodcategories"
        >
          确 定
        </el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {
  getGoodcategories,
  deleteGoodcategories,
  uploadGoodcategories,
  addGoodcategories,
} from "@/api/goods"
export default {
  name: "Category",
  components: {},
  props: {},
  data() {
    return {
      pagesizes: [5, 10, 15, 20], // 每页显示条数
      total: 1000, // 总条数
      page: 1, // 页数
      size: 10, // 默认显示条数
      categories: [], // 分类列表
      options: [],
      value: [], // 选中的id
      optionsProps: {
        checkStrictly: true,
        value: "cat_id",
        label: "cat_name",
        children: "children",
      },
      dialogVisible: false, // 弹出窗显示与隐藏
      operation: "",
      ruleForm: {
        name: "",
        id: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入商品分类名称", trigger: "blur" },
        ],
      },
    }
  },
  computed: {},
  watch: {},
  created() {
    this.getGoodcategories()
  },
  mounted() {},
  methods: {
    // 获取商品分类
    async getGoodcategories() {
      const data = await getGoodcategories({
        type: 3,
        pagenum: this.page,
        pagesize: this.size,
      })
      if (data.meta.status == 200) {
        this.categories = data.data.result
        this.total = data.data.total
        this.$message({
          type: "success",
          message: data.meta.msg,
        })
      }
      // console.log(data)
    },
    // 分页
    sizeChange(size) {
      this.size = size
      this.getGoodcategories()
    },
    // 分页
    currentChange(page) {
      this.page = page
      this.getGoodcategories()
    },
    // 删除分类
    deleteGoodcategories(id) {
      this.$confirm("确定要删除此分类吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(async () => {
          const data = await deleteGoodcategories(id)
          if (data.meta.status === 200) {
            this.$message({
              type: "success",
              message: data.meta.msg,
            })
            this.getGoodcategories()
          }
        })
        .catch(() => {})
    },
    // 编辑分类
    uploadCategories(name, operation, id) {
      this.ruleForm.name = name
      this.ruleForm.id = id
      this.operation = operation
      this.dialogVisible = true
    },
    // 添加分类
    async addGoodCategories(operation) {
      this.operation = operation
      this.dialogVisible = true
       const data = await getGoodcategories({
        type: 2,
      })
       this.options = data.data
    },
    // 发送请求
    async onSubmitGoodcategories() {
      if (this.operation == "添加") {
        const id = this.value[this.value.length - 1]
        const data = await addGoodcategories({
          cat_pid: id,
          cat_name: this.ruleForm.name,
          cat_level: this.value.length,
        })
         if (data.meta.status === 201) {
          this.dialogVisible = false
          this.$message({
            type: "success",
            message: data.meta.msg,
          })
          this.getGoodcategories()
        }
        console.log(data)
      } else if (this.operation == "编辑") {
        const data = await uploadGoodcategories(this.ruleForm.id, {
          cat_name: this.ruleForm.name,
        })
        if (data.meta.status === 200) {
          this.dialogVisible = false
          this.$message({
            type: "success",
            message: data.meta.msg,
          })
          this.getGoodcategories()
        }
      }
    },
  },
}
</script>

<style scoped lang="scss">
.el-table {
  margin-top: 10px;
}
.el-icon-success {
  color: lightgreen;
}
.el-cascader {
  width: 100%;
}
</style>
