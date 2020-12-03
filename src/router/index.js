import Vue from "vue";
import VueRouter from "vue-router";
import Lyout from "../views/lyout/Lyout.vue";
import Home from "../views/home/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/Login.vue")
  },
  {
    path: "/",
    component: Lyout,
    redirect: "/home",
    children: [
      // 首页
      {
        path: "/home",
        name: "home",
        component: Home
      },
      // 商品列表
      {
        path: "/shopList",
        name: "shopList",
        component: () => import("@/views/goods/shoplist/ShopList.vue")
      },
      // 添加修改商品
      {
        path: "/addShop",
        name: "addShop",
        component: Home
      },
      // 商品参数
      {
        path: "/shopParameter",
        name: "shopParameter",
        component: () => import("@/views/goods/shopparameter/ShopParameter.vue")
      },
      // 商品分类
      {
        path: "/cateGory",
        name: "cateGory",
        component: () => import("@/views/goods/category/Category.vue")
      },
      // 用户列表
      {
        path: "/userList",
        name: "userList",
        component: Home
      },
      // 角色列表
      {
        path: "/roleList",
        name: "roleList",
        component: Home
      },
      // 权限列表
      {
        path: "/permissionList",
        name: "permissionList",
        component: Home
      },
      // 订单列表
      {
        path: "/orderList",
        name: "orderList",
        component: Home
      },
      // 数据报表
      {
        path: "/dataReport",
        name: "dataReport",
        component: Home
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
