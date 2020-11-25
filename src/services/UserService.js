import BaseService from './BaseService';

class UserService extends BaseService {
  createUsersBatch(users) {
    return this.post('/users/batch-user-creation', { users });
  }

  createUser(userInfo) {
    return this.post('/users/create', userInfo);
  }
}

export default new UserService();
