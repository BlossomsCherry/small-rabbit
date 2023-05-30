<template>
    <div class="nav">
        <div class="container">

            <!-- 根据token区分登录和非登录状态 -->
            <ul v-if="!Object.keys(userData).length">
                <li><router-link to="/newLogin">请先登录</router-link></li>
                <li><router-link to="/">帮助中心</router-link></li>
                <li><router-link to="/">关于我们</router-link></li>
            </ul>
            <ul v-else>
                <li>
                    <router-link to="/">
                        <div class="user" @mouseenter="enterUser" @mouseleave="leaveUser" ref="userRef">
                            <img :src="userData.data.avatarUrl" alt="">
                        </div>
                    </router-link>

                    <div class="bottom" ref="bottomRef" @mouseenter="enterUser" @mouseleave="leaveUser">
                        <div class="head">
                            <h2>{{ userData.data.name }}</h2>
                            <p class="id">ID: {{ userData.data.id }}</p>
                        </div>
                        <div class="body">
                            <el-collapse>
                                <el-collapse-item title="个人信息" name="1">
                                    <div class="message">
                                        <span>邮箱：</span> {{ userData.data.email }}
                                    </div>
                                </el-collapse-item>
                                <el-collapse-item title="个人介绍" name="2">
                                    <div class="introduce">
                                        {{ userData.data.bio }}
                                        <!-- 立身贞固，内含玉润，外表澜清！ -->
                                    </div>

                                </el-collapse-item>
                                <el-collapse-item title="修改信息" name="3">
                                    <div>
                                        Simplify the process: keep operating process simple and intuitive;
                                    </div>
                                    <div>
                                        Definite and clear: enunciate your intentions clearly so that the
                                        users can quickly understand and make decisions;
                                    </div>
                                    <div>
                                        Easy to identify: the interface should be straightforward, which helps
                                        the users to identify and frees them from memorizing and recalling.
                                    </div>
                                </el-collapse-item>
                            </el-collapse>
                        </div>

                        <div class="footer">
                            <span @click="confirm">退出登录</span>
                        </div>
                    </div>

                </li>
                <!-- <li>
                    <el-popconfirm @confirm="confirm" title="确定退出吗?" confirm-button-text="确认" cancel-button-text="取消">
                        <template #reference>
                            退出登录
                        </template>
                    </el-popconfirm>
                </li> -->
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
import { updatePassword } from '@/services/modules/tok'

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
    bottomRef.value.style.display = 'none'
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
                    // opacity: 0;
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

                        .id {
                            margin-top: 10px;
                        }
                    }

                    .body {
                        padding: 0 10px;
                        cursor: pointer;

                        &:deep(.el-collapse-item__header) {
                            font-weight: 600;
                            color: #666;
                        }

                        .message {
                            font-size: 16px;
                            color: skyblue;
                        }

                        .introduce {
                            font-size: 14px;
                            color: skyblue;
                        }
                    }

                    .footer {
                        margin: 50px 0;
                        text-align: center;

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
