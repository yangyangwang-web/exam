/*
 * @Author: heinan
 * @Date: 2019-12-30 08:59:22
 * @Last Modified by:   heinan
 * @Last Modified time: 2019-12-30 08:59:22
 */
'use strict';

module.exports = {
  // 开启静态资源服务器
  static: {
    enable: true,
  },
  session: true,
  mysql: {
    enable: true,
    package: 'egg-mysql',
  },
};
