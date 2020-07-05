import axios from 'axios'
import Vue from 'vue'

// 设置axiosbaseURL
axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5efdb7b1bdec161dc9c4082c/api'

// 请求拦截器
axios.interceptors.response.use(response => {
  return response.data.data
}, error => {
  return Promise.reject(error)
})

Vue.prototype.$http = axios
