import { defineStore } from 'pinia'
import { getCartApi } from '@/services/modules/cart'

const useCartStore = defineStore('cart', {
    state: () => ({
        token: {},
        cartList: []
    }),
    actions: {
        async fetchCartData() {
            const res = await getCartApi()
            this.cartList = res
        }
    }
})

export default useCartStore
