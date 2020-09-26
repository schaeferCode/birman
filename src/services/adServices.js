const axios = require('axios').default;
import Auth from './auth';

const Axios = axios.create({
  baseURL: 'http://localhost:3000',
  headers: { Authorization: `Bearer ${Auth.getToken()}` }
});

export default {
  getGoogleSubAccounts: () => {
    return Axios.get('/ad-services/get-sub-accounts');
  },

  linkGoogleServices: () => {
    return Axios.get('/ad-services/adwords/go');
  }
};
