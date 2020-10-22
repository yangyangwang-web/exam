/*
 * @Author: heinan 
 * @Date: 2019-12-23 18:41:39 
 * @Last Modified by: heinan
 * @Last Modified time: 2020-01-02 14:52:43
 */
import { HEADER_STATUS, ADD_CART } from '@/store/type';
import { Dialog } from 'vant';
export default {
  state: {
    HEADER_STATUS: true,
    shopcarts: []
  },
  mutations: {
    HEADER_STATUS(state, { payload }) {
      state.HEADER_STATUS = payload;
    },
    ADD_CART(state, { payload }) {
      state.shopcarts = payload
    }
  }
}