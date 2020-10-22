'use strict';
const path = require('path');
const fs = require('fs');
const routerList = ["/home", "/home/student/list", '/score', '/user/login'];

module.exports = () => {
  return async function staticRouter(ctx, next) {
    //当前请求地址
    const curl = ctx.request.url;
    //判断当前请求是前端请求还是后端请求
    if (routerList.includes(curl)) {
      const appPath = path.join(process.cwd(), 'app/public', 'index.html');
      const filedata = fs.readFileSync(appPath, 'UTF-8');
      ctx.body = filedata;
    } else {
      await next();
    }
  };
};
