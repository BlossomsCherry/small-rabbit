import { defineStore } from 'pinia'
import { getCategoryApi } from '@/services/modules/category'

const useCategoryStore = defineStore('category', {
    state: () => ({
        categoryDate: {}
    }),
    actions: {
        async fetchCategory(id) {
            const res = await getCategoryApi(id)
            this.categoryDate = res.data.result
        }
    }
})

export default useCategoryStore
