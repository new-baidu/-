import Vue from "vue";
import VueRouter from "vue-router";
import Lyout from "../views/lyout/Lyout.vue";
import Home from "../views/home/Home.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/login",
    name: "login",
    component: () => import("@/views/login/Login.vue")
  },
  {
    path: "/",
    component: Lyout,
    redirect: "/home",
    children: [{
        path: "/home",
        name: "home",
        component: Home
      },
      // 商品列表
      {
        path: "/shoplist",
        name: "shoplist",
        component: () => import('@/views/goods/shoplist/ShopList.vue')
      },
      // 商品参数
      {
        path: "/shopparameter",
        name: "shopparameter",
        component:  () => import('@/views/goods/shopparameter/ShopParameter.vue')
      },
      // 商品分类
      {
        path: "/Category",
        name: "Category",
<<<<<<< HEAD
        component: () => import('@/views/goods/category/Category.vue')
      },
=======
        component: Home
      }
>>>>>>> 13932e06a6a6f85c223742de3f2cb2f32757e452
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
