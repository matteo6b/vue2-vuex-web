import auth from './../../api/auth-api';
import * as types from './../mutation-types';

const state = {
  user: {
    username: '',
    password: '',
    password2: '',
  },
  isAuthenticating: false,
  token: localStorage.getItem('token') || null,
};
const getters = {
  isAuthenticated: (state) => {
      // console.log('isAuthenticated ...', state.userId, state.token)
      return (!!state.token);
  },
  getUser: (state) => {
      return state.user;
  },

};
// actions
const actions = {
  register({ dispatch, commit }) {
    dispatch('error/addNew', { message: 'username' }, { root: true });
    return new Promise((resolve, reject) => {
      auth.register({
        username: state.user.username,
        password: state.user.password,
      }, (res) => { resolve(res); commit(); }, (err) => { reject(err); });
    });
  },
  login({ dispatch, commit }) {
    dispatch('error/addNew', { message: 'username' }, { root: true });
    console.log("hola")
    return new Promise((resolve, reject) => {
      auth.register({
        username: state.user.username,
        password: state.user.password,
      }, (res) => { resolve(res); commit('LOGIN_SUCCES', { result: res }); }, (err) => { reject(err); });
    });
  },
  updateValues({ commit }, { value, type }) {
    console.log(value,type);
    commit('MODIFY_USER', {value, type});
  },
};

// mutations
const mutations = {
  [types.AUTH_LOGIN_FAILURE](state) {
    state.isAuthenticating = false;
  },
  [types.AUTH_LOGIN_SUCCESS](state,result) {
    localStorage.setItem('token', result.token);
    state.token = result.token;
    state.profile = result.profile;
    state.isAuthenticating = false;
  },
  [types.AUTH_MODIFY_USER](state,{value,type}){
    state.user[type]=value;
  },
};

export default {
  namespaced: true,
  strict: process.env.NODE_ENV !== 'production',
  getters,
  state,
  actions,
  mutations,
};
