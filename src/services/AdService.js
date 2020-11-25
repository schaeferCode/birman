import BaseService from './BaseService';

class AdService extends BaseService {
  getAllClients() {
    return this.get('ad-services/get-all-clients');
  }

  getGoogleAdMetrics() {
    return this.get('/ad-services/get-google-ads-metrics');
  }

  getGoogleSubAccounts() {
    return this.get('/ad-services/get-sub-accounts');
  }

  linkGoogleServices() {
    return this.get('/ad-services/adwords/go');
  }
}

export default new AdService();
