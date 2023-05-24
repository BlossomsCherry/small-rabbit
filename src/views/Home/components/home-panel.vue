<template>
    <div class="home-panel">
        <div class="container">
            <div class="head">
                <h1>新鲜好物 <small>新鲜出炉 品质靠谱</small></h1>
            </div>
            <div class="list">
                <ul>
                    <template v-for="item in newList" :key="item.id">
                        <li>
                            <router-link to="/">
                                <img :src="item.picture" alt="" />
                                <div class="name">{{ item.name }}</div>
                                <div class="price"><i>￥</i>{{ item.price }}</div>
                            </router-link>
                        </li>
                    </template>
                </ul>
            </div>
            <!-- <bgList :list-data="newList"></bgList> -->
        </div>
    </div>
</template>

<script setup>
    import bgList from '@/components/bg-list.vue.js'
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
        .container {
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
            .list {
                ul {
                    display: flex;
                    justify-content: space-between;
                    li {
                        width: 306px;
                        background-color: #f0f9f4;
                        transition: all 0.5s;
                        &:hover {
                            transform: translate3d(0, -3px, 0);
                            box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
                        }
                        a {
                            img {
                                width: 306px;
                            }
                            .name {
                                padding-top: 12px;
                                font-size: 22px;
                                color: #333;
                                display: -webkit-box;
                                text-overflow: ellipsis;
                                overflow: hidden;
                                -webkit-box-orient: vertical;
                                -webkit-line-clamp: 1; //当属性值为3，表示超出3行隐藏
                            }
                            .price {
                                padding-top: 12px;
                                font-size: 22px;
                                color: #cf4444;
                                text-align: center;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
