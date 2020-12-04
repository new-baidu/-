import request from '@/assets/js/request'
// 登录接口
export function login (data) {
    return request({
        url: '/login',
        method: 'post',
        data
    })
}
// 用户数据列表
export function usersList (params) {
    return request({
        url: '/users',
        method: 'get',
        params
    })
} 