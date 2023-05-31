import { defineStore } from 'pinia'
import { getUserMessage, setPassword } from '@/services/modules/tok'

const useNewUserStore = defineStore('newUser', {
    state: () => ({
        token: '7207d514a80bb7daa413722a4c1d5c5b',
        userData: {},
        show: true,

        signData: ''
    }),
    actions: {
        async fetchToken(token) {
            const res = await getUserMessage(token)
            this.userData = res
            return res.data
        },

        async fetchPassword(id, password) {
            const res = await setPassword(id, password)
            this.signData = res.data
            return res
        }
    }
})

export default useNewUserStore
