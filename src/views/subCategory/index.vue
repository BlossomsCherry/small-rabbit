<template>
    <div class="sub-category">
        <div class="container">
            <!-- 面包屑 -->
            <div class="bread">
                <el-breadcrumb :separator-icon="ArrowRight">
                    <el-breadcrumb-item :to="{ path: '/' }">首页 </el-breadcrumb-item>
                    <el-breadcrumb-item :to="{ path: `/category/${filterDate.parentId}` }">
                        {{ filterDate.parentName }}</el-breadcrumb-item>
                    <el-breadcrumb-item>{{ filterDate.name }}</el-breadcrumb-item>
                </el-breadcrumb>
            </div>

            <div class="sub-list">
                <el-tabs v-model="activeName" class="demo-tabs" @tab-click="tabChange">
                    <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
                    <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
                    <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
                </el-tabs>

                <!-- 商品列表 -->
                <div class="body" ref="bodyRef">
                    <bgList :list-data="goodList.items" width="220px" padding="20px 30px" height="300px" name-size="16px"
                        bottom-font-size="20px">
                        <template v-slot:head>
                            <div></div>
                        </template>
                    </bgList>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import useCategoryStore from '@/store/modules/category'
import { ArrowRight } from '@element-plus/icons-vue'
import { storeToRefs } from 'pinia'
import bgList from '@/components/bg-list.vue'
import useScroll from '@/hook/useScroll'


const activeName = ref('publishTime')

//获取当前路由数据
const route = useRoute()
const categoryStore = useCategoryStore()

//获取面包屑导航数据
const { filterDate, goodList } = storeToRefs(categoryStore)
//发送网络请求
categoryStore.fetchFilter(route.params.id)

// console.log(filterDate.value)

//获取基础列表数据渲染
const data = ref({
    categoryId: route.params.id,
    page: 1,
    pageSize: 20,
    sortField: 'publishTime'
})
categoryStore.fetchGoodsList(data.value)
// console.log('good:', goodList.value)

//tab切换
function tabChange(tab) {
    data.value.sortField = tab.props.name
    data.value.page = 1
    categoryStore.fetchGoodsList(data.value)
    // console.log('object', data.value.sortField)
}

//触底加载

function callback() {
    data.value.page++
    categoryStore.fetchGoodsList(data.value)
    if (goodList.value.items.length === 0) {
        return false
    }
}

window.addEventListener('scroll', useScroll(500, callback))
watch(goodList, (newValue) => {
    if (newValue?.items.length === 0) {
        window.removeEventListener('scroll', useScroll)
    }
})
</script>

<style lang="less" scoped>
.container {
    .bread {
        padding: 25px 0;

        &:deep(.el-breadcrumb__inner.is-link) {
            font-weight: 400;
        }
    }

    .sub-list {
        padding: 20px 10px;
        background-color: #fff;

        .demo-tabs>.el-tabs__content {
            padding: 32px;
            color: #6b778c;
            font-size: 32px;
            font-weight: 600;
        }

        .body {
            padding: 0 10px;
        }
    }
}
</style>
