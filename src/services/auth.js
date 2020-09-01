const axios = require('axios').default;
axios.defaults.baseURL = 'http://localhost:3000';

export default {
  login: async ({ email, password, tenant }) => {
    return axios.post('/auth/login', {
      email,
      password,
      tenant
    });
  }
};