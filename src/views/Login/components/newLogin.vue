<template>
    <div class="login">
        <div class="header">
            <div class="container">
                <router-link class="logo" to="/"></router-link>
                <router-link class="entry" to="/">
                    进入网站首页
                    <i class="iconfont icon-angle-right"></i>
                    <i class="iconfont icon-angle-right"></i>
                </router-link>
            </div>
        </div>

        <!-- 登录、注册 -->
        <div class="section" v-if="show">
            <div class="wrapper">
                <div class="head">
                    <h3>账户登录</h3>
                </div>
                <div class="body">
                    <el-form :model="form" :rules="rules" status-icon ref="formRef">
                        <el-form-item label="账户" prop="user" label-width="60px">
                            <el-input v-model="form.user" />
                        </el-form-item>
                        <el-form-item label="密码" prop="password" label-width="60px">
                            <el-input v-model="form.password" type="password" autocomplete="off" />
                        </el-form-item>
                        <el-form-item prop="agree" label-width="22px">
                            <el-checkbox v-model="form.agree" size="large">
                                我已同意隐私条款和服务条款
                            </el-checkbox>
                        </el-form-item>
                        <el-form-item size="large">
                            <el-button type="primary" @click="loginClick">登录</el-button>
                        </el-form-item>
                        <el-form-item size="large">
                            <el-button type="primary" @click="show = false">注册</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
        </div>
        <router-view></router-view>

        <div class="footer">
            <div class="copyright">
                <div class="top">
                    <a href="javascript:;">关于我们</a>
                    <a href="javascript:;">帮助中心</a>
                    <a href="javascript:;">售后服务</a>
                    <a href="javascript:;">配送与验收</a>
                    <a href="javascript:;">商务合作</a>
                    <a href="javascript:;">搜索推荐</a>
                    <a href="javascript:;">友情链接</a>
                </div>
                <p>CopyRight © 小兔鲜儿</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import useNewUserStore from '@/store/modules/newUser.js'
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import { storeToRefs } from 'pinia'
import { setToken, getToken, delToken } from '@/hook/storage'

const newUserStore = useNewUserStore()
const { userData, show, token } = storeToRefs(newUserStore)
const router = useRouter()



//表单校验（账户名、密码）

//1.准备表单对象
const form = ref({
    user: '长安',
    password: '11552842',
    agree: true
})

//2.规则对象
const rules = {
    user: [
        { required: true, message: '用户名不能为空', trigger: 'blur' },

    ],
    password: [
        { required: true, message: '密码不能为空', trigger: 'blur' },
        { min: 6, max: 14, message: '请输入6~14位密码', trigger: 'blur' }
    ],
    agree: [
        {
            validator: (rule, value, callback) => {
                console.log(value);
                //自定义校验逻辑
                //勾选就通过，不勾选就不通过
                if (value === true) {
                    callback()
                } else {
                    callback(new Error('请勾选协议'))
                }
            }
        }
    ]
}

//3.获取form实例做统一校验
const formRef = ref()
async function loginClick() {
    const { user, password } = form.value
    //调用实例方法
    //volid是一个布尔值  当条件满足时输出true，否则为false
    formRef.value.validate(async volid => {
        console.log(volid)

        //以volid作为判断条件，如果通过校验才执行登录逻辑
        if (volid) {
            await newUserStore.fetchToken(token).then(res => {
                console.log("uu", res);
            })

            //先判断是否响应成功(通过返回的状态码来判断)
            if (userData.value.data.status === 200 &&
                userData.value.data.data.name === form.value.user &&
                userData.value.data.data.password == form.value.password) {
                //1.提示用户
                ElMessage({
                    message: '登录成功',
                    type: 'success',
                })
                // console.log('token', JSON.stringify(userData.value.data));

                //存储数据到本地
                setToken(userData.value.data)
                // console.log('token：', userData.value)


                //2.跳转首页
                router.replace('/')
            } else {
                ElMessage.error('用户名或密码错误')
            }
        }
    })
}
</script>

<style lang="less" scoped>
.login {
    background-color: #fff;

    .header {
        .container {
            display: flex;
            height: 100%;
            justify-content: space-between;
            align-items: center;

            .logo {
                width: 200px;
                height: 132px;
                background: url('@/assets/images/logo.png') no-repeat center/contain;
            }

            .entry {
                font-size: 16px;
                margin-bottom: -38px;

                .iconfont {
                    font-size: 14px;
                    color: var(--primary-color);
                }
            }
        }
    }

    .section {
        position: relative;
        height: 488px;
        background: url(@/assets/images/login-bg.png) no-repeat center/cover;

        .wrapper {
            position: absolute;
            top: 54px;
            left: 56%;
            width: 380px;
            background-color: #fff;

            .head {
                margin-bottom: 20px;
                cursor: pointer;

                h3 {
                    height: 55px;
                    border-bottom: 1px solid #f5f5f5;
                    line-height: 55px;
                    font-size: 18px;
                    font-weight: 400;
                    color: #333;
                    text-align: center;
                }
            }

            .body {
                padding: 0 20px 20px 20px;

                .el-button {
                    width: 100%;
                }

            }
        }
    }

    .footer {
        .copyright {
            display: flex;
            padding-top: 40px;
            height: 170px;
            flex-direction: column;
            align-items: center;

            .top {
                margin-bottom: 20px;

                a {
                    position: relative;
                    padding: 0 10px;
                    color: #999;
                    font-size: 15px;

                    &::after {
                        position: absolute;
                        top: 5px;
                        right: 0;
                        content: '';
                        width: 1px;
                        height: 12px;
                        border-right: 1px solid #999;
                    }

                    &:last-child::after {
                        content: '';
                        border: 0;
                    }
                }
            }

            p {
                color: #999;
                font-size: 15px;
                cursor: default;
            }

            img {
                width: 200px;
            }
        }
    }
}
</style>
