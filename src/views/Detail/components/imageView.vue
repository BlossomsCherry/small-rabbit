<template>
    <div class="goods-img">
        <div class="middle" ref="middleRef">
            <img :src="detailList.mainPictures[0]" alt="" />

            <!-- 小遮罩层 -->
            <div class="layer" ref="layerRef"></div>
        </div>
        <div class="small">
            <ul>
                <li v-for=" (item, index) in detailList?.mainPictures" :key="index">
                    <img :src="item" alt="" />
                </li>
            </ul>
        </div>

        <!-- 右侧放大图 -->
        <div class="large" :style="[{
            backgroundImage: ` url(${detailList.mainPictures[0]})`,
        }]">
        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue'
defineProps({
    detailList: {
        type: Object,
        default: () => ({})
    }
})

const middleRef = ref(null)
const layerRef = ref(null)

</script>

<style lang='less' scoped>
.goods-img {
    position: relative;
    display: flex;

    .middle {
        position: relative;
        width: 400px;
        height: 400px;
        border-color: #f5f5f5;

        img {
            width: 100%;
            height: 100%;
        }

        .layer {
            position: absolute;
            top: 0;
            left: 0;
            width: 200px;
            height: 200px;
            background-color: rgba(0, 0, 0, .2);
        }
    }

    .small {
        li {
            padding: 0 0 15px 12px;
            width: 66px;
            height: 68px;

            img {
                width: 100%;
                height: 100%;
                box-sizing: border-box;
                border: 2px solid #fff;
                cursor: pointer;

                &:hover {
                    border-color: var(--primary-color);
                }
            }
        }
    }

    .large {
        position: absolute;
        display: none;
        right: -335px;
        top: 0;
        width: 400px;
        height: 400px;
    }

}
</style>
