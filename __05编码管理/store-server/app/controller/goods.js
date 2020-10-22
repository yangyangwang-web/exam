'use strict';

const { Controller } = require('egg');

class GoodsController extends Controller {
  async list() {

    const result = this.ctx.query.goods_type === undefined ?
      await this.ctx.service.goods.allList() :
      await this.ctx.service.goods.list(this.ctx.query)
    this.ctx.body = {
      code: 1,
      result,
    }
  }
  async add() {
    const result = await this.ctx.service.goods.add(this.ctx.request.body)
    if (result.affectedRows > 0) {
      this.ctx.body = {
        code: 1,
        msg: '添加成功！',
      }
    } else {
      this.ctx.body = {
        code: 0,
        msg: '添加失败！',
      }
    }

  }
  async edit() {
    const result = await this.ctx.service.goods.edit(this.ctx.request.body)
    if (result.affectedRows > 0) {
      this.ctx.body = {
        code: 1,
        msg: '编辑成功！',
      }
    } else {
      this.ctx.body = {
        code: 0,
        msg: '编辑失败！',
      }
    }
  }
  async delete() {
    const result = await this.ctx.service.goods.delete(this.ctx.query)
    if (result.affectedRows > 0) {
      this.ctx.body = {
        code: 1,
        msg: '删除成功！',
      }
    } else {
      this.ctx.body = {
        code: 1,
        msg: '删除失败！',
      }
    }
  }
  async title() {
    const result = await this.ctx.service.goods.title();
    if (result.length > 0) {
      this.ctx.body = {
        code: 1,
        result,
      }
    } else {
      this.ctx.body = {
        code: 0,
        msg: '暂无数据！',
      }
    }
  }
}
module.exports = GoodsController;
