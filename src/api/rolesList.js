import request from '@/assets/js/request.js'

// 权限列表
export const rolesList = () => {
    return request({
        method: 'get',
        url: '/roles'
    })
}
// 添加角色
export const add = (data) => {
    return request({
        method: 'post',
        url: '/roles',
        data
    })
}
// 修改角色
export const edit = (id,data) => {
    return request({
        method: 'put',
        url: `/roles/${id}`,
        data
    })
}
// 删除角色
export const del = (id) => {
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
// 删除角色指定权限
export const delRights = (roleId,rightId) => {
    return request({
        method: 'delete',
        url: `roles/${roleId}/rights/${rightId}`
    })
}
// 删除角色指定权限
export const setRights = (roleId,data) => {
    return request({
        method: 'post',
        url: `roles/${roleId}/rights`,
        data
    })
}