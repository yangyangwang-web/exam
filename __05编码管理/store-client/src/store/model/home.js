/*
 * @Author: heinan 
 * @Date: 2019-12-23 18:41:39 
 * @Last Modified by: heinan
 * @Last Modified time: 2019-12-31 15:13:53
 */
import { GET_TITLE_LIST, GET_GOODS_LIST, UPDATE_GOODS_LIST, UPDATE_TITLE_LIST, UPDATE_CAROUSEL_LIST, GET_CAROUSEL_LIST } from '@/store/type';
import { getTitleList, getGoodsList, getCourselList } from "@/api/home";

export default {
  state: {
    titleList: [],
    goodsList: [],
    carouselList: [],

  },
  mutations: {
    UPDATE_TITLE_LIST(state, { payload }) {
      state.titleList = payload;
    },
    UPDATE_GOODS_LIST(state, { payload }) {
      state.goodsList = payload;
    },
    UPDATE_CAROUSEL_LIST(state, { payload }) {
      state.carouselList = payload;
    }
  },
  actions: {
    async GET_TITLE_LIST({ commit }) {
      const result = await getTitleList();
      commit({ type: 'UPDATE_TITLE_LIST', payload: result.data.result })
    },
    async GET_GOODS_LIST({ commit }) {
      const result = await getGoodsList();
      commit({ type: 'UPDATE_GOODS_LIST', payload: result.data.result })
    },
    async GET_CAROUSEL_LIST({ commit }) {
      const result = await getCourselList();
      commit({ type: 'UPDATE_CAROUSEL_LIST', payload: result.data.data })
    }
  }
}