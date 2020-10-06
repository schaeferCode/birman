const axios = require('axios').default;
import Auth from './auth';

// TODO: fix axios instances to be a class; this implementation creates a bug with tokens being stale
const Axios = axios.create({
  baseURL: 'http://localhost:3000',
  headers: { Authorization: `Bearer ${Auth.getToken()}` }
});

export default {
  getGoogleAdMetrics: () => {
    return Axios.get('/ad-services/get-google-ads-metrics');
  },

  getGoogleSubAccounts: () => {
    return Axios.get('/ad-services/get-sub-accounts');
  },

  linkGoogleServices: () => {
    return Axios.get('/ad-services/adwords/go');
  }
};
