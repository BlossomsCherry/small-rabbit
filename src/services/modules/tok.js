import axios from 'axios'

const request = axios.create({
    baseURL: '/api',
    timeout: 5000
})

export function getToken(token) {
    return request({
        url: '/gitee/info',
        params: {
            token
        }
    })
}

export function updatePassword(id, password) {
    return request({
        url: '/gitee/password',
        method: 'post',
        data: {
            id: id,
            password: password
        }
    })
}
