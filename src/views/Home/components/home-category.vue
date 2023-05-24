<template>
    <div class="home-category">
        <ul>
            <li
                v-for="(item, index) in categoryList"
                :key="item.id"
                @mousemove="currentIndex = index"
                @mouseleave="currentIndex = -1"
            >
                <router-link to="/">
                    <span>{{ item.name }}</span>
                    <template v-for="(i, key) in item.children.slice(0, 2)" :key="i.id">
                        <span>{{ i.name }}</span>
                    </template>
                </router-link>

                <!-- layer弹层位置 -->
                <div class="layer" v-show="currentIndex === index">
                    <h4>分类推荐<small>根据您的购买或浏览记录推荐</small></h4>
                    <ul>
                        <template v-for="i in item.goods" :key="item.id">
                            <li>
                                <router-link to="/">
                                    <img :src="i.picture" alt="" />
                                    <div class="info">
                                        <div class="name">{{ i.name }}</div>
                                        <div class="desc">{{ i.desc }}</div>
                                        <div class="price"><i>￥</i>{{ i.price }}</div>
                                    </div>
                                </router-link>
                            </li>
                        </template>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    // import useHomeStore
    defineProps({
        categoryList: {
            type: Array,
            default: []
        },
        goodList: {
            type: Array,
            default: []
        }
    })
    const currentIndex = ref(0)
</script>

<style lang="less" scoped>
    .home-category {
        position: relative;
        width: 250px;
        height: 500px;
        background-color: rgba(0, 0, 0, 0.8);
        z-index: 99;
        ul {
            li {
                padding-left: 40px;
                line-height: 55.5px;
                span {
                    margin-right: 5px;
                    font-size: 14px;
                    color: #fff;
                }
                .layer {
                    position: absolute;
                    padding: 0 15px;
                    width: 990px;
                    height: 500px;
                    top: 0px;
                    left: 250px;
                    background: rgba(255, 255, 255, 0.8);
                    color: #333;
                    box-sizing: border-box;
                    h4 {
                        font-size: 20px;
                        font-weight: normal;
                        line-height: 80px;
                        small {
                            margin-left: 10px;
                            font-size: 16px;
                            color: #666;
                        }
                    }
                    ul {
                        display: flex;
                        flex-wrap: wrap;

                        li {
                            margin-right: 15px;
                            margin-bottom: 15px;
                            width: 310px;
                            height: 120px;
                            border: 1px solid #eee;
                            border-radius: 4px;
                            background: #fff;
                            box-sizing: border-box;

                            &:nth-child(3n) {
                                margin-right: 0;
                            }
                            a {
                                display: flex;
                                width: 100%;
                                padding: 10px;
                                align-items: center;
                                box-sizing: border-box;

                                &:hover {
                                    background: #e3f9f4;
                                }
                                img {
                                    width: 95px;
                                    height: 95px;
                                }
                                .info {
                                    padding-left: 10px;
                                    line-height: 24px;
                                    overflow: hidden;
                                    .name {
                                        font-size: 16px;
                                        color: #666;
                                        display: -webkit-box;
                                        text-overflow: ellipsis;
                                        overflow: hidden;
                                        -webkit-box-orient: vertical;
                                        -webkit-line-clamp: 2;
                                    }
                                    .desc {
                                        color: #999;
                                        text-overflow: ellipsis;
                                        display: -webkit-box;
                                        text-overflow: ellipsis;
                                        overflow: hidden;
                                        -webkit-box-orient: vertical;
                                        -webkit-line-clamp: 1;
                                    }
                                    .price {
                                        font-size: 22px;
                                        color: #cf4444;
                                        i {
                                            font-size: 16px;
                                            font-style: normal;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            li:hover {
                background-color: var(--primary-color);
            }
        }
    }
</style>
