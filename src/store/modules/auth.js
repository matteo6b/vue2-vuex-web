import auth from './../../api/auth-api';
import * as types from './../mutation-types';

const state = {
  user: {
    email: '',
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
    //dispatch('error/addNew', { message: 'username' }, { root: true });
    return new Promise((resolve, reject) => {
      auth.register({
        email: state.user.email,
        password: state.user.password,
      }, (res) => { resolve(res); commit(); }, (err) => { reject(err); });
    });
  },
  login({ dispatch, commit },{router}) {
  //  dispatch('error/addNew', { message: 'username' }, { root: true });

    return new Promise((resolve, reject) => {
      auth.login({
        email: state.user.email,
        password: state.user.password,
      }, (res) => { resolve(res); commit(types.AUTH_LOGIN_SUCCESS, { result: res,router:router });  }, (err) => { reject(err); });
    });
  },
  updateValues({ commit }, { value, type }) {
    console.log(value,type);
    commit('MODIFY_USER', {value, type});
  },

  logout({commit}) {
      commit('LOGOUT')
  }
};

// mutations
const mutations = {
  [types.AUTH_LOGIN_FAILURE](state) {
    state.isAuthenticating = false;
  },
  [types.AUTH_LOGIN_SUCCESS](state,result) {
    localStorage.setItem('token', result.result.data.token);
    state.token = result.result.data.token;
    result.router.push({name: 'Main'});
    localStorage.setItem('profile', result.result.data.user.email);

    state.isAuthenticating = false;
  },
  [types.AUTH_MODIFY_USER](state,{value,type}){
    state.user[type]=value;
  },
  [types.AUTH_LOGOUT](state) {
    console.log("hola")
      localStorage.removeItem('profile');
      localStorage.removeItem('token');
      state.token = null
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
