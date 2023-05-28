import axios from 'axios'
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'

const httpInstance = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000
})

//请求拦截器
httpInstance.interceptors.request.use(
    config => {
        return config
    },
    err => {
        return err
    }
)

//响应拦截器
httpInstance.interceptors.response.use(
    config => {
        return config
    },
    err => {
        //统一错误提示
        ElMessage.error(err.response.data.message)
        return err
    }
)

export default httpInstance
