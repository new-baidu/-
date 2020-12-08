import request from '@/assets/js/request'

// 获取用户列表
export const getUserList = params => {
  return request({
    method: 'GET',
    url: '/users',
    params
  })
}

// 修改用户状态
export const putUserList = (uId,type) => {
  return request({
    method:'PUT',
    url:`users/${uId}/state/${type}`,
    params: {
      uId,
      type
    }
  })
}

// 删除用户
export const deleteUserList = params => {
  return request({
    method: 'DELETE',
    url: `users/'${id}'`,
    params
  })
}