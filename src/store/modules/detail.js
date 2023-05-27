import { defineStore } from 'pinia'
import { getDetailApi, getDetailGoodsApi } from '@/services/modules/detail'

const useDetailStore = defineStore('detail', {
    state: () => ({
        detailList: {},

        // 24小时热榜、专题推荐
        goodsDate: []
    }),

    actions: {
        async fetchDetail(id) {
            const res = await getDetailApi(id)
            this.detailList = res.data?.result
            return res.data
        },

        async fetchGoodsData() {
            const res = await getDetailGoodsApi()
            this.goodsDate = res.data?.result
            return res
        }
    }
})

export default useDetailStore
