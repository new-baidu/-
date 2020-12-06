import request from '@/assets/js/request'
// 获取商品列表
export const getGoodsList = params => {
    return request({
        method: 'GET',
        url:'/goods',
        params
    })
}
// 删除商品
export const deleteGoods = (id) => {
    return request({
        method: 'DELETE',
        url:'/goods/' + id,
    })
}
// 添加商品
export const addGoods = params => {
    return request({
        method: 'POST',
        url:'/goods/',
        params
    })
}
// 获取商品
export const getCategories = params => {
    return request({
        method: 'GET',
        url:'/categories',
        params
    })
}
// 获取商品参数
export const getGoodAttributes = (id,params) => {
    return request({
        method: 'GET',
        url:`categories/${id}/attributes`,
        params
    })
}