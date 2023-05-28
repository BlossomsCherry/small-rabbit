<template>
    <div class="detail">
        <div class="container" v-if="detailList?.details">
            <!-- 面包屑导航 -->
            <detail-bread :detail-list="detailList"></detail-bread>

            <!-- 商品信息 -->
            <detail-info :detail-list="detailList"></detail-info>

            <!-- 商品详情 -->
            <detail-footer :detail-list="detailList" :id="route.params.id"> </detail-footer>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import useDetailStore from '@/store/modules/detail'
import { storeToRefs } from 'pinia'
import detailBread from './components/detail-bread.vue'
import detailInfo from './components/detail-info.vue'
import detailFooter from './components/detail-footer.vue'

const route = useRoute()

const detailStore = useDetailStore()
const { detailList } = storeToRefs(detailStore)

//网络请求
detailStore.fetchDetail(route.params.id)


</script>

<style lang="less" scoped></style>
