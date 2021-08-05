import axios from "axios";
export function request(config) {
  //1.创建axios实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8080',
    timeout: 5000
  })

  //2.axios拦截器
  // 2.1 请求拦截
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err);
  })

  //2.2 相应拦截
  instance.interceptors.response.use(res => {
    return res.data
  },err => {
    console.log(err);
  })

  // 3. 发送网络请求
  return instance(config)
}