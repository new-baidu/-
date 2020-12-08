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
            :key="index"
            v-for="(tag, index) in scope.row.attr_vals"
            closable
            :disable-transitions="false"
            type="success"
            @close="
              upCategories(
                scope.row.attr_id,
                scope.row.attr_name,
                scope.row.attr_sel,
                scope.row.attr_vals,
                tag
              )
            "
          >
            {{ tag }}
          </el-tag>
          <el-input
            class="input-new-tag"
            v-if="inputVisible"
            v-model="inputValue"
            ref="saveTagInput"
            size="small"
            @keyup.enter.native="handleInputConfirm()"
            @blur="
              handleInputConfirm(
                scope.$index,
                scope.row.attr_id,
                scope.row.attr_sel
              )
            "
          >
          </el-input>
          <el-button
            v-else
            class="button-new-tag"
            size="small"
            @click="showInput()"
            >+ New Tag</el-button
          >
        </template>
      </el-table-column>
      <el-table-column label="序号" prop="id" width="50">
        <template slot-scope="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column label="商品名称" prop="attr_name"></el-table-column>
      <el-table-column label="描述" prop="desc">
        <template slot-scope="scope">
          <el-button
            type="primary"
            icon="el-icon-edit"
            @click="editorParameter(scope.row.attr_name, scope.row.attr_id)"
            >编辑</el-button
          >
          <el-button
            type="danger"
            icon="el-icon-delete"
            @click="deleteParameter(scope.row.attr_id)"
            >删除</el-button
          >
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
import { Categories, DeleteCategories } from "@/api/goods";
import ShopDialog from "./ShopDialog";
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
      inputValue: "", //输入的内容
      inputVisible: false, // 输入框显示隐藏
      visible: false, // 弹出窗显示
      attr_name: "", // 点击弹出的内容
      attr_id: "", // 编辑的id
    };
  },
  computed: {},
  watch: {
    // 从新写到data
    attrList() {
      this.attrs = this.attrList;
    },
  },
  created() {},
  mounted() {},
  methods: {
    expandChange() {},
    // 删除分类参数
    deleteParameter(attrId) {
      let id = this.value[this.value.length - 1];
      this.$confirm("你确定要删除吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(async () => {
          // 确认发送请求
          const data = await DeleteCategories(id, attrId);
          if (data.meta.status == 200) {
            this.$message({
              message: data.meta.msg,
              type: "success",
            });
            this.$emit("upload");
          }
        })
        .catch(() => {});
    },
    // 更新参数
    async upCategories(arrtId, attr_name, attr_sel, attr_vals, tag) {
      // 定义数组
      let arr = [];
      // 遍历数组，把删除的排除掉，把剩下的放到新数组
      attr_vals.forEach((val) => {
        if (val !== tag) {
          arr.push(val);
        }
      });
      // 获取分类id
      let id = this.value[this.value.length - 1];
      // 发送请求
      const data = await Categories(id, arrtId, {
        attr_name,
        attr_sel,
        attr_vals: arr.join(","),
      });
      // 成功返回提示
      if (data.meta.status == 200) {
        this.$message({
          message: data.meta.msg,
          type: "success",
        });
        attr_vals.splice(attr_vals.indexOf(tag), 1);
      }
      // console.log(arr);
    }, // 点击 显示input输入框
    showInput() {
      this.inputVisible = true;
      this.$nextTick(() => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    }, // 失去焦点
    async handleInputConfirm(index, attr_id, sel) {
      let inputValue = this.inputValue;
      let id = this.value[this.value.length - 1];
      // 判断是否为空
      if (inputValue) {
        this.attrs[index].attr_vals.push(inputValue);
      }
      // 输入框隐藏
      this.inputVisible = false;
      // 清空内容
      this.inputValue = "";
      // 发送请求
      const data = await Categories(id, attr_id, {
        attr_name: inputValue,
        attr_sel: sel,
        attr_vals: this.attrs[index].attr_vals.join(","),
      });
      // 成功提示
      if (data.meta.status == 200) {
        this.$message({
          message: data.meta.msg,
          type: "success",
        });
      }
    }, // 点击编辑弹出
    editorParameter(name, id) {
      this.visible = true;
      this.attr_name = name;
      this.attr_id = id;
      // console.log(name);
    },
    upload() {
      this.$emit("upload");
    },
  },
};
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
