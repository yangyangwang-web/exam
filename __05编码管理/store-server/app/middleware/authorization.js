'use strict';
const { tokenVerify, whiteList } = require('../utils');
const whiteListFlag = false;

module.exports = () => {
  return async function authorization(ctx, next) {
    const curl = ctx.request.url;
    if (!whiteList.includes(curl) && whiteListFlag) {
      if (ctx.session.userToken === undefined) {
        ctx.status = 401;
        ctx.body = {
          code: 0,
          msg: '登录超时！',
        };
      } else if (!ctx.request.headers.authorization) {
        ctx.status = 401
        ctx.body = {
          code: 0,
          msg: '请登录！',
        };
      } else {
        const serverToken = ctx.session.userToken;
        const clientToken = ctx.request.headers.authorization;
        if (serverToken === clientToken) {
          await next();
        } else {
          ctx.status = 401
          ctx.body = {
            code: 0,
            msg: '登录失效！'
          };
        }

      }
    } else {
      await next();
    }
  };
};
