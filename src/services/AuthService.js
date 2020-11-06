import BaseService from './BaseService';

class AuthService extends BaseService {
  login({ email, password }) {
    return this.post('/auth/login', { email, password });
  }
}

export default new AuthService();
