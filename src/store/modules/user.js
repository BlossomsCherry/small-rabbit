import { defineStore } from 'pinia'
import { loginApi } from '@/services/modules/user'
import { getToken } from '@/hook/storage'

const useUserStore = defineStore('user', {
    state: () => ({
        token: {},
        result: {}
    }),
    actions: {
        async fetchLogin(user, password) {
            const res = await loginApi(user, password)
            this.result = res
            getToken().then(res => {
                this.token = res
            })
        }
    }
})

export default useUserStore
