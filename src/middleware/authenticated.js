import AuthService from '@/services/AuthService';

export default (to, from, next) => {
  const isAuthenticated = AuthService.verifyAndDecodeToken();
  const isPublicRoute = to.meta.publicRoute;

  if (isAuthenticated || isPublicRoute) next();
  else next(`/login`);
};
