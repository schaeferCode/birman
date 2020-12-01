import BaseService from './BaseService';

class UserService extends BaseService {
  createUsersBatch(users) {
    return this.post('/users/batch-user-creation', { users });
  }

  createClientAdminUser(userInfo, userRole) {
    return this.post(`/users/${userRole}/create-client-admin`, userInfo);
  }

  createClientUser(userInfo, userRole) {
    return this.post(`/users/${userRole}/create-client-user`, userInfo);
  }

  createTenantAdminUser(userInfo) {
    return this.post('/users/create-tenant-admin', userInfo);
  }
}

export default new UserService();
