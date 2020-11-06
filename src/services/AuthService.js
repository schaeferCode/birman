import BaseService from './BaseService';

export default class AuthService extends BaseService {
  login({ email, password }) {
    return this.post('/auth/login', { email, password });
  }
}
