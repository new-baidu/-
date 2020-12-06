<template>
  <div class="userlist">
    <!-- 表格 -->
    <el-table :data="userlist" border style="width: 100%">
      <el-table-column prop="index" label="#" width="50">
        <template slot-scope="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column prop="username" label="姓名" width="170">
      </el-table-column>
      <el-table-column prop="email" label="邮箱" width="170">
      </el-table-column>
      <el-table-column prop="mobile" label="电话" width="170">
      </el-table-column>
      <el-table-column prop="role_name" label="角色" width="170">
      </el-table-column>
      <el-table-column prop="address" label="状态" width="170">

        <!-- 状态开启关闭 -->
        <el-switch v-model="value">
        </el-switch>

      </el-table-column>
      <el-table-column prop="address" label="操作">

        <!-- 编辑、删除、设置按钮 -->
        <el-row class="state">

          <!-- 添加 -->
          <el-button class="states" type="primary" icon="el-icon-search" size="mini"></el-button>

          <!-- 删除 -->
          <el-button class="states" type="danger" icon="el-icon-delete"  size="mini"></el-button>

          <!-- 设置 -->
          <el-button class="states" type="warning" icon="el-icon-s-tools" size="mini"></el-button>

        </el-row>

      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: 'Userlist',
    props: {
      userlist: {
        type: [String, Array, Object],
      }
    },
    data() {
      return {
        value: true,
      }
    },
    methods: {

    }

  }

</script>

<style lang="scss" scoped>
  .state{
    display: flex;
    justify-content: left;
    .states{
      width: 20%;
      color: #fff;
    }
  }


</style>