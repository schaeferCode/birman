import BaseService from './BaseService';

class UserService extends BaseService {
  createUsersBatch(users) {
    return this.post('/users/batch-user-creation', { users });
  }
}

export default new UserService();
