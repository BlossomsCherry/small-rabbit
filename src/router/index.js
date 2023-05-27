import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    //路由模式
    history: createWebHashHistory(),
    //映射关系
    routes: [
        {
            path: '/',
            redirect: '/layout'
        },
        //一级路由
        {
            path: '/layout',
            component: () => import('@/views/Layout/index.vue'),
            //二级路由
            children: [
                {
                    path: '',
                    component: () => import('@/views/Home/index.vue')
                },
                {
                    path: '/category/:id',
                    component: () => import('@/views/Category/index.vue')
                },
                {
                    path: '/category/sub/:id',
                    component: () => import('@/views/subCategory/index.vue')
                },
                {
                    path: '/detail/:id',
                    component: () => import('@/views/Detail/index.vue')
                }
            ]
        },
        {
            path: '/login',
            component: () => import('@/views/Login/index.vue')
        }
    ],

    //路由行为配置(切换路由时，自动滚动到顶部)
    scrollBehavior() {
        return {
            top: 0
        }
    }
})

export default router
