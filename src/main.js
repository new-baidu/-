import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/router/before.js'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "@/assets/font/iconfont.js";
import "@/assets/font/iconfont.css";
import '@/assets/css/init.css'
import '@/assets/css/common.scss'
import '@/assets/css/global.scss'
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
