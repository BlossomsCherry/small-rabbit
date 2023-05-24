<template>
    <div class="list">
        <ul>
            <template v-for="item in listData" :key="item.id">
                <li>
                    <router-link to="/">
                        <img :src="item.picture" alt="" />
                        <div class="name">{{ item.name }}</div>
                        <slot>
                            <div class="price"><i>￥</i>{{ item.price }}</div>
                        </slot>
                    </router-link>
                </li>
            </template>
        </ul>
    </div>
</template>

<script setup>
    defineProps({
        listData: {
            type: Array,
            default: []
        }
    })
</script>

<style lang="less" scoped>
    .list {
        ul {
            display: flex;
            flex-wrap: wrap;
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
                        i {
                            font-style: normal;
                        }
                    }
                }
            }
        }
    }
</style>
