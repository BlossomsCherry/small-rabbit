<template>
    <div class="category">
        <div class="container">
            <!-- 面包屑 -->
            <div class="bread">
                <el-breadcrumb :separator-icon="ArrowRight">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item>{{ categoryDate?.name }}</el-breadcrumb-item>
                </el-breadcrumb>
            </div>

            <!-- 轮播图 -->
            <div class="home-banner">
                <div class="block text-center">
                    <el-carousel height="500px">
                        <el-carousel-item v-for="item in bannerList" :key="item.id">
                            <img :src="item.imgUrl" alt="" />
                        </el-carousel-item>
                    </el-carousel>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { watch } from 'vue'
    import { useRoute } from 'vue-router'
    import { ArrowRight } from '@element-plus/icons-vue'
    import useCategoryStore from '@/store/modules/category'
    import useHomeStore from '@/store/modules/home'
    import { storeToRefs } from 'pinia'

    //组件中获取路由参数
    const route = useRoute()
    const categoryStore = useCategoryStore()

    //发送网络请求
    categoryStore.fetchCategory(route.params.id)

    const { categoryDate } = storeToRefs(categoryStore)
    //监听路由的变化
    watch(route, newValue => {
        //发送网络请求
        categoryStore.fetchCategory(newValue.params.id)
    })

    //轮播图
    const homeStore = useHomeStore()
    const { bannerList } = storeToRefs(homeStore)
    homeStore.fetchHomeBanner({
        distributionSite: '2'
    })
</script>

<style lang="less" scoped>
    .container {
        .bread {
            padding: 20px 0;
        }
        .home-banner {
            width: 100%;
            z-index: 9;
            .el-carousel-item {
                img {
                    width: 100%;
                    height: 500px;
                }
            }
        }
    }
</style>
