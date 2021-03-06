<template>
  <div class="dynamic">
    <el-table
      :data="attrs"
      style="width: 100%"
      :border="true"
      :stripe="true"
      @expand-change="expandChange"
    >
      <el-table-column type="expand">
        <template slot-scope="scope">
          <el-tag
            v-for="(tag, index) in scope.row.attr_vals"
            :key="index"
            closable
            :disable-transitions="false"
            type="success"
            @close="upCategories(scope.row, tag)"
          >
            {{ tag }}
          </el-tag>
          <el-input
            v-if="scope.row.inputVisible"
            ref="saveTagInput"
            v-model="scope.row.inputValue"
            class="input-new-tag"
            size="small"
            @keyup.enter.native="handleInputConfirm(scope.row)"
            @blur="handleInputConfirm(scope.row)"
          />
          <el-button
            v-else
            class="button-new-tag"
            size="small"
            @click="showInput(scope.row)"
          >
            + New Tag
          </el-button>
        </template>
      </el-table-column>
      <el-table-column
        label="序号"
        prop="id"
        width="50"
      >
        <template slot-scope="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column
        label="商品名称"
        prop="attr_name"
      />
      <el-table-column
        label="操作"
        prop="caozuo"
      >
        <template slot-scope="scope">
          <el-button
            type="primary"
            icon="el-icon-edit"
            @click="editorParameter(scope.row.attr_name, scope.row.attr_id)"
          >
            编辑
          </el-button>
          <el-button
            type="danger"
            icon="el-icon-delete"
            @click="deleteParameter(scope.row.attr_id)"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 弹出窗 -->
    <shop-dialog
      :visible.sync="visible"
      :title="['修改', title]"
      :value="value"
      :attr_name="attr_name"
      :attr_id="attr_id"
      @dialogFormVisible="visible = false"
      @close="visible = false"
      @upload="upload"
    />
  </div>
</template>

<script>
import { Categories, DeleteCategories } from "@/api/goods"
import ShopDialog from "./ShopDialog"
export default {
  name: "",
  components: {
    ShopDialog,
  },
  props: {
    // 参数列表，属性列表
    title: {
      type: String,
    },
    attrList: {
      type: [Array],
    },
    value: {
      type: [Array],
    },
  },
  data() {
    return {
      attrs: [],
      // inputValue: "", // 输入的内容
      // inputVisible: false, // 输入框显示隐藏
      visible: false, // 弹出窗显示
      attr_name: "", // 点击弹出的内容
      attr_id: "", // 编辑的id
    }
  },
  computed: {},
  watch: {
    // 从新写到data
    attrList() {
      this.attrs = this.attrList
    },
  },
  created() {},
  mounted() {},
  methods: {
    expandChange() {},
    // 删除分类参数
    deleteParameter(attrId) {
      const id = this.value[this.value.length - 1]
      this.$confirm("你确定要删除吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(async () => {
          // 确认发送请求
          const data = await DeleteCategories(id, attrId)
          if (data.meta.status == 200) {
            this.$message({
              message: data.meta.msg,
              type: "success",
            })
            this.$emit("upload")
          }
        })
        .catch(() => {})
    },
    // 更新参数
    async upCategories(row, tag) {
      // 定义数组
      const arr = []
      // 遍历数组，把删除的排除掉，把剩下的放到新数组
      row.attr_vals.forEach((val) => {
        if (val !== tag) {
          arr.push(val)
        }
      })
      // 获取分类id
      const id = this.value[this.value.length - 1]
      // 发送请求
      const data = await Categories(id, row.attr_id, {
        attr_name: row.attr_name,
        attr_sel: row.attr_sel,
        attr_vals: arr.join(","),
      })
      row.attr_vals.splice(row.attr_vals.indexOf(tag), 1)
      // 成功返回提示
      if (data.meta.status == 200) {
        this.$message({
          message: data.meta.msg,
          type: "success",
        })
      }
      // console.log(arr);
    }, // 点击 显示input输入框
    showInput(row) {
      row.inputVisible = true
      this.$nextTick(() => {
        this.$refs.saveTagInput.$refs.input.focus()
      })
    }, // 失去焦点
    async handleInputConfirm(row) {
      if (row.inputValue.trim() === "") {
        row.inputValue = ""
        row.inputVisible = false
        return
      }
      const id = this.value[this.value.length - 1]
      // 判断是否为空
      if (row.inputValue) {
        row.attr_vals.push(row.inputValue)
      }
      // 输入框隐藏
      row.inputVisible = false
      // 清空内容
      row.inputValue = ""
      // 发送请求
      const data = await Categories(id, row.attr_id, {
        attr_name: row.attr_name,
        attr_sel: row.attr_sel,
        attr_vals: row.attr_vals.join(","),
      })
      // 成功提示
      if (data.meta.status == 200) {
        this.$message({
          message: data.meta.msg,
          type: "success",
        })
      }
    }, // 点击编辑弹出
    editorParameter(name, id) {
      this.visible = true
      this.attr_name = name
      this.attr_id = id
      // console.log(name);
    },
    upload() {
      this.$emit("upload")
    },
  },
}
</script>

<style scoped lang="scss">
.el-table {
  margin-top: 20px;
  .el-tag {
    margin: 10px;
  }
  .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin: 10px;
    vertical-align: bottom;
  }
}
</style>
