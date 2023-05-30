import httpInstance from '../request'

export function PostCartApi(Authorization) {
    return httpInstance({
        url: '/member/cart',
        method: 'post',
        params: {
            Authorization
        }
    })
}

//获取购物车列表
export function getCartApi(Authorization) {
    return httpInstance({
        url: '/member/cart',
        params: {
            Authorization
        }
    })
}

//删除购物车商品
export function getCartApi(Authorization) {
    return httpInstance({
        url: '/member/cart',
        method: 'delete',
        params: {
            Authorization
        }
    })
}
