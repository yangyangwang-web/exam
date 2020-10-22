/*
 * @Author: heinan
 * @Date: 2019-12-13 16:40:44
 * @Last Modified by: heinan
 * @Last Modified time: 2020-01-07 09:28:20
 */
'use strict';
module.exports = app => {
  const { router, controller } = app;
  /**
   * @ 用户认证
   */
  router.post('/user/login', controller.user.login);
  router.post('/user/registry', controller.user.registry);
  router.post('/user/add', controller.user.add);
  router.post('/user/update', controller.user.update);
  router.get('/user/delete', controller.user.delete);
  router.post('/user/upload', controller.user.upload)
  router.get('/getCarouselList', controller.home.getCarouselList)
  router.post('/order/add', controller.order.add)
  router.get('/goods/list', controller.goods.list);
  router.post('/goods/add', controller.goods.add);
  router.post('/goods/edit', controller.goods.edit);
  router.get('/goods/delete', controller.goods.delete);
  router.get('/goods/title', controller.goods.title)
};
