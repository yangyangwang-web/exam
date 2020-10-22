/*
 * @Author: heinan
 * @Date: 2020-01-07 09:27:07
 * @Last Modified by: heinan
 * @Last Modified time: 2020-01-07 09:28:35
 */
'use strict';

const { Controller } = require('egg');

class HomeController extends Controller {
  async getCarouselList() {
    const { query, service } = this.ctx;
    const result = query.c_type === undefined ? await service.home.getCarouselList() : await service.home.getCarouselListByType(query.c_type);
    if (result.length > 0) {
      this.ctx.body = {
        code: 1,
        data: result,
      }
    } else {
      this.ctx.body = {
        code: 0,
        msg: '暂无数据！',
      }
    }

  }
}
module.exports = HomeController;
