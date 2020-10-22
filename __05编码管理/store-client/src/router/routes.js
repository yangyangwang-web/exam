/*
 * @Author: heinan 
 * @Date: 2019-12-23 19:10:19 
 * @Last Modified by: heinan
 * @Last Modified time: 2019-12-31 09:04:15
 */
export default [
  {
    path: '/',
    redirect: '/user/login'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/containers/home')
  },
  {
    path: '/user/login',
    name: 'Login',
    component: () => import('@/containers/user/login')
  }, {
    path: '/type',
    name: 'Type',
    component: () => import('@/containers/type')
  }, {
    path: '/cart',
    name: 'Cart',
    component: () => import('@/containers/cart')
  },
  {
    path: '/mine',
    name: 'Mine',
    component: () => import('@/containers/mine')
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('@/components/error/404')
  },
  {
    path: '/500',
    name: 'ServerError',
    component: () => import('@/components/error/500')
  }, {
    path: '*',
    redirect: '/404'
  }
]