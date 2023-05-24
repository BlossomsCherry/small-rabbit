<template>
    <div class="box">
        <div class="container">
            <home-category :categoryList="categoryList" :goodsList="goodsList"></home-category>

            <!-- 轮播图 -->
            <home-banner :bannerList="bannerList"></home-banner>

            <!-- 新鲜好物 -->
            <home-panel :newList="newList"></home-panel>

            <!-- 人气推荐 -->
            <home-hot :hotList="hotList"></home-hot>

            <home-goods :goodsList="goodsList"></home-goods>
        </div>
    </div>
</template>
<script>
    export default { name: 'home' }
</script>
<script setup>
    import homeCategory from './components/home-category.vue'
    import homeBanner from './components/home-banner.vue'
    import homePanel from './components/home-panel.vue'
    import homeHot from './components/home-hot.vue'
    import homeGoods from './components/home-goods.vue'
    import useLayoutStore from '@/store/modules/layout'
    import useHomeStore from '@/store/modules/home'
    import { storeToRefs } from 'pinia'

    //发送网络请求
    //layout数据
    const layoutStore = useLayoutStore()
    const { categoryList } = storeToRefs(layoutStore)
    // layoutStore.fetchCategories()

    //home数据
    const homeStore = useHomeStore()
    const { bannerList, goodsList, newList, hotList } = storeToRefs(homeStore)
    //轮播图
    homeStore.fetchHomeBanner()

    //新鲜好物
    homeStore.fetchHomeNew()

    //人气推荐
    homeStore.fetchHomeHot()

    homeStore.fetchHomeGoods()
</script>

<style lang="less" scoped>
    .box {
        background-color: #fff;
        .container {
            position: relative;
        }
    }
</style>
