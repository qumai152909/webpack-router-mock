import axios from 'axios';
import { notification } from 'antd';

// 创建axios实例
const axiosInstance = axios.create({

});
// baseURL: `${__HOST}`,

axiosInstance.defaults.timeout = 30000; // 请求超时时间
axiosInstance.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'; // todo ???


// http request 拦截器
axiosInstance.interceptors.request.use(
  req => {
    // 在发送请求之前做处理...
    Object.assign(req.headers.common, {
      // ...
    });
    return req;
  },
  // 对请求错误做处理...
  error => Promise.reject(error)
);


// 实例添加响应拦截器
axiosInstance.interceptors.response.use(
  res => {
    // 对响应数据做处理...
    if (res.status !== 200) {
      notification.error({
        message: `${res.data.title}失败`,
      });

      return Promise.reject(res);
    } else if (!res.data.success) {
      notification.error({
        message: `${res.data.title}错误：${res.data.message}`,
      });

      return Promise.reject(res);
    }
    return res;
  },
  error => {
    // 对响应错误做处理...
    // console.log(error);
    
    // if (error.response.status > 400) {
    // router.push('/ErrorPage?code=' + error.response.status);
    // } else {
    // router.push('/ErrorPage?code=500'); // todo 暂时注释掉
    // }
    return Promise.reject(error);
  }
);

export default function axiosTool(config) {
  const defaultConfig = {
    method: 'get',
    title: '请求',
  };
  let newConfig = { ...defaultConfig, ...config };
  
  // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
  // `transformRequest` 允许在向服务器发送前，修改请求数据
  if (!newConfig.transformResponse) { // `transformRequest` 允许在向服务器发送前，修改请求数据
    newConfig.transformResponse = [];
  }
  Array.isArray(newConfig.transformResponse) &&
  newConfig.transformResponse.push(data => ({
    ...JSON.parse(data),
    title: newConfig.title,
  }));

  return axiosInstance(newConfig).catch(function(res) {
    return res;
  });
}
