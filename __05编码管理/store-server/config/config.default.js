/*
 * @Author: heinan
 * @Date: 2019-12-30 08:59:27
 * @Last Modified by:   heinan
 * @Last Modified time: 2019-12-30 08:59:27
 */
'use strict';

const ms = require('ms');

module.exports = appInfo => {
  const config = exports = {};
  config.keys = appInfo.name + '_1575512963541_1794';
  config.middleware = [];
  const userConfig = {
    // 关闭csrf
    security: {
      csrf: false,
    },
    session: {
      key: 'SESSION_ID',
      maxAge: ms('1d'),
      httpOnly: true,
      encrypt: true,
      renew: true,
    },
    // 头像上传
    multipart: {
      mode: 'file',
    },
    // 数据库配置
    mysql: {
      client: {
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: '123321',
        database: 'db_1704c_store',
      },
      app: true,
      agent: false,
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
