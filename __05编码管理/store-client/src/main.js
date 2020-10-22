/*
 * @Author: heinan 
 * @Date: 2019-12-30 09:06:00 
 * @Last Modified by: heinan
 * @Last Modified time: 2019-12-30 09:52:48
 */
import Vue from 'vue';
import App from '@/containers/App';
import router from '@/router';
import store from '@/store';
import Vant, { Lazyload } from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
Vue.use(Lazyload);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
