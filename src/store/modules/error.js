import * as types from './../mutation-types';

// initial state
const state = {
  errors: [],
};

// getters
const getters = {
  hasError() {
    return state.errors.length > 0;
  },

  error() {
    if (getters.hasError) {
      return state.errors[0];
    }
    return '';
  },
};

// actions
const actions = {
  addNew({ commit }, { message }) {
    commit(types.ERROR_ADD_NEW, { message });
  },

  clearAll({ commit }) {
    commit(types.ERROR_CLEAR_ALL);
  },
};

// mutations
const mutations = {
  [types.ERROR_ADD_NEW]({ message }) {
    state.errors.push(message);
  },

  [types.ERROR_CLEAR_ALL]() {
    for (let i = state.errors.length; i > 0; i--) {
      state.errors.pop();
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
