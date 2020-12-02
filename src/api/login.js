import request from '@/assets/js/request'
export function login (data) {
    return request({
        url: '/api/private/v1/login',
        method: 'post',
        data
    })
} 