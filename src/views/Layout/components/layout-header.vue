<template>
    <div class="header">
        <div class="container">
            <div class="logo">
                <router-link to="/"></router-link>
            </div>
            <div class="nav">
                <ul>
                    <li>
                        <router-link to="/" @click="currentIndex = -1"
                            :class="{ active: currentIndex === -1 }">首页</router-link>
                    </li>
                    <li v-for="(item, index) in categoryList" :key="item.id">
                        <router-link :to="`/category/${item.id}`" @click="activeClick(index)"
                            :class="{ active: currentIndex === index }">{{ item.name }}</router-link>
                    </li>
                </ul>
            </div>
            <div class="search">
                <i class="iconfont icon-search"></i>
                <input type="text" placeholder="搜一搜" />
            </div>
            <div class="cart">
                <router-link to="/">
                    <el-popover width="400px" placement="bottom-start" :width="200" trigger="click">
                        <template v-slot:default>
                            <div class="list">
                                <div class="item"></div>
                                <div class="foot">
                                    <div class="left">
                                        <span>kkk</span>
                                    </div>
                                    <el-button type="primary">去购物车结算</el-button>
                                </div>
                            </div>
                        </template>
                        <template #reference>
                            <i class="iconfont icon-cart"></i>
                        </template>
                    </el-popover>
                    <em>0</em>
                </router-link>

            </div>
        </div>
    </div>
</template>

<script setup>
import useLayoutStore from '@/store/modules/layout';
import { storeToRefs } from 'pinia';
// import useCartStore from '@/store/modules/cart';
// import { storeToRefs } from 'pinia';
// import { setToken, getToken } from '@/hook/storage';

defineProps({
    categoryList: {
        type: Array,
        default: []
    }
})

const layoutStore = useLayoutStore()
const { currentIndex } = storeToRefs(layoutStore)
function activeClick(index) {
    currentIndex.value = index
}


//购物车
</script>

<style lang="less" scoped>
.header {
    display: flex;
    background-color: #fff;
    justify-content: center;

    .container {
        display: flex;
        height: 132px;
        align-items: center;

        .logo {
            width: 200px;

            a {
                display: block;
                height: 132px;
                background: url('/src/assets/images/logo.png') no-repeat center 18px / contain;
            }
        }

        .nav {
            display: flex;
            width: 820px;

            ul {
                display: flex;
                padding-left: 40px;

                li {
                    margin-right: 40px;
                    width: 38px;

                    a {
                        padding: 0;
                        display: inline-block;
                        height: 32px;
                        line-height: 32px;
                        font-size: 16px;
                        border-bottom: 1px solid #fff;
                    }

                    a:hover {
                        color: var(--primary-color);
                        border-bottom-color: var(--primary-color);
                    }

                    .active {
                        color: var(--primary-color);
                        border-bottom: 1px solid var(--primary-color);
                    }
                }
            }
        }

        .search {
            width: 170px;
            height: 32px;
            border-bottom: 1px solid #e7e7e7;
            line-height: 32px;

            input {
                padding-left: 5px;
                width: 140px;
                outline: none;
                border: 0;
                font-size: 13px;
                color: #666;

                &::placeholder {
                    color: #e7e7e7f9;
                }
            }

            i {
                font-size: 18px;
            }
        }

        .cart {
            position: relative;
            margin-left: 10px;



            .iconfont {
                font-size: 22px;
            }

            em {
                position: absolute;
                padding: 1px 6px;
                top: -5px;
                right: -13px;
                border-radius: 10px;
                font-size: 12px;
                color: #fff;
                font-style: normal;
                background-color: #e26237;
                line-height: 1;
            }

        }

    }
}
</style>
