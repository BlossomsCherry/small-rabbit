<template>
    <div class="footer">
        <div class="left">
            <div class="nav">
                <span>商品详情</span>
            </div>
            <div class="detail">
                <ul class="attrs">
                    <li v-for="item in detailList.details.properties" :key="item.value">
                        <span class="dt">{{ item?.name }}</span>
                        <span class="dd">{{ item.value }}</span>
                    </li>
                </ul>
                <!-- 图片 -->
                <template v-for="(item, index) in detailList.details.pictures" :key="index">
                    <img :src="item" alt="">
                </template>
            </div>
        </div>

        <!-- 24小时热榜、专题推荐 -->
        <div class="right">
            <template v-for="(value, key) in title" :key="key">
                <detail-hot :title="title[key]" :type="Number(key)"></detail-hot>
            </template>
        </div>
    </div>
</template>

<script setup>
import detailHot from './detail-hot.vue';
defineProps({
    detailList: {
        type: Object,
        default: () => ({})
    },
    id: {
        type: String,
        default: ''
    }
})

const title = {
    1: '24小时热榜',
    2: '周热榜'
}

</script>

<style lang='less' scoped>
.footer {
    display: flex;
    margin-top: 20px;
    justify-content: space-between;

    .left {
        width: 940px;
        background-color: #fff;

        .nav {
            height: 70px;
            line-height: 70px;

            span {
                padding: 0 40px;
                font-size: 18px;
                color: #333;
            }
        }

        .detail {
            width: 100%;
            padding: 40px;
            box-sizing: border-box;

            .attrs {
                display: flex;
                margin-bottom: 30px;
                flex-wrap: wrap;
                cursor: default;

                li {
                    display: flex;
                    margin-bottom: 10px;
                    font-size: 14px;
                    width: 50%;

                    .dt {
                        width: 100px;
                        color: #999;
                    }

                    .dd {
                        color: #666;
                        display: -webkit-box;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 1; //当属性值为3，表示超出3行隐藏
                    }
                }
            }

            img {
                width: 100%;
            }
        }
    }

    .right {
        width: 280px;
        background-color: #fff;

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
    }
}
</style>
