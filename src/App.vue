<template>
    <div class="app">
        <router-view></router-view>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { getUserMessage, setPassword, changePassword, changeName } from './services/modules/tok';
import useNewUserStore from '@/store/modules/newUser'
import { storeToRefs } from 'pinia';



const newUserStore = useNewUserStore()
const { token } = storeToRefs(newUserStore)

onMounted(async () => {
    // //设置密码
    // const re = await setPassword(11552842, 123456)
    // console.log("post", re);
    // //修改密码
    // const data = await changePassword(11552842, 'dyj123', 123456)
    // console.log('change',data)

    const res = await changeName(token, 'uuu',)
    console.log(res);
    const value = await getUserMessage(token)
    console.log('get', value)
})
</script>

<style lang="less" scoped>
.app {
    background-color: #f5f5f5;
}
</style>
