'use strict';
const jwt = require('jsonwebtoken');
const md5 = require('md5');
const { TOKEN_SECRET } = require('../config');
const { ISS } = require('../utils');


exports.whiteList = [ '/user/login' ];

/**
 * @ tokenCreator
 * @ 根據用戶名，創建TOKEN
 * @ TOKEN_SECRET TOKEN的加密秘鑰
 */
module.exports.tokenCreator = function(user) {
  return jwt.sign(user, TOKEN_SECRET);
};

/**
 * @ orderCreatetor
 * @ 根據訂單擁有者，生成訂單id
 */
exports.orderCreatetor = function(order_name) {
  const orderId = JSON.stringify({
    iss: ISS,
    tim: new Date().getTime(),
    usr: order_name,
  })
  return md5(orderId)
}

/**
 * @ orderCreatetor
 * @ 根據訂單擁有者，生成訂單id
 */
exports.userCreator = function(order_name) {
  const userId = JSON.stringify({
    iss: ISS,
    tim: new Date().getTime(),
    usr: order_name,
  })
  return md5(userId)
}

/**
 * @ tokenVerify
 * @ TOKEN校驗
 */
exports.tokenVerify = function(token) {
  return new Promise((resovle, reject) => {
    jwt.verify(token, TOKEN_SECRET, (error, decode) => {
      if (error) {
        reject(error);
      } else {
        resovle(decode);
      }
    });
  });
};

/**
 * @ goodsCreator 根据商品名称生成商品唯一的id
 */
exports.goodsCreator = function(goods_name) {
  const goodsId = JSON.stringify({
    iss: ISS,
    tim: new Date().getTime(),
    usr: goods_name,
  })
  return md5(goodsId)
}
exports.signPassword = function(password) {
  return md5(password)
};
