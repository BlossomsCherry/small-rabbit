import httpInstance from '../request'

export function loginApi(account, password) {
    return httpInstance({
        url: '/login',
        method: 'post',
        data: {
            account,
            password
        }
    })
}
