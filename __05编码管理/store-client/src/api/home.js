/*
 * @Author: heinan 
 * @Date: 2019-12-30 09:09:58 
 * @Last Modified by: heinan
 * @Last Modified time: 2020-01-07 09:29:09
 */
import request from '@/utils/request';
import { BASE_URL } from "@/config";
const requestUrl = (url) => BASE_URL + url;

export const getCourselList = function () {
  const url = requestUrl('/getCarouselList?c_type=1');
  return request.get(url)
}
export const getTitleList = function () {
  const url = requestUrl('/goods/title');
  return request.get(url)
}
export const getGoodsList = function () {
  const url = requestUrl('/goods/list');
  return request.get(url)
}