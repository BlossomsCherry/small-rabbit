import httpInstance from '../request'

export function getDetailApi(id) {
    return httpInstance({
        url: '/goods',
        params: {
            id
        }
    })
}

export function getDetailGoodsApi(id, type, limit = 3) {
    return httpInstance({
        url: '/goods/hot',
        params: {
            id,
            type,
            limit
        }
    })
}
