<template>
    <div class="hot">
        <div class="container">
            <div class="head">
                <h1>新鲜好物 <small>新鲜出炉 品质靠谱</small></h1>
            </div>
            <bgList :list-data="hotList"></bgList>
        </div>
    </div>
</template>

<script setup>
    import bgList from '@/components/bg-list.vue.js'

    defineProps({
        hotList: {
            type: Array,
            default: []
        }
    })
</script>

<style lang="less" scoped></style>
