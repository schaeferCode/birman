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

  createTenantAdminUser(userInfo, userRole) {
    return this.post(`/users/${userRole}/create-tenant-admin`, userInfo);
  }

  editUser(userInfo, userRole) {
    return this.patch(`/users/${userRole}/edit-user`, userInfo);
  }

  getAllUsers(userRole) {
    return this.get(`/users/${userRole}`);
  }
}

export default new UserService();
