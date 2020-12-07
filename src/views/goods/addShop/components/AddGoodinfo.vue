<template>
  <div class="addgoodinfo">
    <el-tabs
      tab-position="left"
      v-model="tabActive"
      @tab-click="tabClick"
      :before-leave="beforeleave"
    >
      <!-- 基本信息 -->
      <el-tab-pane label="基本信息" name="goodinfo">
        <good-info @handleChange="handleChange($event)" />
      </el-tab-pane>
      <!-- 商品参数 -->
      <el-tab-pane label="商品参数" name="parameter">
        <div class="attr-item" v-for="(item, index) in attrs" :key="index">
          <p>{{ item.attr_name }}</p>
          <el-checkbox-group v-model="checkList[index].list">
            <el-checkbox
              :label="attr"
              :checked="checked"
              v-for="attr of strSplit(item.attr_vals)"
              :key="attr"
              :border="true"
            ></el-checkbox>
          </el-checkbox-group>
        </div>
      </el-tab-pane>
      <!-- 商品属性 -->
      <el-tab-pane label="商品属性" name="goodattr">
        <el-form ref="form">
          <el-form-item label="" v-for="(item, index) of onlyattr" :key="index">
            <p slot="label">{{ item.attr_name }}</p>
            <el-input v-model="item.attr_vals" ref="text" clearable></el-input>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="商品图片" name="goodimg">
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-progress="handleRemove"
          :file-list="fileList"
          list-type="picture"
        >
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">
            只能上传jpg/png文件，且不超过500kb
          </div>
        </el-upload>
      </el-tab-pane>
      <el-tab-pane label="商品内容" name="goodcontent">
        <qu-editor @onEditorChange="onEditorChange($event)" />
        <el-button type="primary" @click="addGood()"
          >添加商品</el-button
        ></el-tab-pane
      >
    </el-tabs>
  </div>
</template>

<script>
import GoodInfo from "./GoodInfo";
import { getCategories, getGoodAttributes, addGoods } from "@/api/goods";
import QuEditor from "./QuEditor";
export default {
  name: "AddGoodinfo",
  components: {
    GoodInfo,
    QuEditor,
  },
  props: {},
  data() {
    return {
      tabActive: "goodinfo", //tab切换
      value: [], // 分类ID
      ruleForm: "", // 基本信息
      checked: false,
      attrs: [], // 参数
      onlyattr: [], // 属性
      checkList: [], // 复选框列表
      attrList: [], // 要添加的属性列表
      checkattrs: [], // 拼接之后的复选框列表
      attr_ids: [], // id
      fileList: [
        {
          name: "food.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
        },
      ],
      content: "", // 文本内容
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    beforeleave() {
      if (this.value.length == 0) {
        this.$message.error("请选择分类");
        return false;
      }
    },
    //   tab切换
    tabClick(tab) {
      if (this.value.length !== 0) {
        this.$emit("tabClick", tab.index);
      }
      if (tab.index == 1) {
        this.getGoodAttributes("many");
      } else if (tab.index == 2) {
        this.getGoodAttr("only");
      }
    }, // 控制步骤条
    handleChange(e) {
      this.value = e.value;
      this.ruleForm = e.ruleForm;
    },
    // 获取商品参数
    async getGoodAttributes(sel) {
      if (this.value.length !== 0) {
        let id = this.value[this.value.length - 1];
        const data = await getGoodAttributes(id, {
          sel,
        });
        this.attrs = data.data;
        data.data.forEach((val) => {
          // console.log(val);
          this.checkList.push({
            attr_id: val.attr_id,
            list: [],
          });
        });
      }
    }, // 获取属性
    async getGoodAttr(sel) {
      if (this.value.length !== 0) {
        let id = this.value[this.value.length - 1];
        const data = await getGoodAttributes(id, {
          sel,
        });
        this.onlyattr = data.data;
        data.data.forEach((val) => {
          this.attr_ids.push(val.attr_id);
          // console.log(val);
        });
      }
    }, // 富文本改变事件
    onEditorChange(e) {
      this.content = e;
    },
    // 添加商品按钮
    addGood() {
      // 点击清空，重新添加
      this.List = [];
      let inputs = this.$refs.text;
      // 循环静态属性input
      inputs.forEach((val, index) => {
        let obj = {
          attr_id: this.attr_ids[index],
          attr_value: val.nativeInputValue,
        };
        this.attrList.push(obj);
      });
      // 循环动态属性复选框
      this.checkList.forEach((item) => {
        // let str = val[index].list.join(",");
        this.checkattrs.push({
          attr_id: item.attr_id,
          attr_vlaue: item.list.join(","),
        });
      });
      // 合拼两个数组
      this.List = this.attrList.concat(this.checkattrs);
      this.addGoods();
    },
    async addGoods() {
      const data = await addGoods({
        goods_name: this.ruleForm.name,
        goods_cat: this.value.join(","),
        goods_price: this.ruleForm.price,
        goods_number: this.ruleForm.num,
        goods_weight: this.ruleForm.weight,
        goods_introduce: this.content,
        pics: "",
        attrs: this.List,
      });
      if (data.meta.status == 201) {
        this.$message({
          message: data.meta.msg,
          type: "success",
        });
        this.$router.push({
          name: "shopList",
        });
      }
      console.log(data);
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    // 切割字符串
    strSplit(str) {
      if (str !== "") {
        let arr = str.split(",");
        //    this.checkList = arr
        return arr;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.addgoodinfo {
  margin-top: 30px;
  .el-form {
    width: 30%;
  }
  .el-checkbox {
    border-color: #409eff;
    margin-bottom: 5px;
  }
}
</style>
