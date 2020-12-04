<template>
  <div class="Aside">
    <el-menu
      class="el-menu-vertical-demo"
      router
      background-color="#2E3446"
      text-color="#fff"
      active-text-color="#178BF7"
      :default-active="active"
      unique-opened
    >
      <el-submenu v-for="(item, index) in list" :key="index" :index="item.id">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title" class="title">{{ item.title }}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item
            :index="val.url"
            v-for="(val, i) in item.children"
            :key="i"
            >{{ val.title }}</el-menu-item
          >
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: "Aside",
  components: {},
  data() {
    return {
      active: "",
      isCollapse: true,
      list: [
        {
          id: "1",
          title: "用户管理",
          children: [
            {
              title: "用户列表",
              url: "/userList"
            }
            // {
            //   title: "首页",
            //   url: "/home"
            // }
          ]
        },
        {
          id: "2",
          title: "权限管理",
          children: [
            {
              title: "角色列表",
              url: "/roleList"
            },
            {
              title: "权限列表",
              url: "/permissionList"
            }
          ]
        },
        {
          id: "3",
          title: "商品管理",
          children: [
            {
              title: "商品列表",
              url: "/shopList"
            },
            {
              title: "分类参数",
              url: "/shopParameter"
            },
            {
              title: "商品分类",
              url: "/cateGory"
            }
          ]
        },
        {
          id: "4",
          title: "订单管理",
          children: [
            {
              title: "订单列表",
              url: "/orderList"
            }
          ]
        },
        {
          id: "5",
          title: "数据统计",
          children: [
            {
              title: "数据报表",
              url: "/dataReport"
            }
          ]
        }
      ]
    };
  },
  watch:{
      $route :{
          handler: function(newVal, oldVal){
            // console.log(newVal, oldVal)
            if(newVal.path.indexOf('addShop') !== -1){
                // 有
                this.active = '/shopList'
            }
          },
          immediate: true
      },
  },
  created() {},
  computed: {},
  methods: {},
  mounted() {},
  activated() {} // 如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="scss" scoped>
.Aside {
  width: 100%;
  height: 100%;
  background-color: $admin-color;
  .el-menu-vertical-demo {
    height: 100%;
  }
  /deep/.el-menu-item-group__title {
    display: none;
  }
}
</style>
