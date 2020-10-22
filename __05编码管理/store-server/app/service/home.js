'use strict';

const { Service } = require('egg');

class HomeService extends Service {
  async getCarouselList() {
    const $sql = 'select * from carousel';
    return this.app.mysql.query($sql);
  }
  async getCarouselListByType(type = 1) {
    const $sql = `select * from carousel where c_type=${type}`;
    return this.app.mysql.query($sql);
  }
}
module.exports = HomeService;
