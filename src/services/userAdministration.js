const axios = require('axios').default;
import Auth from './auth';

const Axios = axios.create({
  baseURL: 'http://localhost:3000',
  headers: { Authorization: `Bearer ${Auth.getToken()}` }
});

export default {
  createUsersBatch: users => {
    return Axios.post('/users/batch-user-creation', { users });
  }
};
