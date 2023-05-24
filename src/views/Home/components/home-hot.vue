<template>
    <div class="hot">
        <bgList
            head-title="人气推荐"
            smallTitle="人气爆款 不容错过"
            :list-data="hotList"
            bottom-color="#999"
            bottom-font-size="18px"
        >
            <template v-slot:bottom>
                <div></div>
            </template>
        </bgList>
    </div>
</template>

<script setup>
    import bgList from '@/components/bg-list.vue'

    defineProps({
        hotList: {
            type: Array,
            default: []
        }
    })
</script>

<style lang="less" scoped>
    .hot {
        .head {
            padding: 40px 0;
            h1 {
                margin: 0;
                font-size: 32px;
                font-weight: 400;
                color: #333;
                small {
                    padding-left: 10px;
                    font-size: 16px;
                    color: #999;
                }
            }
        }
    }
</style>
