<template>
  <div class="permissionList">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>订单管理</el-breadcrumb-item>
      <el-breadcrumb-item>订单列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="box-card" shadow="never">
      <el-input
        placeholder="请输入内容"
        v-model="query"
        clearable
        class="input-with-select"
      >
        <el-button
          slot="append"
          icon="el-icon-search"
          @click="orderList"
        ></el-button>
      </el-input>

      <el-table :data="tableData" border stripe>
        <el-table-column label="序号">
          <template slot-scope="scope">
            {{ scope.$index + 1 }}
          </template>
        </el-table-column>
        <el-table-column label="订单编号" prop="order_number">
        </el-table-column>
        <el-table-column label="订单价格" prop="order_price"> </el-table-column>
        <el-table-column label="是否付款">
          <template slot-scope="scope">
            <el-tag :type="scope.row.pay_status == 0 ? 'danger' : 'success'">
              {{ scope.row.pay_status | pay }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column label="是否发货" prop="is_send"> </el-table-column>
        <el-table-column label="下单时间"
          ><template slot-scope="scope">{{
            scope.row.create_time | time
          }}</template>
        </el-table-column>

        <!-- <el-table-column label="操作">
          <template>
            <el-button><i class="iconfont iconbianji1"></i>编辑</el-button>
            <el-button
              ><i class="iconfont iconsousuo-tianchong-copy"></i>物流</el-button
            >
          </template>
        </el-table-column> -->
      </el-table>
      <el-pagination
        background
        layout="total,sizes,prev, pager, next,jumper"
        :total="total"
        :current-page.sync="page"
        :page-size.sync="pageSize"
        @current-change="orderList"
        @size-change="orderList"
      >
      </el-pagination>
    </el-card>
    <!-- 编辑弹窗
    <el-dialog title="修改地址" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="省市区/县" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="详细地址" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
  </div>
</el-dialog> -->
  </div>
</template>
<script>
import { orderList } from "@/api/orderList.js";
import moment from "moment";
export default {
  name: "PermissionList",
  components: {},
  data() {
    return {
      tableData: [],
      page: 1,
      pageSize: 10,
      query: "",
      total: null
    };
  },
  created() {
    this.orderList();
  },
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
  methods: {
    // 订单列表
    orderList() {
      let params = {
        pagenum: this.page,
        pagesize: this.pageSize,
        query: this.query
      };
      orderList(params)
        .then(res => {
          console.log(res);
          this.total = res.data.total;
          this.tableData = res.data.goods;
        })
        .catch(err => {
          console.log(err);
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
</style>
