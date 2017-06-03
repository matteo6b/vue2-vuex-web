import axios from 'axios';

axios.defaults.baseURL = process.env.URL_API;

export default {
  all(cb, errCb) {
    axios.get('api/type/all')
      .then(response => cb(response)).catch(error => errCb(error));
  },

  get(id, cb, errCb) {
    axios.get(`api/type/${id}`)
    .then(res => cb(res)).catch(error => errCb(error));
  },

  create(params, cb, errCb) {
    axios.post('api/type/add', params).then(res => cb(res)).catch(error => errCb(error));
  },

  update(id, params, cb, errCb) {
    axios.put(`api/type/${id}/update`, params).then(res => cb(res)).catch(error => errCb(error));
  },

  remove(id, cb, errCb) {
    axios.delete(`api/type/${id}/delete`).then(res => cb(res)).catch(error => errCb(error));
  },
};
