<template>
  <div class="shoplist">
    <!-- 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>商品列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片 -->
    <el-card class="box-card" shadow="never">
      <!-- 搜索 -->
      <div class="search-box">
        <div class="search">
          <el-input
            v-model="input"
            placeholder="请输入内容"
            :clearable="true"
          ></el-input>
          <el-button
            class="search-btn"
            icon="el-icon-search"
            @click="onSearch"
          ></el-button>
        </div>
        <el-button class="addBtn" type="primary" @click="addGood">添加商品</el-button>
      </div>
      <!-- 商品列表 -->
      <ch-goodslist :goodsList="goods" />
      <!-- 分页 -->
      <el-pagination
        background
        :current-page="page"
        layout="sizes, prev, pager, next,total"
        :page-sizes="pagesizes"
        :total="total"
        @size-change="sizeChange"
        @current-change="currentChange"
      >
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
import GoodsList from "./components/GoodsList";
import { getGoodsList, addGoods } from "@/api/goods";
export default {
  name: "ShopList",
  components: {
    "ch-goodslist": GoodsList,
  },
  props: {},
  data() {
    return {
      token: "", // 用户token
      input: "", //搜索内容
      pagesizes: [5, 10, 15, 20], // 每页显示条数
      total: 1000, // 总条数
      page: 1, // 页数
      size: 10, // 默认显示条数
      goods: [], // 商品列表
    };
  },
  computed: {},
  watch: {},
  created() {
    this.token = localStorage.getItem("token");
    // 获取商品列表
    this.getGoodsList();
  },
  mounted() {},
  methods: {
    // 获取商品列表
    async getGoodsList() {
      const data = await getGoodsList({
        query: this.input, // 查询参数
        pagenum: this.page, //当前页码
        pagesize: this.size, // 每页显示条数
        token: this.token,
      });
      if (data.meta.status == 200) {
        // 商品列表
        this.goods = data.data.goods;
        // 总条数
        this.total = data.data.total;
        // 成功提示
        this.$message({
          message: data.meta.msg,
          type: "success",
        });
      }
      // console.log(data);
    },
    // 搜索
    onSearch() {
      this.getGoodsList();
    },
    // 每页显示条数
    sizeChange(size) {
      this.size = size;
      this.getGoodsList();
      // console.log(size);
    },
    //  改变分页触发,获取数据
    currentChange(page) {
      this.page = page;
      this.getGoodsList();
    },
    // 添加商品
    async addGood () {
     this.$router.push({
       name: 'addShop'
     })
    }
  },
};
</script>

<style scoped lang="scss">
.shoplist {
  .box-card {
    margin-top: 10px;
  }
  .search-box {
    display: flex;
    .search {
      padding: 0 15px;
      width: 33.33%;
      display: flex;
      .search-btn {
        // position: relative;
        padding: 0 20px;
        background-color: #f5f7fa;
        color: #909399;
      }
    }
    .addBtn {
      padding: 0 20px;
    }
  }
}
</style>
