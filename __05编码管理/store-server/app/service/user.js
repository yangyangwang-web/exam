/*
 * @Author: heinan
 * @Date: 2019-12-05 16:50:09
 * @Last Modified by: heinan
 * @Last Modified time: 2019-12-30 14:39:50
 */
'use strict';

const { Service } = require('egg');
const { userCreator, signPassword } = require('../utils');

class UserService extends Service {
  async login({ username, password }) {
    const $sql = 'select * from user where username=? and password=?';
    const myPassword = signPassword(password)
    const $params = [ username, myPassword ];
    const result = await this.app.mysql.query($sql, $params);
    return result;
  }
  async registry({ username = '', password = '' }) {
    const $sql = 'insert into user ( username, `password`,uid) values (?,?,?)';
    const uid = userCreator(username)
    const myPassword = signPassword(password);
    const $params = [ username, myPassword, uid ];
    const result = await this.app.mysql.query($sql, $params);
    return result;
  }
  async getUserList() {
    const $sql = 'select uid,username,age,gender,address,phone from user';
    return await this.app.mysql.query($sql);
  }
  async add({ address = '', gender = 0, password = '', phone = '', username = '', age = 100 }) {
    const $sql = 'insert into user ( username, `password`, gender, address, phone,age) values (?,?,?,?,?,?)';
    const $params = [ username, password, gender, address, phone, age ];
    return await this.app.mysql.query($sql, $params);
  }
  async update({ address = '', gender = 0, phone = '', username = '', age = 100, uid }) {
    const $sql = 'update user set address=?,gender=?,phone=?,username=?,age=? WHERE uid=?';
    const $params = [ address, gender, phone, username, age, uid ];
    return await this.app.mysql.query($sql, $params);
  }
  async delete(uid) {
    const $sql = 'delete from user where uid=?';
    const $params = [ uid ];
    return await this.app.mysql.query($sql, $params);
  }
}
module.exports = UserService;
