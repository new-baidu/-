import router from "@/router/index";
import { login } from "@/api/login";
const state = {
  token: localStorage.getItem("token") || null
};
const mutations = {
  setToken(state, data) {
    state.token = data;
  },
  removeToken(state) {
    router.push("/login");
    localStorage.removeItem("token");
    state.token = null;
  }
};
const actions = {
  login({commit}, data) {
    return new Promise(function(resolve, reject) {
        login(data).then((res)=> {
            commit('setToken',  res.data.token)
            localStorage.setItem('token',res.data.token)
            resolve('成功')
        }).catch((err)=> {
            reject('失败')
        })
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
