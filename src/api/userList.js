import request from '@/assets/js/request'

// 获取用户列表
export const getUserList = params => {
  return request({
    method: 'GET',
    url: '/users',
    params
  })
}