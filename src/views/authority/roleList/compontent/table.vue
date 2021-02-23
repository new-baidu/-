<template>
  <div class="table">
    <el-table :data="list" border style="width: 100%">
      <el-table-column  width="64">
        <template slot-scope="scope">
          <i class="el-icon-arrow-down" style="padding: 10px;"></i>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="#" width="64">
        <template slot-scope="scope" >
          {{ scope.$index + 1}}
        </template>
      </el-table-column>
      <el-table-column prop="roleName" label="角色名称" width="350">
      </el-table-column>
      <el-table-column prop="roleDesc" label="角色描述" width="350">
      </el-table-column>
      <el-table-column prop="address" label="操作" width="350">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import
  {
    getRoleList
  } from '@/api/roleList'
  export default {
    data() {
      return {
        list:[] // 查询数据
      }
    },
    created() {
      this.roleList()
    },
    methods: {
      roleList(){
        getRoleList().then(res => {
          console.log(res)
          this.list = res.data
          console.log(this.list)
        })
      }
    },
  }
</script>

<style lang="less" scoped>
</style>
