import request from '@/assets/js/request.js'

// 权限列表
export const rolesList = () => {
    return request({
        method: 'get',
        url: '/roles'
    })
}
// 添加角色
export const addRoles = (data) => {
    return request({
        method: 'post',
        url: '/roles',
        data
    })
}
// 修改角色
export const editRoles = (id,data) => {
    return request({
        method: 'put',
        url: `/roles/${id}`,
        data
    })
}
// 修改角色
export const delRoles = (id) => {
    return request({
        method: 'delete',
        url: `/roles/${id}`
    })
}
// 权限列表树
export const tree = (id) => {
    return request({
        method: 'get',
        url: `/rights/tree`
    })
}