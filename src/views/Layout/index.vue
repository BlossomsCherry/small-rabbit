<template>
    <div class="layout">
        <layout-fixed :categoryList="categoryList"></layout-fixed>

        <!-- 导航栏 -->
        <!-- <layout-nav></layout-nav> -->
        <layout-navv></layout-navv>

        <!-- header区域 -->
        <layoutHeader :categoryList="categoryList"></layoutHeader>

        <!-- 二级路由出口 -->
        <router-view></router-view>

        <!-- 底部区域 -->
        <layoutFooter></layoutFooter>
    </div>
</template>

<script setup>
import layoutNav from './components/layout-nav.vue'
import layoutNavv from './components/layout-navv.vue'
import layoutHeader from './components/layout-header.vue'
import layoutFooter from './components/layout-footer.vue'
import layoutFixed from './components/layout-fixed.vue'
import useLayoutStore from '@/store/modules/layout'
import { storeToRefs } from 'pinia'

//发送网络请求
const layoutStore = useLayoutStore()

const { categoryList } = storeToRefs(layoutStore)
layoutStore.fetchCategories()

</script>

<style lang="less" scoped>
.layout {
    overflow-x: hidden;
}
</style>
