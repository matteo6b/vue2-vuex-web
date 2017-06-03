import Type from './../../api/type-api';
import * as types from './../mutation-types';

const state = {
    all:[],
    type:{
      name:'',
    }
};
const getters = {
  getType: (state) => {
      return state.type;
  },
  getAll: (state) => {
      return state.all;
  },

};
// actions
const actions = {
  all({ dispatch, commit }) {
    //dispatch('error/addNew', { message: 'username' }, { root: true });
    return new Promise((resolve, reject) => {
      Type.all((res) =>
      { console.log(res); commit(types.GET_ALL_TYPES,res.data); resolve(res); },
       (err) => { reject(err); });
    });
  },
  get({ dispatch, commit },id) {
    //dispatch('error/addNew', { message: 'username' }, { root: true });
    return new Promise((resolve, reject) => {
      Type.get(id, (res) =>
       { console.log(res); commit(types.GET_TYPE,res.data); resolve(res); },
       (err) => { reject(err); });
    });
  },
  update({ dispatch, commit },{ id,type,router }) {
    //dispatch('error/addNew', { message: 'username' }, { root: true });
    return new Promise((resolve, reject) => {
      Type.update(id,{ name:type.name }, (res) =>
       {  router.push({name: 'types'}); resolve(res); },
       (err) => { reject(err); });
    });
  },
  create({ dispatch, commit },{type,router}) {
    //dispatch('error/addNew', { message: 'username' }, { root: true });
    return new Promise((resolve, reject) => {
      Type.create({ name:type.name }, (res) =>
       { router.push({name: 'types'}); resolve(res); },
       (err) => { reject(err); });
    });
  },
  delete({dispatch,commit},{id,index}){
    return new Promise((resolve, reject) => {
      Type.remove(id,(res) =>
      { commit(types.DELETE_TYPES,index); resolve(res); },
       (err) => {  reject(err); });
    });
  },
  updateValues({ commit }, { value, type }) {
    commit('MODIFY_TYPE', {value, type});
  },
};

// mutations
const mutations = {
  [types.GET_ALL_TYPES](state,all) {
    state.all = all;
  },
  [types.GET_TYPE](state,data){
      state.type = data;
    },
    [types.MODIFY_TYPE](state,{value, type}){
        state.type[type] = value;
      },
  [types.DELETE_TYPES](state,index){
    state.all = state.all.splice(index, 1);
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
