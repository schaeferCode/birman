const axios = require('axios').default;
import JWT from 'jsonwebtoken';

axios.defaults.baseURL = process.env.VUE_BASE_URL || 'http://localhost:3000';

const AUTH_LOCAL_STORAGE = 'BIRMAN:AUTH:TOKEN';

export default {
  verifyAndDecodeToken: function() {
    try {
      const token = this.getToken();
      const decodedToken = JWT.verify(token, process.env.VUE_APP_JWT_SECRET);
      return decodedToken;
    } catch (error) {
      return false;
    }
  },

  login: ({ email, password, tenant }) => {
    return axios.post('/auth/login', {
      email,
      password,
      tenant
    });
  },

  getToken: () => {
    return JSON.parse(localStorage.getItem(AUTH_LOCAL_STORAGE));
  },

  setToken: token => {
    localStorage.setItem(AUTH_LOCAL_STORAGE, JSON.stringify(token));
  }
};
