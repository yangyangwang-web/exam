'use strict';

const { Controller } = require('egg');
const { tokenCreator } = require('../utils');
const fs = require('fs');
const path = require('path');

class UserControll extends Controller {
  /**
   *@ 头像上传
   */
  async upload() {
    const file = this.ctx.request.files[0];
    const targetPath = path.join(process.cwd(), 'app/public', 'avatar', file.filename)
    const source = fs.readFileSync(path.join(file.filepath));
    const result = fs.writeFileSync(targetPath, source)
    if (result.affectedRows > 0) {
      this.ctx.body = {
        code: 1,
        msg: '图片上传成功',
        url: `public/avatar/${file.filename}`,
      }
    } else {
      this.ctx.body = {
        code: 1,
        msg: '图片上传失败！',
      }
    }

  }
  /**
   * @用户登录
   */
  async login() {
    const result = await this.ctx.service.user.login(this.ctx.request.body);
    if (result.length > 0) {
      const token = tokenCreator({
        uid: result[0].uid,
        tim: new Date().getTime(),
      });
      this.ctx.session.userToken = token;
      this.ctx.body = {
        code: 1,
        token,
        uid: result[0].uid,
      };
    } else {
      this.ctx.status = 401;
      this.ctx.body = {
        code: 0,
      };
    }

  }
  /**
   * @用户注册
   */
  async registry() {
    const result = await this.ctx.service.user.registry(this.ctx.request.body);
    if (result.affectedRows > 0) {
      this.ctx.body = {
        code: 1,
      };
    } else {
      this.ctx.status = 500;
      this.ctx.body = {
        code: 0,
        msg: '注册失败！',
      };
    }

  }
  /**
   * @ 获取用户列表
   */
  async getUserList() {
    const result = await this.ctx.service.user.getUserList();
    this.ctx.body = {
      code: 1,
      data: result,
    };
  }

  /**
   * @ 添加用户
   */
  async add() {
    const result = await this.ctx.service.user.add(this.ctx.request.body);
    if (result.affectedRows > 0) {
      this.ctx.body = {
        code: 1,
        msg: '添加成功！',
      };
    } else {
      this.ctx.body = {
        code: 0,
        msg: '添加失败！',
      };
    }
  }
  /**
   * @ 更新用户信息
   */
  async update() {
    const result = await this.ctx.service.user.update(this.ctx.request.body);
    if (result.affectedRows > 0) {
      this.ctx.body = {
        code: 1,
        msg: '更新成功！',
      };
    } else {
      this.ctx.body = {
        code: 0,
        msg: '更新失败！',
      };
    }
  }
  /**
   * @ 删除用户
   */
  async delete() {
    const { uid } = this.ctx.query;
    const result = await this.ctx.service.user.delete(uid);
    if (result.affectedRows > 0) {
      this.ctx.body = {
        code: 1,
        msg: '删除成功！',
      };
    } else {
      this.ctx.body = {
        code: 0,
        msg: '删除失败！',
      };
    }
  }
}

module.exports = UserControll;
