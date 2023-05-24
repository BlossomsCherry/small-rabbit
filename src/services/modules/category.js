import httpInstance from '../request'

export function getCategoryApi(id) {
    return httpInstance({
        url: '/category',
        params: {
            id
        }
    })
}
