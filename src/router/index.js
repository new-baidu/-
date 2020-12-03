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
    redirect: '/home',
    children: [
      {
        path: "/home",
        name: "home",
        component: Home
      },
      // 商品列表
      {
        path: "/shoplist",
        name: "shoplist",
        component: Home
      },
      // 商品参数
      {
        path: "/shopparameter",
        name: "shopparameter",
        component: Home
      },
      // 商品分类
      {
        path: "/Category",
        name: "Category",
        component: Home
      },
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
