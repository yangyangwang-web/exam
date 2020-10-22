'use strict';

const { Controller } = require('egg');

class OrderController extends Controller {
  // 創建訂單
  async add() {
    const result = await this.ctx.service.order.add(this.ctx.request.body);
    console.log(result)
    this.ctx.body = {
      code: 1,
    }
    // if (result.affetchRow > 0) {
    //   this.ctx.body = {
    //     code: 1,
    //   }
    // } else {
    //   this.ctx.body = {
    //     code: 0,
    //   }
    // }
  }
}
module.exports = OrderController;
