import axios from 'axios';

axios.defaults.baseURL = process.env.URL_API;

export default {
  search(params, cb, errCb) {
    axios.post('api/v1/user', params)
      .then(response => cb(response)).catch(error => errCb(error));
  },

  get(id, params, cb, errCb) {
    axios.get(`api/v1/user/ ${id}`, params)
    .then(res => cb(res)).catch(error => errCb(error));
  },

  create(params, cb, errCb) {
    axios.post('api/v1/user', params).then(res => cb(res)).catch(error => errCb(error));
  },

  update(id, params, cb, errCb) {
    axios.put(`api/v1/user/ ${id}`, params).then(res => cb(res)).catch(error => errCb(error));
  },

  remove(id, cb, errCb) {
    axios.delete(`api/v1/user/ ${id}`).then(res => cb(res)).catch(error => errCb(error));
  },
};
