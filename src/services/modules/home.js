import httpInstance from '../request'

//首页商品
export function getGoodsApi() {
    return httpInstance({
        url: '/home/goods'
    })
}

//轮播图
export function getHomeBannerApi(type) {
    //默认为1，商品为2
    if (!type) type = 1
    return httpInstance({
        url: '/home/banner',
        params: {
            distributionSite: String(type)
        }
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
