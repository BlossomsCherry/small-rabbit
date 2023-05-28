<template>
    <div class="nav">
        <div class="container">

            <!-- 根据token区分登录和非登录状态 -->
            <ul v-if="!Object.keys(token).length">
                <li><router-link to="/login">请先登录</router-link></li>
                <li><router-link to="/">帮助中心</router-link></li>
                <li><router-link to="/">关于我们</router-link></li>
            </ul>
            <ul v-else>
                <li><router-link to="/"><i class="iconfont icon-user"></i>{{ token.data.result.account }}</router-link>
                </li>
                <li><router-link to="/" @click="exitClick">退出登录</router-link></li>
                <li><router-link to="/">帮助中心</router-link></li>
                <li><router-link to="/">关于我们</router-link></li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import useUserStore from '@/store/modules/user';
import { delToken } from '@/hook/storage';

const userStore = useUserStore()
const { token } = storeToRefs(userStore)


//退出登录
function exitClick() {
    token.value = {}
    //清除本地存储
    delToken()
}

</script>

<style lang="less" scoped>
.nav {
    display: flex;
    background-color: #333;
    justify-content: center;

    .container {
        height: 53px;

        ul {
            display: flex;
            height: 100%;
            justify-content: end;
            align-items: center;

            li {
                a {
                    display: inline-block;
                    padding: 0 15px;
                    font-size: 14px;
                    color: #cdcdcd;
                    line-height: 1;
                }

                a:hover {
                    color: var(--primary-color);
                }

                ~li {
                    a {
                        border-left: 2px solid #666;
                    }
                }
            }
        }
    }
}
</style>
