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
        <div class="section">
            <div class="wrapper">
                <div class="head">
                    <h3>账户登录</h3>
                </div>
                <div class="body">
                    <el-form status-icon label-width="120px">
                        <el-form-item label="账户" prop="user">
                            <el-input v-model="userName" />
                        </el-form-item>
                        <el-form-item label="密码" prop="psw">
                            <el-input v-model="password" type="password" autocomplete="off" />
                        </el-form-item>
                        <el-form-item prop="agree" label-width="22px">
                            <el-checkbox size="large">
                                我已同意隐私条款和服务条款
                            </el-checkbox>
                        </el-form-item>
                        <el-form-item size="large">
                            <el-button type="primary">点击登录</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
        </div>
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
import { ref } from 'vue'

const userName = ref()
const password = ref()
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

                &:deep(.el-form-item__label) {
                    width: 50px !important;

                    &::before {
                        content: '*';
                        color: #e26237;
                        margin-right: 2px;
                    }
                }

                &:deep(.el-form-item__content) {
                    display: inline-block !important;
                    margin: 0 !important;
                }

                .el-checkbox {
                    padding-left: 12px;
                }

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
        }
    }
}
</style>
