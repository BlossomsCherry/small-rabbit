import { throttle } from 'underscore'
import { onUnmounted, onMounted } from 'vue'

export default function useScroll(bottom, callback) {
    //bottom： 传入想要在离页面底部多少距离时启动监听
    //callback：在滚动到底部时想要传入的回调函数

    //节流
    const throttled = throttle(() => {
        const scrollTop = document.documentElement.scrollTop
        const scrollHeight = document.documentElement.scrollHeight
        const clientHeight = document.documentElement.clientHeight

        //判断是否滚动到目标底部
        if (scrollHeight < scrollTop + clientHeight + bottom) {
            if (callback) callback()
        }
    }, 100)

    //挂载后添加监听
    onMounted(() => {
        window.addEventListener('scroll', throttled)
    })

    //组件被卸载时移除监听
    onUnmounted(() => {
        window.addEventListener('scroll', throttled)
    })
}
