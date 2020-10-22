'use strict';

const { Service } = require('egg');
const { orderCreatetor } = require('../utils');
const { INIT_ORDER_STATUS } = require('../config');

class OrderService extends Service {
  async add({ order_list, order_start_time, order_end_time, order_name, order_address, order_phone }) {
    const order_id = orderCreatetor(order_name);
    const order_status = INIT_ORDER_STATUS;
    const $sql = 'INSERT INTO `order` (order_id, order_status,order_list,order_start_time,order_end_time,order_name,order_address,order_phone) VALUES (?,?,?,?,?,?,?,?)';
    const $params = [ order_id, order_status, order_list, order_start_time, order_end_time, order_name, order_address, order_phone ];
    return await this.app.mysql.query($sql, $params)
  }
}

module.exports = OrderService
