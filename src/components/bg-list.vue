<template>
    <div class="bg-list">
        <slot name="head">
            <div class="head">
                <h1 :style="{ textAlign: h1TextAlign, color: h1Color, fontSize: h1Size }">
                    {{ headTitle }} <small>{{ smallTitle }}</small>
                </h1>
            </div>
        </slot>
        <div class="list">
            <slot name="left"></slot>
            <ul :style="{ justifyContent: ulJustifyContent }">
                <template v-for="item in listData" :key="item?.id">
                    <li :style="{
                        width: width,
                        padding: padding,
                        backgroundColor: backgroundColor,
                        height: height
                    }">
                        <router-link :to="`/detail/${item.id}`">
                            <img :src="item.picture" alt="" />
                            <div class="name" :style="{ fontSize: nameSize }">
                                {{ item.name || item.title }}
                            </div>
                            <slot name="desc">
                                <div class="desc" :style="{ fontSize: descSize }">{{ item.desc }}</div>
                            </slot>

                            <div class="bottom" :style="{ color: bottomColor, fontSize: bottomFontSize }">
                                <slot name="bottom">
                                    <i>￥</i>
                                </slot>
                                {{ item.price || item.alt }}
                            </div>
                        </router-link>
                    </li>
                </template>
            </ul>
        </div>
    </div>
</template>

<script setup>
defineProps({
    listData: {
        type: Array,
        default: []
    },
    headTitle: {
        type: String,
        default: ''
    },
    smallTitle: {
        type: String,
        default: ''
    },
    nameSize: {
        type: String,
        default: ''
    },
    descSize: {
        type: String,
        default: ''
    },
    bottomColor: {
        type: String,
        default: ''
    },
    bottomFontSize: {
        type: String,
        default: ''
    },
    width: {
        type: String,
        default: ''
    },
    padding: {
        type: String,
        default: ''
    },
    backgroundColor: {
        type: String,
        default: ''
    },
    height: {
        type: String,
        default: ''
    },
    h1TextAlign: {
        type: String,
        default: ''
    },
    h1Color: {
        type: String,
        default: ''
    },
    h1Size: {
        type: String,
        default: ''
    },
    ulJustifyContent: {
        type: String,
        default: ''
    },
})
</script>

<style lang="less" scoped>
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
    display: flex;

    ul {
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        justify-content: space-between;

        li {
            width: 306px;
            height: 406px;
            text-align: center;
            background-color: #fff;
            transition: all 0.5s;
            box-sizing: border-box;

            &:hover {
                transform: translate3d(0, -3px, 0);
                box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
            }

            a {
                img {
                    width: 100%;
                }

                .name {
                    padding-top: 10px;
                    font-size: 22px;
                    color: #333;
                    display: -webkit-box;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 1; //当属性值为3，表示超出3行隐藏
                }

                .desc {
                    padding-top: 10px;
                    font-size: 14px;
                    color: #999;
                    display: -webkit-box;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 1; //当属性值为3，表示超出3行隐藏
                }

                .bottom {
                    padding-top: 10px;
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
