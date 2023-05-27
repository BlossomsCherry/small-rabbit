import { defineStore } from 'pinia'
import {
    getCategoryApi,
    getCategoryFilterApi,
    getSubCategoryApi
} from '@/services/modules/category'

const useCategoryStore = defineStore('category', {
    state: () => ({
        categoryDate: {},

        filterDate: {},
        goodList: []
    }),
    actions: {
        async fetchCategory(id) {
            const res = await getCategoryApi(id)
            this.categoryDate = res.data?.result
        },

        async fetchFilter(id) {
            const res = await getCategoryFilterApi(id)
            this.filterDate = res.data?.result
        },

        async fetchGoodsList(data) {
            const res = await getSubCategoryApi(data)
            if (this.goodList.length === 0) {
                this.goodList = res.data?.result
            } else {
                this.goodList.items.push(...res.data.result.items)
            }
        }
    }
})

export default useCategoryStore
