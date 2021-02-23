import request from '@/assets/js/request'


export const getRoleList = () => {
  return request({
    method: 'GET',
    url:'/roles'
  })
}