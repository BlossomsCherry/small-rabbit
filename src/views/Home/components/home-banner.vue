<template>
    <div class="home-banner">
        <div class="block text-center">
            <el-carousel height="500px">
                <el-carousel-item v-for="item in bannerList" :key="item.id">
                    <img :src="item.imgUrl" alt="" />
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<script setup>
    defineProps({
        bannerList: {
            type: Array,
            default: []
        }
    })
</script>

<style lang="less" scoped>
    .home-banner {
        position: absolute;
        width: 100%;
        left: 0;
        top: 0;
        z-index: 9;
        .el-carousel-item {
            img {
                width: 100%;
                height: 500px;
            }
        }
    }
</style>
