<template>
    <div class="nav">
        <div class="container">
            <!-- 根据token区分登录和非登录状态 -->
            <ul v-if="!Object.keys(userData).length">
                <li><router-link to="/newLogin">用户登录</router-link></li>
                <li><router-link to="/">帮助中心</router-link></li>
                <li><router-link to="/">关于我们</router-link></li>
            </ul>
            <ul v-else>
                <li>
                    <router-link to="/">
                        <div class="user" @mousemove="enterUser" @mouseleave="leaveUser" ref="userRef">
                            <img :src="userData.data.avatarUrl" alt="" />
                        </div>
                    </router-link>

                    <div class="bottom" ref="bottomRef" @mouseenter="enterUser" @mouseleave="leaveUser">
                        <div class="head">
                            <h2>{{ userData.data.name }}</h2>
                            <p class="id">ID: {{ userData.data.id }}</p>
                        </div>
                        <div class="body">
                            <el-collapse accordion="true">
                                <el-collapse-item title="个人账号" name="1">
                                    <div class="message">
                                        <div class="item">
                                            <span>邮箱：</span>
                                            <a href="javascript:;">{{ userData.data.email }}</a>
                                        </div>
                                        <div class="item">
                                            <span>GitHub: </span>
                                            <a href="https://github.com/BlossomsCherry/small-rabbit.git">
                                                BlossomsCherry</a>
                                        </div>
                                        <div class="item">
                                            <span>Gitee: </span>
                                            <a href="https://gitee.com/changantuanzi">
                                                @changantuanzi</a>
                                        </div>
                                    </div>
                                </el-collapse-item>
                                <el-collapse-item title="个人介绍" name="2">
                                    <div class="introduce">
                                        {{ userData.data.bio }}
                                        <!-- 立身贞固，内含玉润，外表澜清！ -->
                                    </div>
                                </el-collapse-item>
                                <el-collapse-item title="修改信息" name="3">
                                    <div class="update">
                                        <el-button type="primary">修改密码</el-button>
                                        <el-button type="primary">修改用户名</el-button>
                                    </div>
                                </el-collapse-item>
                            </el-collapse>
                        </div>

                        <div class="footer">
                            <i class="iconfont icon-tuichu"></i>
                            <span @click="confirm">退出登录</span>
                        </div>
                    </div>
                </li>
                <li><router-link to="/">帮助中心</router-link></li>
                <li><router-link to="/">关于我们</router-link></li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { delToken, getToken } from '@/hook/storage'
import useNewUserStore from '@/store/modules/newUser';
// import userData from '@/assets/data/user.js'
import { setPassword } from '@/services/modules/tok'

const newUserStore = useNewUserStore()
const { userData } = storeToRefs(newUserStore)



//从本地存储获取token数据
getToken().then(res => {
    userData.value = res
    console.log(userData.value)
})

//退出登录
function confirm() {
    userData.value = {}
    //清除本地存储
    delToken()
}


const bottomRef = ref(null)
const userRef = ref(null)
function enterUser() {
    bottomRef.value.style.display = 'block'
    userRef.value.style.width = '80px'
    userRef.value.style.height = '80px'
    userRef.value.style.top = '11px'
    userRef.value.style.boxShadow = ' 0 0 0 2px rgba(255, 255, 255, 1)'

}
function leaveUser() {
    bottomRef.value.style.display = 'block'
    userRef.value.style.width = '34px'
    userRef.value.style.height = '34px'
    userRef.value.style.top = '10px'
    userRef.value.style.boxShadow = ' 0 0 0  1px rgba(255, 255, 255, 1) '
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
            position: relative;
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

                    .user {
                        position: absolute;
                        top: 10px;
                        right: 191px;
                        width: 34px;
                        height: 34px;
                        border-radius: 100px;
                        box-shadow: 0 0 0 1px rgba(255, 255, 255, 1);
                        transition: all .5s;
                        z-index: 9999;
                        box-sizing: border-box;

                        img {
                            width: 100%;
                            border-radius: 100px;
                        }

                        &:hover {
                            width: 80px;
                            height: 80px;
                            top: 11px;
                            box-shadow: 0 0 0 2px rgba(255, 255, 255, 1);
                        }
                    }


                }

                .bottom {
                    display: none;
                    position: absolute;
                    top: 58px;
                    right: 82px;
                    width: 305px;
                    height: 450px;
                    transition: all .5s;
                    border-radius: 10px;
                    color: var(--primary-color);
                    background-color: #fff;
                    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
                    overflow-y: auto;
                    overflow-x: hidden;
                    z-index: 999;

                    //隐藏滚动条
                    &::-webkit-scrollbar {
                        display: none;
                        scrollbar-width: none;
                        -ms-overflow-style: none;
                    }

                    .head {
                        margin: 45px 0;
                        width: 100%;
                        height: 32px;
                        text-align: center;
                        cursor: pointer;

                        .id {
                            margin-top: 10px;
                        }
                    }

                    .body {
                        position: relative;
                        padding: 0 10px;
                        cursor: pointer;

                        &:deep(.el-collapse-item__header) {
                            font-weight: 600;
                            color: #666;
                        }

                        &:deep(.el-collapse-item) {
                            padding-left: 20px;
                        }


                        .message {
                            display: flex;
                            font-size: 16px;
                            // color: skyblue;
                            flex-direction: column;

                            .item {
                                display: flex;
                                align-items: center;

                                span {
                                    width: 70px;
                                }

                                a {
                                    color: pink;
                                    font-size: 16px;

                                    &:hover {
                                        color: var(--primary-color);
                                    }
                                }

                            }


                        }

                        .introduce {
                            font-size: 14px;
                            text-align: center;
                            color: pink;
                        }

                        .update {
                            display: flex;
                            padding-top: 10px;
                            justify-content: center;
                        }
                    }

                    .footer {
                        display: flex;
                        margin: 50px 0;
                        justify-content: center;
                        align-items: center;

                        i {
                            margin-right: 15px;
                            font-size: 22px;
                        }

                        span {
                            border: 0;
                            font-size: 20px;
                            color: var(--primary-color);
                            cursor: pointer;
                        }

                    }

                }

                &:deep(.el-tooltip__trigger) {
                    display: inline-block;
                    padding: 0 15px;
                    border-left: 2px solid #666;
                    font-size: 14px;
                    color: #cdcdcd;
                    line-height: 1;
                    cursor: pointer;

                    &:hover {
                        color: var(--primary-color);
                    }
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
