import httpInstance from '../request'

export function getGoodsApi() {
    return httpInstance({
        url: '/home/goods'
    })
}

//新鲜好物
export function getHomeNewApi() {
    return httpInstance({
        url: '/home/new'
    })
}

//人气推荐
export function getHomeHotApi() {
    return httpInstance({
        url: '/home/hot'
    })
}
