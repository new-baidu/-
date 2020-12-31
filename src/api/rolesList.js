import request from '@/assets/js/request.js'

// 权限列表
export const  rolesList = () => {
    return request({
        method: 'get',
        url: '/roles'
    })
}