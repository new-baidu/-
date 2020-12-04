import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/js/setrem.js'
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
import moment from 'moment';
Vue.prototype.moment = moment;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
