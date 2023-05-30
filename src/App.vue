<template>
    <div class="app">
        <router-view></router-view>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { getToken, updatePassword } from './services/modules/tok';



const token = 'd0f1bb69c2f5444b8b216935132ec120'

onMounted(async () => {
    const re = await updatePassword(11552842, 123456)
    console.log("post", re);
    const res = await getToken(token)
    console.log('get', res)

})

</script>

<style lang="less" scoped>
.app {
    background-color: #f5f5f5;
}
</style>
