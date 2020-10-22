/*
 * @Author: heinan 
 * @Date: 2019-12-23 16:31:56 
 * @Last Modified by: heinan
 * @Last Modified time: 2019-12-23 19:10:34
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes';
import Store from '@/store';
import { SHOW_HEAD_WHITELIST } from '@/config';

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  //判断即将跳转的也面是不是登录页
  if (SHOW_HEAD_WHITELIST.includes(to.path)) {
    //更改状态管理中的HEADER_STATUS属性的值
    Store.commit({ type: 'HEADER_STATUS', payload: false })
  }
  next()
});
export default router