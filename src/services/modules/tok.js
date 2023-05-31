import axios from 'axios'

const request = axios.create({
    baseURL: '/api',
    timeout: 5000
})

//获取用户信息
export function getUserMessage(token) {
    return request({
        url: '/gitee/info',
        params: {
            token
        }
    })
}

//设置密码
export function setPassword(id, password) {
    return request({
        url: '/gitee/password',
        method: 'post',
        data: {
            id: id,
            password: password
        }
    })
}

//修改密码
export function changePassword(id, newPw, oldPw) {
    return request({
        url: 'gitee/change',
        method: 'post',
        data: {
            id: id,
            newPw: newPw,
            oldPw: oldPw
        }
    })
}

//修改用户名和个人简介
export function changeName(token, name, bio) {
    return request({
        url: 'gitee/update',
        method: 'post',
        data: {
            access_token: token,
            name: name,
            bio: bio
        }
    })
}
