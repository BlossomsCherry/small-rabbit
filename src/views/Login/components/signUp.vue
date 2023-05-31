<template>
    <div class="section" v-if="!show">
        <div class="wrapper">
            <div class="head">
                <h3>用户注册</h3>
            </div>
            <div class="body">
                <el-form :model="form" :rules="rules" status-icon ref="formRef">
                    <el-form-item label="账户" prop="user" label-width="60px">
                        <el-input v-model="form.user" />
                    </el-form-item>
                    <el-form-item label="密码" prop="password" label-width="60px">
                        <el-input v-model="form.password" type="password" autocomplete="off" placeholder="请输入密码" />
                    </el-form-item>
                    <el-form-item prop="agree" label-width="22px">
                        <el-checkbox v-model="form.agree" size="large">
                            我已同意隐私条款和服务条款
                        </el-checkbox>
                    </el-form-item>
                    <el-form-item size="large">
                        <el-button type="primary" @click="signClick">注册</el-button>
                    </el-form-item>

                    <div class="footer">
                        <a href="http://10.131.140.99/gitee/login" @click="signClick">Gitee</a>
                    </div>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router';
import useNewUserStore from '@/store/modules/newUser';
import { storeToRefs } from 'pinia';
import { setPassword } from '@/services/modules/tok';

const route = useRoute()
const newUserStore = useNewUserStore()
const { show, userData, signData, token } = storeToRefs(newUserStore)


//表单校验（账户名、密码）

//1.准备表单对象
const form = ref({
    user: '长安',
    password: '',
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
async function signClick() {
    const { user, password } = form.value
    //调用实例方法
    //volid是一个布尔值  当条件满足时输出true，否则为false
    formRef.value.validate(async volid => {
        console.log(volid)

        //以volid作为判断条件，如果通过校验才执行登录逻辑
        if (volid) {

            //将设置的密码更新到服务器
            await newUserStore.fetchPassword(11552842, password)

            await newUserStore.fetchToken(token)
            console.log('密码:', userData.value.data.data.password)

            //注册成功后返回登录页面
            show.value = true
            //1.提示用户
            ElMessage({
                message: '注册成功',
                type: 'success',
            })

        }
    })
}
</script>

<style lang="less" scoped>
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

        .footer {
            text-align: center;

            a {
                font-size: 18px;
                color: var(--primary-color);
            }
        }
    }
}
</style>
