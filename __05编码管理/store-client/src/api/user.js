import request from '@/utils/request';
import { BASE_URL } from "@/config";
const requestUrl = (url) => BASE_URL + url;


export function userLogin({ username, password }) {
  const url = requestUrl('/user/login');
  return request.post(url, {
    username, password
  })
}