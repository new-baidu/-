import request from '@/assets/js/request'
// 获取商品列表
export const getGoodsList = params => {
  return request({
    method: 'GET',
    url: '/goods',
    params
  })
}
// 删除商品
export const deleteGoods = (id) => {
  return request({
    method: 'DELETE',
    url: '/goods/' + id,
  })
}
// 添加商品
export const addGoods = data => {
  return request({
    method: 'POST',
    url: '/goods',
    data
  })
}
// 获取商品
export const getCategories = params => {
  return request({
    method: 'GET',
    url: '/categories',
    params
  })
}
// 获取商品参数
export const getGoodAttributes = (id, params) => {
  return request({
    method: 'GET',
    url: `/categories/${id}/attributes`,
    params
  })
}
// 删除商品参数
export const Categories = (id, attrId, data) => {
  return request({
    method: 'PUT',
    url: `/categories/${id}/attributes/${attrId}`,
    data
  })
}
// 编辑商品参数
export const PutCategories = (id, attrId, data) => {
  return request({
    method: 'PUT',
    url: `/categories/${id}/attributes/${attrId}`,
    data
  })
}
// 删除商品参数
export const DeleteCategories = (id, attrId, data) => {
  return request({
    method: 'DELETE',
    url: `/categories/${id}/attributes/${attrId}`,
    data
  })
}
// 添加商品参数
export const addCategories = (id, data) => {
  return request({
    method: 'POST',
    url: `/categories/${id}/attributes`,
    data
  })
}
// 获取商品分类
export const getGoodcategories = (params) => {
  return request({
    method: 'GET',
    url: `/categories`,
    params
  })
}
// 删除商品分类
export const deleteGoodcategories = (id) => {
  return request({
    method: 'DELETE',
    url: `/categories/${id}`
  })
}
// 编辑商品分类
export const uploadGoodcategories = (id, data) => {
  return request({
    method: 'PUT',
    url: `/categories/${id}`,
    data
  })
}
// 天机商品分类
export const addGoodcategories = data => {
  return request({
    method: 'POST',
    url: `/categories`,
    data
  })
}
