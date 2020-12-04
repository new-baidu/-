import router from "./index";
import store from "@/store";
import { Message } from "element-ui";
router.beforeEach((to, from, next) => {
  console.log(to, from);
  if (to.name !== "login") {
    // 不是去登录
    if (store.getters.token !== null && store.getters.token !== "") {
      // 有
      next();
    } else {
      // 没有
      Message({
        type: "warning",
        message: "请先登录"
      });
      next({ path: "/login" });
    }
  } else {
    next();
  }
});
