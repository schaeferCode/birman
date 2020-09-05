const axios = require('axios').default;
import JWT from 'jsonwebtoken';

axios.defaults.baseURL = 'http://localhost:3000';

const AUTH_LOCAL_STORAGE = 'BIRMAN:AUTH:TOKEN';

const getToken = () => {
  return JSON.parse(localStorage.getItem(AUTH_LOCAL_STORAGE));
};

export default {
  verifyAndDecodeToken: function() {
    try {
      const token = getToken();
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

  setToken: token => {
    localStorage.setItem(AUTH_LOCAL_STORAGE, JSON.stringify(token));
  }
};
