const axios = require('axios').default;
import Auth from './auth';

const Axios = axios.create({
  baseURL: 'http://localhost:3000',
  headers: { Authorization: `Bearer ${Auth.getToken()}` }
});

export default {
  getGoogleSubAccounts: managerId => {
    return Axios.post('/ad-services/get-sub-accounts', { managerId });
  },

  linkGoogleServices: () => {
    return Axios.get('/ad-services/adwords/go');
  }
};
