<template>
    <div class="hot">
        <h3>{{ title }}</h3>
        <template v-for="item in goodsData" :key="item.id">
            <router-link :to="`/detail/${item.id}`">
                <img :src="item.picture" alt="">
                <div class="name">{{ item.name }}</div>
                <div class="desc">{{ item.desc }}</div>
                <div class="price">￥{{ item.price }}</div>
            </router-link>
        </template>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { getDetailGoodsApi } from '@/services/modules/detail';
const props = defineProps({
    title: {
        type: String,
        default: '',
    },
    type: {
        type: Number,
        default: 1,
    },
})
const route = useRoute()
const goodsData = ref([])

async function fetchDetailGoods() {
    const res = await getDetailGoodsApi(route.params.id, props.type)
    goodsData.value = res.data.result
}

onMounted(() => {
    fetchDetailGoods()
})
</script>

<style lang='less' scoped>
h3 {
    padding-left: 25px;
    margin-bottom: 10px;
    height: 70px;
    line-height: 70px;
    font-size: 18px;
    color: #fff;
    background-color: #e26237;
    font-weight: 400;
}

a {
    display: flex;
    padding: 20px 30px;
    text-align: center;
    box-sizing: border-box;
    flex-direction: column;
    align-items: center;

    div {
        padding-top: 10px;
    }

    .name {
        font-size: 16px;
        color: #333;
        display: -webkit-box;
        text-overflow: ellipsis;
        overflow: hidden;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1; //当属性值为3，表示超出3行隐藏
    }

    .desc {
        font-size: 14px;
        color: #999;
        display: -webkit-box;
        text-overflow: ellipsis;
        overflow: hidden;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1; //当属性值为3，表示超出3行隐藏
    }

    .price {
        font-size: 20px;
        color: #cf4444;
    }

    img {
        width: 160px;
    }
}
</style>
