<template>
    <div class="info">
        <div class="media">
            <!-- 图片预览区 -->
            <image-view :detailList="detailList"></image-view>

            <div class="goods-sales">
                <ul>
                    <li>
                        <p>销量人气</p>
                        <p>{{ detailList.salesCount }}+</p>
                        <p>
                            <i class="iconfont icon-task-filling"></i>
                            销量人气
                        </p>
                    </li>
                    <li>
                        <p>商品评价</p>
                        <p>{{ detailList.commentCount }}+</p>
                        <p>
                            <i class="iconfont icon-task-filling"></i>
                            销量人气
                        </p>
                    </li>
                    <li>
                        <p>收藏人气</p>
                        <p>{{ detailList.collectCount }}+</p>
                        <p>
                            <i class="iconfont icon-task-filling"></i>
                            销量人气
                        </p>
                    </li>
                    <li>
                        <p>品牌信息</p>
                        <p>{{ detailList.brand.name }}+</p>
                        <p>
                            <i class="iconfont icon-task-filling"></i>
                            销量人气
                        </p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="spec">
            <div class="name">{{ detailList?.name }}</div>
            <div class="desc">{{ detailList.desc }}</div>
            <div class="price">
                {{ detailList.price }}
                <span>{{ detailList.oldPrice }}</span>
            </div>
            <div class="service">
                <dl>
                    <dt>促销</dt>
                    <dd>12月好物放送，App领券购买直降120元</dd>
                </dl>
                <dl>
                    <dt>服务</dt>
                    <dd>
                        <span>无忧退货</span>
                        <span>快速退款</span>
                        <span>免费包邮</span>
                        <a href="javascript:;">了解详情</a>
                    </dd>
                </dl>
            </div>

            <!-- 颜色 -->
            <div class="specs" v-if="detailList.specs[0]">
                <span>{{ detailList.specs[0]?.name }}</span>
                <ul>
                    <template v-for="(item, index) in detailList.specs[0]?.values" :key="index">
                        <li :class="{ active: imgIndex === index }" @click="imgClick(index)">
                            <img :src="item.picture" alt="" />
                        </li>
                    </template>
                </ul>
            </div>

            <!-- 尺码 -->
            <div class="size" v-if="detailList.specs[1]">
                <div class="name">{{ detailList.specs[1]?.name }}</div>
                <ul>
                    <template v-for="(item, index) in detailList.specs[1]?.values">
                        <li :class="{ active: currentIndex === index }" @click="activeClick(index)">
                            {{ item?.name }}
                        </li>
                    </template>
                </ul>
            </div>
            <!-- 数量 -->
            <div class="el-input">
                <el-input-number v-model="num" :min="0" :max="10" />
            </div>

            <div class="btn">
                <el-button @click="btClick">
                    <span>加入购物车</span>
                </el-button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import imageView from './imageView.vue'
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'

const props = defineProps({
    detailList: {
        type: Object,
        default: () => ({})
    }
})

const num = ref(1)
//尺码点击
const currentIndex = ref(null)
function activeClick(index) {

    //重复点击已选择的规格，就取消选择
    if (currentIndex.value === index) {
        currentIndex.value = null
    }
    else {
        currentIndex.value = index
    }
}


//颜色点击
const imgIndex = ref(null)
function imgClick(index) {
    if (imgIndex.value === index) {
        imgIndex.value = null
    }
    else {
        imgIndex.value = index
    }
}

//判断商品的选择情况
function btClick() {
    if (props.detailList.specs[0] && imgIndex.value === null) {
        ElMessage({
            message: `请选择${props.detailList.specs[0]?.name}`,
            type: 'warning',
        })
    } else if (props.detailList.specs[1] && currentIndex.value == null) {
        ElMessage({
            message: `请选择${props.detailList.specs[1]?.name}`,
            type: 'warning',
        })
    } else if (num.value < 1) {
        ElMessage({
            message: `请选择商品数量`,
            type: 'warning',
        })
    }
}
</script>

<style lang="less" scoped>
.info {
    display: flex;
    background-color: #fff;

    .media {
        display: flex;
        padding: 30px 50px;
        flex-direction: column;
        cursor: default;

        .goods-sales {

            ul {
                display: flex;
                width: 400px;

                li {
                    position: relative;
                    flex: 1;
                    text-align: center;

                    &::after {
                        position: absolute;
                        content: '';
                        top: 6px;
                        right: 0;
                        width: 1px;
                        height: 60px;
                        background-color: #ece7e7;
                    }

                    &:last-child::after {
                        content: '';
                        width: 0;
                    }

                    p {
                        font-size: 14px;

                        &:first-child {
                            color: #999;
                        }

                        &:nth-child(2) {
                            margin-top: 10px;
                            color: #cf4444;
                        }

                        &:last-child {
                            margin-top: 10px;
                            color: #666;
                        }
                    }

                    &:deep(.iconfont) {
                        color: var(--primary-color);
                    }
                }
            }
        }
    }

    .spec {
        padding: 30px 30px 30px 0;
        cursor: default;

        .name {
            font-size: 22px;
        }

        .desc {
            margin-top: 15px;
            font-size: 14px;
            color: #999;
        }

        .price {
            margin-top: 15px;
            font-size: 22px;
            color: #cf4444;

            span {

                font-size: 16px;
                color: #999;
                text-decoration: line-through;
            }
        }

        .service {
            margin-top: 15px;
            padding: 20px 10px 0 10px;
            width: 500px;
            background-color: #f5f5f5;

            dl {
                display: flex;
                padding-bottom: 20px;


                dt {
                    width: 50px;
                    color: #999;

                }

                dd {
                    color: #666;

                    span {
                        margin-right: 10px;

                        &::before {
                            margin-right: 2px;
                            content: "•";
                            color: var(--primary-color);
                        }
                    }

                    a {
                        color: var(--primary-color);
                    }
                }
            }
        }

        .size {
            display: flex;
            margin-bottom: 20px;
            align-items: center;

            .name {
                width: 50px;
                font-size: 14px;
                color: #999;
            }

            ul {
                display: flex;
                flex-wrap: wrap;

                li {
                    padding: 5px 20px;
                    margin-right: 10px;
                    margin-bottom: 5px;
                    border: 1px solid #e4e4e4;
                    color: #666;
                    cursor: pointer;

                }

                .active {
                    border: 1px solid var(--primary-color);
                }

            }
        }


        .specs {
            display: flex;
            margin: 20px 0;
            align-items: center;

            span {
                margin-right: 20px;
                color: #999;
            }

            ul {
                display: flex;

                li {
                    margin-right: 10px;
                    border: 1px solid #fff;
                    box-sizing: border-box;

                    img {
                        width: 50px;
                        height: 50px;
                        background: #ebebeb url("/src/assets/images/200.png") no-repeat center/contain;
                        cursor: pointer;
                    }
                }

                .active {
                    border: 1px solid var(--primary-color);
                }
            }
        }

        .btn {
            margin-top: 20px;

            .el-button {
                padding: 20px 24px;
            }


        }

    }

}
</style>
