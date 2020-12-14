<template>
  <div class="shopparameter">
    <!-- 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">
        首页
      </el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>分类参数</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片 -->
    <el-card
      class="box-card"
      shadow="never"
    >
      <!-- 警告 -->
      <el-alert
        title="注意：只允许为第三级分类设置相关参数！"
        show-icon
        type="warning"
      />
      <!-- 层级选择器 -->
      <div class="block">
        <span class="demonstration">选择商品分类：</span>
        <el-cascader
          v-model="value"
          :options="options"
          :props="optionProps"
          @change="handleChange"
        />
      </div>
      <!-- tab切换 -->
      <el-tabs
        v-model="activeName"
        @tab-click="handleClick"
      >
        <el-tab-pane
          label="动态参数"
          name="dynamic"
        >
          <el-button
            type="primary"
            :disabled="disabled"
            @click="addParameter"
          >
            添加参数
          </el-button>
          <shop-dynamic
            :attr-list="attrs"
            :value="value"
            :title="title"
            @upload="upload"
          />
        </el-tab-pane>
        <el-tab-pane
          label="静态属性"
          name="static"
        >
          <el-button
            type="primary"
            :disabled="disabled"
            @click="addParameter"
          >
            添加属性
          </el-button>
          <shop-static
            :value="value"
            :attr-list="attrs"
            :title="title"
            @upload="upload"
          />
        </el-tab-pane>
      </el-tabs>
      <!-- 弹出框 -->
      <shop-dialog
        :visible.sync="visible"
        :title="['添加', title]"
        :value="value"
        @dialogFormVisible="visible = false"
        @close="visible = false"
        @upload="upload"
      />
    </el-card>
  </div>
</template>

<script>
import { getCategories, getGoodAttributes } from "@/api/goods";
import ParameterTable from "./components/ParameterTable";
import ShopDialog from "./components/ShopDialog";
// import Static from "./components/Static";
export default {
  name: "ShopParameter",
  components: {
    "shop-dynamic": ParameterTable,
    "shop-static": ParameterTable,
    "shop-dialog": ShopDialog,
  },
  props: {},
  data() {
    return {
      disabled: true,
      options: [], // 商品分类列表
      value: [], // 选择的商品分类
      optionProps: {
        expandTrigger: "hover",
        value: "cat_id",
        label: "cat_name",
        children: "children",
      }, // props配置
      activeName: "dynamic", // tab选中高亮
      attrList: [], // 获取的参数列表和属性列表
      attrs: [], // 处理后的数据
      visible: false, // 控制弹出框
      title: "",
    };
  },
  computed: {},
  watch: {},
  created() {
    // 获取商品分类
    this.getCategories();
    // 获取参数列表
    // this.getGoodAttributes("many");
  },
  mounted() {},
  methods: {
    // 获取商品分类
    async getCategories() {
      const data = await getCategories();
      this.options = data.data;
      // console.log(data);
    },
    //  获取参数列表
    async getGoodAttributes(sel) {
      const id = this.value[this.value.length - 1];
      const data = await getGoodAttributes(id, {
        sel,
      });
      this.attrList = data.data;
      this.dispose();
    },
    // 选择分类发送请求
    handleChange() {
      this.disabled = false;
      if (this.activeName == "dynamic") {
        this.title = "动态参数";
        this.getGoodAttributes("many");
      } else if (this.activeName == "static") {
        this.title = "静态属性";
        this.getGoodAttributes("only");
      }
    },
    // 切换tab 发送不同的请求
    handleClick(tab) {
      if (tab.index == 0 && this.value.length !== 0) {
        this.title = "动态参数";
        this.getGoodAttributes("many");
      } else if (tab.index == 1 && this.value.length !== 0) {
        this.title = "静态属性";
        this.getGoodAttributes("only");
      }
    },
    upload() {
      if (this.activeName == "dynamic") {
        this.getGoodAttributes("many");
      } else if (this.activeName == "static") {
        this.getGoodAttributes("only");
      }
      console.log(789);
    },
    // 处理数据
    dispose() {
      this.attrs = [];
      this.attrList.forEach((val) => {
        this.attrs.push({
          attr_id: val.attr_id,
          attr_name: val.attr_name,
          attr_sel: val.attr_sel,
          attr_vals: val.attr_vals !== "" ? val.attr_vals.split(",") : [],
          attr_write: val.attr_write,
          cat_id: val.cat_id,
          delete_time: val.delete_time,
        });
      });
    }, // 添加参数
    addParameter() {
      this.visible = true;
    },
  },
};
</script>

<style scoped lang="scss">
.shopparameter {
  .block {
    margin: 20px 0;
  }
}
</style>
