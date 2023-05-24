import httpInstance from '../request'

export function getCategoryApi() {
    return httpInstance({
        url: '/home/category/head'
    })
}

export function getHomeBannerApi() {
    return httpInstance({
        url: '/home/banner'
    })
}
