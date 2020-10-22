'use strict';

const { Service } = require('egg');
const { goodsCreator } = require('../utils');

class GoodsService extends Service {
  async list({ goods_type = 0 }) {
    const $sql = 'SELECT goods_id,`goods`.goods_type,`goods_type`.good_type_text,goods_img,goods_price,goods_title FROM `goods`,`goods_type` WHERE goods.goods_type=goods_type.goods_type AND goods.goods_type=?'
    return await this.app.mysql.query($sql, [ goods_type ])
  }
  async allList() {
    const $sql = 'SELECT goods_id,`goods`.goods_type,`goods_type`.good_type_text,goods_img,goods_price,goods_title FROM `goods`,`goods_type` WHERE goods.goods_type=goods_type.goods_type'
    return await this.app.mysql.query($sql)
  }
  async add({ goods_type = 0, goods_img, goods_desc, goods_title, goods_price }) {
    const goods_id = goodsCreator(goods_title);
    const $sql = 'insert into goods (goods_id,goods_type,goods_img,goods_desc,goods_title,goods_price) values (?,?,?,?,?,?)';
    const $params = [ goods_id, goods_type, goods_img, goods_desc, goods_title, goods_price ];
    return await this.app.mysql.query($sql, $params)
  }
  async edit({ goods_id, goods_type = 0, goods_img, goods_desc, goods_title, goods_price }) {
    const $sql = 'update goods set goods_type=?,goods_img=?,goods_desc=?,goods_title=?,goods_price=? where goods_id=?';
    const $params = [ goods_type, goods_img, goods_desc, goods_title, goods_price, goods_id ];
    return await this.app.mysql.query($sql, $params)
  }
  async delete({ id }) {
    const $sql = `delete from goods where goods_id=${id}`;
    return await this.app.mysql.query($sql)
  }
  async title() {
    return await this.app.mysql.select('goods_type')
  }
}

module.exports = GoodsService
