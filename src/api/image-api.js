import axios from 'axios';

export default{
  create(params, cb, errCb) {
    axios.post('images', params).then(res => cb(res)).catch(error => errCb(error));
  },

};
