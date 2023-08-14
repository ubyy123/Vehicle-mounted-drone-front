import request from '@/utils/request'

export function fetchSubmit(data) {
    return request({
        url: '/goodsbill/addgoodsbill', // 假地址 自行替换
        method: 'post',
        data
    })
}

export function fetchForm(query) {
    return request({
        url: '/goodsbill/getAllbills',
        method: 'get',
        params: query
    })
}

export function fetchFind(data) {
    return request({
        url: '/goodsbill/getDetailBillByCustom',
        method: 'post',
        data
    })
}

export function dashBoard(query) {
    return request({
        url: '/dashboard/chart',
        method: 'get',
        params: query
    })
}