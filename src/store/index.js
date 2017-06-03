import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth';
import types from './modules/types';
import error from './modules/error';
import * as actions from './actions';
import * as getters from './getters';

const debug = process.env.NODE_ENV !== 'production';

Vue.use(Vuex);

/* eslint-disable no-new */
export default new Vuex.Store({
  actions,
  getters,
  modules: {
    auth,
    error,
    types,
  },
  strict: debug,
});
