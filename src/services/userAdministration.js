const axios = require('axios').default;
import AuthService from './AuthService';

const Axios = axios.create({
  baseURL: process.env.VUE_APP_SERVER_URL || 'http://localhost:3000',
  headers: { Authorization: `Bearer ${AuthService.token}` }
});

export default {
  createUsersBatch: users => {
    return Axios.post('/users/batch-user-creation', { users });
  }
};
