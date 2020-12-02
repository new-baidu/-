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
    children: [
      {
        path: "/home",
        name: "home",
        component: Home
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
