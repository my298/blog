// request.js
const request = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com', // 用假 API 测试
  timeout: 5000
});

// 请求拦截器
request.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = 'Bearer ' + token;
    }
    config.headers['Content-Type'] = 'application/json';
    return config;
  },
  error => Promise.reject(error)
);

// 响应拦截器
request.interceptors.response.use(
  response => {
    return response.data; // 直接返回数据部分
  },
  error => {
    alert('请求失败：' + error.message);
    return Promise.reject(error);
  }
);

// 通用封装方法
const http = {
  get: (url, params = {}) => request.get(url, { params }),
  post: (url, data = {}) => request.post(url, data),
  put: (url, data = {}) => request.put(url, data),
  delete: url => request.delete(url)
};
