import axios from 'axios'
const request = axios.create({
    baseURL: ''
})
request.interceptors.response.use(
    res => {
        //     console.log(res)
        //   if (res) {
        //       if(res.status == 200){
        //           return res.data
        //       } else {}
        //     // return res;
        //   }
        return res.data
    },
    err => {
        return Promise.reject(error);
    }
);


// 添加请求拦截器
request.interceptors.request.use(function (config) {
    let token = localStorage.getItem('token')
    // 在发送请求之前做些什么
    if(console.url !== "/api/private/v1/login") {
        // 不是登录接口
        if(token) {
        // 携带token
        config.headers.Authorization = localStorage.getItem('token')
        } else {
            // 未登录
            // 登陆过期重新登录
        }
    }
    console.log(config)
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});
export default request