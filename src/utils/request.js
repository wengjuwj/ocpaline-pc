import axios from "axios";
import { notification } from "ant-design-vue";
import { VueAxios } from './axios'
// import { config } from "vue/types/umd";
// import { response } from "express";

//创建axios实例
const request=axios.create({
  // API请求的默认前缀
  baseURL:process.env.VUE_APP_API_BASE_URL,
  timeout:6000//请求超时时间
})
// 异常拦截处理器
const errorHandler=(error)=>{
  if(error.response){
    const data=error.response.data;
    // 从localStorage 获取token
    // const token = storage.get(ACCESS_TOKEN)
    if(error.response.status===403){
      notification.error({
        message:'Forbidden',
        description:data.message
      })
    }
    // 401
    if(error.response.status===401&&!(data.result&&data.result.isLogin)){
      notification.error({
        message:'Unauthorized',
        description:'Authorization verification failed'
      })
      // if (token) {
      //   store.dispatch('Logout').then(() => {
      //     setTimeout(() => {
      //       window.location.reload()
      //     }, 1500)
      //   })
      // }
    }
  }
  
  return Promise.reject(error)
}
// request interceptor(请求拦截器)
request.interceptors.request.use(config=>{
  // const token=storage.get(ACCESS_TOKEN)
  // 如果token存在
  // // 让每个请求携带自定义token
  // if(token){
  //   config.headers['Access-Token']=token
  // }
  return config

},errorHandler)
// response interceptor(响应拦截器)
request.interceptors.response.use((response)=>{
  return response.data
},errorHandler)

const installer = {
  vm: {},
  install (Vue) {
    Vue.use(VueAxios, request)
  }
}

export default request

export {
  installer as VueAxios,
  request as axios
}