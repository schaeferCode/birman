import AuthService from '@/services/AuthService';
import store from '@/store';

export default (to, from, next) => {
  const user = AuthService.user;
  const isPublicRoute = to.meta.publicRoute;

  if (user || isPublicRoute) {
    store.commit('Auth/setUser', user);
    next();
  } else next(`/login`);
};
