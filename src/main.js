import { createApp } from 'vue'

import App from './App.vue'
import pinia from './store'
import router from './router'

import 'normalize.css'
import './assets/css/index.css'
import './assets/fonts/iconfont.css'

createApp(App).use(pinia).use(router).mount('#app')
