import BaseService from './BaseService';

class UserService extends BaseService {
  createUsersBatch(users) {
    return this.post('/users/batch-user-creation', { users });
  }

  createClientAdminUser(userInfo) {
    return this.post('/users/create-client-admin', userInfo);
  }

  createUser(userInfo) {
    return this.post('/users/create', userInfo);
  }
}

export default new UserService();
