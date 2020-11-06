const axios = require('axios').default;
import AuthService from './AuthService';

// TODO: fix axios instances to be a class; this implementation creates a bug with tokens being stale
const Axios = axios.create({
  baseURL: process.env.VUE_APP_SERVER_URL || 'http://localhost:3000',
  headers: { Authorization: `Bearer ${AuthService.token}` }
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
