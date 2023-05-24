import { getCategoryApi } from '@/services/modules/layout'
import { defineStore } from 'pinia'

const useLayoutStore = defineStore('layout', {
    state: () => ({
        //导航列表数据
        categoryList: []
    }),
    actions: {
        async fetchCategories() {
            const res = await getCategoryApi()
            this.categoryList = await res.data.result
            return res.data
        }
    }
})

export default useLayoutStore
