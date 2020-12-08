<template>
  <div class="goodinfo">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="商品名称" prop="name">
        <el-input v-model="ruleForm.name" clearable></el-input>
      </el-form-item>
      <el-form-item label="商品价格" prop="price">
        <el-input v-model="ruleForm.price" clearable></el-input>
      </el-form-item>
      <el-form-item label="商品重量" prop="weight">
        <el-input v-model="ruleForm.weight" clearable></el-input>
      </el-form-item>
      <el-form-item label="商品数量" prop="num">
        <el-input v-model="ruleForm.num" clearable></el-input>
      </el-form-item>
      <el-form-item label="商品分类" prop="num">
        <el-cascader
          v-model="value"
          :options="options"
          :props="optionProps"
          @change="handleChange"
        ></el-cascader>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getCategories } from "@/api/goods";
export default {
  name: "GoodInfo",
  components: {},
  props: {},
  data() {
    return {
      ruleForm: {
        name: "", // 商品名称
        price: 0, // 商品价格
        weight: 0, // 商品重量
        num: 0, // 商品数量
      },
      rules: {
        name: [{ required: true, message: "请输入商品名称", trigger: "blur" }],
        price: [{ required: true, message: "请输入商品价格", trigger: "blur" }],
        weight: [
          { required: true, message: "请输入商品重量", trigger: "blur" },
        ],
        num: [{ required: true, message: "请输入商品重量", trigger: "blur" }],
      },
      value: [],
      options: [],
      optionProps: {
        expandTrigger: "hover",
        value: "cat_id",
        label: "cat_name",
        children: "children",
      },
    };
  },
  computed: {},
  watch: {},
  created() {
    // 获取商品分类
    this.getCategories();
  },
  mounted() {},
  methods: {
    // 获取商品分类
    async getCategories() {
      const data = await getCategories();
      this.options = data.data;
    },
    handleChange(value) {
      this.$emit('handleChange',{value: this.value,ruleForm:this.ruleForm})
    },
  },
};
</script>

<style scoped lang="scss">
</style>
