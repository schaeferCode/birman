import BaseService from './BaseService';

class AdService extends BaseService {
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
