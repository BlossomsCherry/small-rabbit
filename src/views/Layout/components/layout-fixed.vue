<template>
    <div class="app-header-sticky" ref="showRef">
        <div class="container">
            <div class="logo">
                <router-link to="/"></router-link>
            </div>
            <div class="nav">
                <ul>
                    <li>
                        <router-link to="/">首页</router-link>
                    </li>
                    <li v-for="(item, index) in categoryList" :key="item.id">
                        <router-link to="/">{{ item.name }}</router-link>
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
    defineProps({
        categoryList: {
            type: Array,
            default: []
        }
    })
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
                    display: flex;
                    padding-left: 40px;

                    li {
                        margin-right: 40px;
                        a {
                            padding: 0;
                            font-size: 16px;
                        }
                        a:hover {
                            padding-bottom: 2px;
                            color: var(--primary-color);
                            border-bottom: 1px solid var(--primary-color);
                        }
                    }
                }
            }
            .right {
                flex: 1;
                padding-left: 40px;
                border-left: 2px solid var(--primary-color);
                a {
                    margin-right: 40px;
                    font-size: 16px;
                }
                a:hover {
                    color: var(--primary-color);
                }
            }
        }
    }
</style>
