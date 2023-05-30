import { defineStore } from 'pinia'
import { getToken } from '@/services/modules/tok'

const useNewUserStore = defineStore('newUser', {
    state: () => ({
        userData: {}
    }),
    actions: {
        async fetchToken(token) {
            const res = await getToken(token)
            this.userData = res
            return res.data
        }
    }
})

export default useNewUserStore
