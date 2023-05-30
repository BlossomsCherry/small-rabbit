import { createApp } from 'vue'

import App from './App.vue'
import pinia from './store'
import router from './router'

import 'normalize.css'
import './assets/css/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

createApp(App).use(pinia).use(router).use(ElementPlusIconsVue).mount('#app')
