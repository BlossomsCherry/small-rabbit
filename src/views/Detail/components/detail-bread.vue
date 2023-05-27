<template>
    <div class="bread">
        <el-breadcrumb :separator-icon="ArrowRight">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>

            <el-breadcrumb-item :to="{ path: `/category/${detailList?.categories[1].id}` }">{{
                detailList?.categories[1]?.name
            }}</el-breadcrumb-item>

            <el-breadcrumb-item :to="{ path: `/category/sub/${detailList?.categories[0].id}` }">{{
                detailList?.categories[0]?.name
            }}</el-breadcrumb-item>

            <el-breadcrumb-item>{{ detailList?.name }}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script setup>
import { ArrowRight } from '@element-plus/icons-vue'

defineProps({
    detailList: {
        type: Object,
        default: () => ({})
    }
})
</script>

<style lang="less" scoped>
.bread {
    padding: 20px 0;

    &:deep(.el-breadcrumb__inner.is-link) {
        font-weight: 400;
    }
}
</style>
