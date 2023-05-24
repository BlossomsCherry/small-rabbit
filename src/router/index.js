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
            component: () => import('@/views/Layout/layout.vue'),
            //二级路由
            children: [
                {
                    path: 'home',
                    component: () => import('@/views/Home/home.vue')
                },
                {
                    path: 'category',
                    component: () => import('@/views/Category/CateGory.vue')
                }
            ]
        },
        {
            path: '/login',
            component: () => import('@/views/Login/login.vue')
        }
    ]
})

export default router
