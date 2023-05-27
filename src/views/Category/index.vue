<template>
    <div class="category">
        <div class="container">
            <!-- 面包屑 -->
            <div class="bread">
                <el-breadcrumb :separator-icon="ArrowRight">
                    <el-breadcrumb-item :to="{ path: '/' }">首页 </el-breadcrumb-item>
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

            <!-- 商品展示 -->
            <div class="sub-list">
                <div class="head">
                    <h1>全部分类</h1>
                </div>
                <div class="list">
                    <ul>
                        <template v-for="item in listData?.children" :key="item.id">
                            <li>
                                <router-link :to="`/category/sub/${item.id}`">
                                    <img :src="item.picture" alt="" />
                                    <div class="name">{{ item.name }}</div>
                                </router-link>
                            </li>
                        </template>
                    </ul>
                </div>
            </div>
            <div class="list-item">
                <template v-for="item in listData?.children">
                    <bgList class="bg" :head-title="item.name" h1-text-align="center" h1-color="#666" h1-size="28px"
                        width="220px" height="300px" padding="20px 30px" ul-justify-content="space-around" name-size="16px"
                        desc-size="14px" :list-data="item.goods"></bgList>
                </template>
            </div>
        </div>
    </div>
</template>

<script setup>
import { watch, computed } from 'vue'
import bgList from '@/components/bg-list.vue'
import { useRoute } from 'vue-router'
import { ArrowRight } from '@element-plus/icons-vue'
import useCategoryStore from '@/store/modules/category'
import useHomeStore from '@/store/modules/home'
import useLayoutStore from '@/store/modules/layout'
import { storeToRefs } from 'pinia'


//组件中获取路由参数
const route = useRoute()
const categoryStore = useCategoryStore()

//发送网络请求
categoryStore.fetchCategory(route.params.id)

const { categoryDate } = storeToRefs(categoryStore)
//解决路由缓存问题
//监听路由的变化
watch(route, newValue => {
    //重新发送网络请求
    console.log(newValue.path.split('/'))
    if (newValue.path.split('/').length === 3) {
        categoryStore.fetchCategory(newValue.params.id)
    }
})

//轮播图
const homeStore = useHomeStore()
const { bannerList } = storeToRefs(homeStore)
homeStore.fetchHomeBanner(2)

//列表数据
const listData = computed(() => {
    return categoryDate.value
})

const layoutStore = useLayoutStore
const { currentIndex } = storeToRefs(layoutStore)
</script>

<style lang="less" scoped>
.container {
    .bread {
        padding: 20px 0;

        &:deep(.el-breadcrumb__inner.is-link) {
            font-weight: 400;
        }
    }

    .home-banner {
        width: 100%;
        margin-bottom: 20px;
        z-index: 9;

        .el-carousel-item {
            img {
                width: 100%;
                height: 500px;
            }
        }
    }

    .sub-list {
        background-color: #fff;

        .head {
            margin: 0;
            padding: 20px 0;

            h1 {
                font-weight: 400;
                color: #666;
                text-align: center;
            }
        }

        .list {
            padding: 0 32px;

            ul {
                display: flex;
                padding-bottom: 20px;
                justify-content: space-between;
                flex-wrap: wrap;
                align-items: center;

                li {
                    width: 168px;
                    text-align: center;

                    &:hover .name {
                        color: var(--primary-color);
                    }

                    a {
                        img {
                            width: 100px;
                            height: 100px;
                        }

                        .name {
                            padding: 10px 0;
                            font-size: 16px;
                            color: #333;

                        }

                    }
                }
            }
        }

    }

    .list-item {
        margin: 20px 0;

        .bg {
            padding: 0 30px 30px 30px;
            margin-bottom: 20px;
            background-color: #fff;
        }
    }
}
</style>
