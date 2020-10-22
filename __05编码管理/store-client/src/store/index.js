/*
 * @Author: heinan 
 * @Date: 2019-12-23 18:39:50 
 * @Last Modified by: heinan
 * @Last Modified time: 2019-12-31 15:10:55
 */
import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import app from './model/app';
import user from './model/user';
import home from './model/home';

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    user,
    home,
  }
})

export default store;