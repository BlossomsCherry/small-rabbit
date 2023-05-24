<template>
    <div class="home-panel">
        <bgList
            head-title="新鲜好物"
            small-title="新鲜出炉 品质靠谱"
            :list-data="newList"
            background-color="#f0f9f4"
        >
            <template v-slot:desc>
                <div></div>
            </template>
        </bgList>
    </div>
</template>

<script setup>
    import bgList from '@/components/bg-list.vue'
    defineProps({
        newList: {
            type: Array,
            default: []
        }
    })
</script>

<style lang="less" scoped>
    .home-panel {
        background-color: #fff;
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
