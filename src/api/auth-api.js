import axios from 'axios';

axios.defaults.baseURL = process.env.URL_API;
// axios.defaults.headers.common.Authorization = localStorage.getItem('token');

export default {
  register(params, cb, errCb) {
    axios.post('api/auth/register', params)
      .then(response => cb(response)).catch(error => errCb(error));
  },
  login(params, cb, errCb) {
    axios.post('api/auth/login', params)
      .then(response => cb(response)).catch(error => errCb(error));
  },

};
