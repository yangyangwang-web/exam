/*
 * @Author: heinan 
 * @Date: 2019-12-23 18:41:39 
 * @Last Modified by: heinan
 * @Last Modified time: 2019-12-31 09:29:54
 */
import { HEADER_STATUS, UPDATE_TOKEN, UPDATE_UID } from '@/store/type';
import { setSession } from '@/utils/';

export default {
  state: {
    user_token: "",
    user_id: ""
  },
  mutations: {
    UPDATE_TOKEN(state, { payload }) {
      console.log(payload)
      setSession('user_token', payload)
      state.user_token = payload;
    },
    UPDATE_UID(state, { payload }) {
      console.log(payload)
      state.user_id = payload;
      setSession('user_id', payload)
    }
  }
}