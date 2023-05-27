import { defineStore } from 'pinia'
import {
    getGoodsApi,
    getHomeNewApi,
    getHomeHotApi,
    getHomeBannerApi
} from '@/services/modules/home'

const useHomeStore = defineStore('home', {
    state: () => ({
        //轮播图数据
        bannerList: [],

        goodsList: [],
        newList: [],
        hotList: []
    }),
    actions: {
        //轮播图
        async fetchHomeBanner(type) {
            const res = await getHomeBannerApi(type)
            this.bannerList = res.data.result
            return res
        },

        async fetchHomeGoods() {
            const res = await getGoodsApi()
            this.goodsList = res.data.result
            return res
        },

        //新鲜好物
        async fetchHomeNew() {
            const res = await getHomeNewApi()
            this.newList = res.data?.result
            return res
        },

        //人气推荐
        async fetchHomeHot() {
            const res = await getHomeHotApi()
            this.hotList = res.data?.result
        }
    }
})

export default useHomeStore
