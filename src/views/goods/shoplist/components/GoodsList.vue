<template>
  <div class="goodslist">
    <!-- 表格 -->
    <el-table :data="goodsList" :border="true" style="width: 100%">
      <el-table-column prop="index" label="#" width="50">
        <template slot-scope="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column prop="goods_name" label="商品名称"> </el-table-column>
      <el-table-column
        prop="goods_price"
        label="商品价格(元)"
        width="120"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="goods_weight"
        label="商品重量"
        width="80"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="upd_time"
        label="创建时间"
        width="200"
        align="center"
      >
      </el-table-column>
      <el-table-column prop="operation" label="操作" width="160" align="center">
        <template slot-scope="scope">
          <el-button class="btn" type="primary" icon="el-icon-edit" ></el-button>
          <el-button
            class="btn"
            type="danger"
            icon="el-icon-delete"
            @click="deleteGoods(scope.row.goods_id)"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { deleteGoods } from "@/api/goods";
export default {
  name: "GoodsList",
  components: {},
  props: {
    goodsList: {
      type: [String, Array, Object],
    },
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    // 删除商品
    deleteGoods(id) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(async () => {
          const data = await deleteGoods(id);
        //   console.log(data);
          if (data.meta.status == 200) {
            this.$message({
              type: "success",
              message: data.meta.msg,
            });
            // 调用父组件方法
             this.$parent.$parent.getGoodsList();
          }
        }).catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    }
  },
};
</script>

<style scoped lang="scss">
.goodslist {
  margin: 15px 0;
  padding: 0 15px;
  .btn {
    width: 55px;
  }
}
</style>
