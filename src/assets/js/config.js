import axios from "axios";
//axios.defaults.baseURL = "http://115.159.160.93:8080";
//axios.defaults.baseURL ="http://xzserver.applinzi.com"
axios.defaults.baseURL ="http://localhost:5050";
//axios.defaults.baseURL = "api";
axios.defaults.withCredentials = true;

import { Indicator } from 'mint-ui';
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    Indicator.open({
        text: 'Loading...',
        spinnerType: 'fading-circle'
    });
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    Indicator.close();
    return response;
  }, function (error) {
    // 对响应错误做点什么
    Indicator.close();
    return Promise.reject(error);
  });

export { axios };
