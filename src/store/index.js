import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';

const debug = process.env.NODE_ENV !== 'production';

Vue.use(Vuex);

/* eslint-disable no-new */
export default new Vuex.Store({
  actions,
  getters,
  modules: {},
  strict: debug,
});
