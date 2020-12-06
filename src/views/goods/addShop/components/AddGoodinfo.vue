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
          <el-checkbox-group v-model="checkList">
            <el-checkbox
              :label="attr"
              :checked="checked"
              v-for="attr of strSplit(item.attr_vals)"
              :key="attr"
              :border="true"
              @change="checkedChange(attr, item.attr_id, index)"
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
          :on-remove="handleRemove"
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
        <el-button type="primary" @click="addGood()"
          >主要按钮</el-button
        ></el-tab-pane
      >
    </el-tabs>
  </div>
</template>

<script>
import GoodInfo from "./GoodInfo";
import { getCategories, getGoodAttributes } from "@/api/goods";
export default {
  name: "AddGoodinfo",
  components: {
    GoodInfo,
  },
  props: {},
  data() {
    return {
      tabActive: "goodinfo", //tab切换
      value: [],
      checked: false,
      attrs: [], // 参数
      onlyattr: [], // 属性
      checkList: [], // 复选框列表
      attrList: [], // 要添加的属性列表
      attr_ids: [], // id
      text: [],
      fileList: [
        {
          name: "food.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
        },
      ],
    };
  },
  computed: {},
  watch: {},
  created() {
    //   this.inputChange()
  },
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
      //   console.log(value);
      this.value = e;
    },
    // 获取商品参数
    async getGoodAttributes(sel) {
      if (this.value.length !== 0) {
        let id = this.value[this.value.length - 1];
        const data = await getGoodAttributes(id, {
          sel,
        });
        this.attrs = data.data;
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
    },// 复选框事件
    checkedChange(e, id, index) {
      //   this.attr_id = id;
    //   if ((this.attrs[index] = id)) {
    //   }
    },
    // 添加商品按钮
    addGood() {
      let inputs = this.$refs.text;
    //   this.attrList.push();
      inputs.forEach((val, index) => {
        let obj = {
          attr_id: this.attr_ids[index],
          attr_value: val.nativeInputValue,
        };
        this.attrList.push(obj);
      });
      console.log( this.attrList)
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
