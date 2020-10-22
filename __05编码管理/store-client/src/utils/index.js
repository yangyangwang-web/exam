/*
 * @Author: heinan 
 * @Date: 2019-12-30 09:15:48 
 * @Last Modified by:   heinan 
 * @Last Modified time: 2019-12-30 09:15:48 
 */
export function getSession(key) {
  return sessionStorage.getItem(key)
}
export function setSession(key, val) {
  sessionStorage.setItem(key, val)
}
