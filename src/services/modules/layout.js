import httpInstance from '../request'

export function getCategoryHeadApi() {
    return httpInstance({
        url: '/home/category/head'
    })
}
