// 配置请求对象
import axios from 'axios'
// 本地调试 dev 开发阶段
export const baseUrl = "http://localhost:3300";
// product 阶段
const axiosInstance = axios.create({
    baseURL: baseUrl
})

// 响应拦截器
axiosInstance.interceptors.response.use(
    res => res.data,
    err => {
        console.log(err, '网络错误~')
    }
)

export { axiosInstance }