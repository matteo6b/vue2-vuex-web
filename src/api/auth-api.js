import axios from 'axios';

axios.defaults.baseURL = process.env.URL_API;

export default {
  register(params, cb, errCb) {
    axios.post('/auth/local/register', params)
      .then(response => cb(response)).catch(error => errCb(error));
  },
  login(params, cb, errCb) {
    axios.post('/auth/local/', params)
      .then(response => cb(response)).catch(error => errCb(error));
  },

};
