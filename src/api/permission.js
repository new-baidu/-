import request from '@/assets/js/request'

// 所有权限列表
export const permissionList = () => {
  return request({
    method: 'get',
    url: '/rights/list'
  })
}