import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            resolvers: [ElementPlusResolver()]
        }),
        Components({
            resolvers: [ElementPlusResolver()]
        })
    ],
    server: {
        //配置代理，解决跨域问题
        proxy: {
            '/api': {
                target: 'http://10.131.140.99', //后端地址
                changeOrigin: true,
                rewrite: path => path.replace(/^\/api/, '') // 不可以省略rewrite
            }
        }
    },
    resolve: {
        // 实际的路径转换  @  -> src
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})
