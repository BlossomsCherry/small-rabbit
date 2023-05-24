import { getCategoryHeadApi } from '@/services/modules/layout'
import { defineStore } from 'pinia'

const useLayoutStore = defineStore('layout', {
    state: () => ({
        //导航列表数据
        categoryList: []
    }),
    actions: {
        async fetchCategories() {
            const res = await getCategoryHeadApi()
            this.categoryList = await res.data.result
            return res.data
        }
    }
})

export default useLayoutStore
