import request from '@/utils/request1'

export function mapBaidupost(data) {
    return request({
        url: '/perec/vrp', // 假地址 自行替换
        method: 'post',
        params: data
    })
}

export function mapBaiduget(data) {
    return request({
        url: '/perec/vrp', // 假地址 自行替换
        method: 'get',
        params: data
    })
}
export function fetchForm(query) {
    return request({
        url: '/vue-element-admin/article/form',
        method: 'get',
        params: query
    })
}
export function fetchlat(data) {
    return request({
        url: '/perce/vrp', // 假地址 自行替换
        method: 'post',
        data
    })
}

export function fetotherchlat(data) {
    return request({
        url: '/perce/vehicle', // 假地址 自行替换
        method: 'post',
        data
    })
}
