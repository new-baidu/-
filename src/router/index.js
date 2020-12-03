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
        path: "/Category",
        name: "Category",
        component: () => import('@/views/goods/category/Category.vue')
      },
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
