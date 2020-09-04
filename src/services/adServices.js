const axios = require('axios').default;
axios.defaults.baseURL = 'http://localhost:3000';

export default {
  linkGoogle: () => {
    return axios.get('/oauth/google');
  }
};
