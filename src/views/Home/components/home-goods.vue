<template>
    <div class="home-goods">
        <template v-for="item in goodsList" :key="item.id">
            <div class="item">
                <bg-list
                    :head-title="item.name"
                    :listData="item.goods"
                    width="220px"
                    padding="20px 30px"
                    height="300px"
                >
                    <!-- 默认插槽 -->
                    <template v-slot:left>
                        <div class="page">
                            <img :src="item.picture" alt="" />
                        </div>
                    </template>
                </bg-list>
            </div>
        </template>
    </div>
</template>

<script setup>
    import bgList from '@/components/bg-list.vue'
    const props = defineProps({
        goodsList: {
            type: Array,
            default: []
        }
    })
</script>

<style lang="less" scoped>
    .item {
        .page {
            margin-right: 10px;
            width: 240px;
            height: 610px;
            img {
                width: 240px;
                height: 100%;
            }
        }
    }
</style>
