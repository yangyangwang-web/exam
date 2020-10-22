import axios from 'axios';
import { getSession } from '@/utils';

const request = axios.create({
  timeout: 3000
});

request.interceptors.request.use(
  config => {
    if (config.headers && !config.headers.authorization) {
      const token = getSession('userToken');
      config.headers.authorization = token;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
/* eslint indent: 0 */
request.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    const { status } = error.response;
    if (status === 401) {
      // message.error('没有权限', 3, () => {
      //   location.href = "/login"
      // })
    } else if (status === 403) {

    } else if (status <= 504 && status >= 500) {

    } else if (status >= 404 && status < 422) {

    }

    return Promise.reject(error);
  }
);

export default request;
