import axios from "axios";
import store from "@/store";
import { Message } from "element-ui";
const request = axios.create({
  baseURL: ""
});
request.interceptors.response.use(
  res => {
    console.log(res);
    if (res.data.meta.status == 401) {
      // 登录已过期
      // 跳转回login
      // 清楚token
      // 存你当前的路径
      store.commit("user/removeToken")
      return Promise.reject(res.data.meta.messsage);
    } else if (res.data.meta.status == 400) {
      console.log(400);
      Message({
        type: "error",
        message: res.data.meta.msg,
        duration: 3000
      });
      return Promise.reject(res.data)
    } else if(res.data.meta.status == 404) {
      Message({
        type: "error",
        message: '请求的地址不存在或者包含不支持的参数',
        duration: 3000
      });
      return Promise.reject(res.data)
    } else {
      return res.data;
    }
  },
  error => {
    console.log(error,'错误');
    Message({
      type: "error",
      message: error || error.msg,
      duration: 3000
    });
    return Promise.reject(error);
  }
);

// 添加请求拦截器
request.interceptors.request.use(
  function(config) {
    if (store.getters.token) {
      // 不是登录接口
      // 携带token
      config.headers.Authorization = store.getters.token;
    }
    return config;
  },
  function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);
export default request;
