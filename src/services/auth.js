const axios = require('axios').default;
import JWT from 'jsonwebtoken';

axios.defaults.baseURL = process.env.VUE_APP_SERVER_URL || 'http://localhost:3000';

const AUTH_LOCAL_STORAGE = 'BIRMAN:AUTH:TOKEN';

export default {
  verifyAndDecodeToken: function() {
    try {
      const token = this.getToken();
      const decodedToken = JWT.decode(token);
      return decodedToken;
    } catch (error) {
      return false;
    }
  },

  login: ({ email, password }) => {
    return axios.post('/auth/login', {
      email,
      password
    });
  },

  getToken: () => {
    return JSON.parse(localStorage.getItem(AUTH_LOCAL_STORAGE));
  },

  setToken: token => {
    localStorage.setItem(AUTH_LOCAL_STORAGE, JSON.stringify(token));
  }
};
