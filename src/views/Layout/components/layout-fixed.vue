<template>
    <div class="app-header-sticky" ref="showRef">
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
            <div class="right">
                <router-link to="/">品牌</router-link>
                <router-link to="/">专题</router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import useLayoutStore from '@/store/modules/layout';
import { storeToRefs } from 'pinia';
defineProps({
    categoryList: {
        type: Array,
        default: []
    }
})

//吸顶导航栏
const showRef = ref()
window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop
    if (scrollTop > 70) {
        showRef.value.style.opacity = 1
        showRef.value.style.top = 0
    } else {
        showRef.value.style.opacity = 0
        showRef.value.style.top = -70 + 'px'
    }
})

const layoutStore = useLayoutStore()
const { currentIndex } = storeToRefs(layoutStore)
function activeClick(index) {
    currentIndex.value = index
}
</script>

<style lang="less" scoped>
.app-header-sticky {
    position: fixed;
    top: -70px;
    left: 0;
    right: 0;
    display: flex;
    opacity: 1;
    background-color: #fff;
    transition: top 0.6s;
    justify-content: center;
    z-index: 999;

    .container {
        display: flex;
        align-items: center;

        .logo {
            width: 200px;
            height: 80px;

            a {
                display: block;
                height: 80px;
                background: url('/src/assets/images/logo.png') no-repeat right 2px;
                background-size: 160px auto;
            }
        }

        .nav {
            display: flex;
            width: 820px;

            ul {
                // position: relative;
                display: flex;
                width: 100%;
                padding-left: 40px;
                justify-content: space-around;

                li {
                    text-align: center;
                    margin-right: 40px;

                    a {
                        display: inline-block;
                        height: 32px;
                        line-height: 32px;
                        font-size: 16px;
                        border-bottom: 1px solid #fff;

                        &:hover {
                            color: var(--primary-color);
                            border-bottom: 1px solid var(--primary-color);
                        }
                    }

                    .active {
                        color: var(--primary-color);
                        border-bottom: 1px solid var(--primary-color);
                    }
                }
            }
        }

        .right {
            flex: 1;
            display: flex;
            width: 220px;
            padding-left: 40px;
            border-left: 2px solid var(--primary-color);

            a {
                width: 38px;
                margin-right: 40px;
                font-size: 16px;
                text-align: center;
                line-height: 1;
            }

            a:hover {
                color: var(--primary-color);
            }
        }
    }
}
</style>
