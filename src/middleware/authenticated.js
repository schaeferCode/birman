import Auth from '@/services/auth';

export default (to, from, next) => {
  const isAuthenticated = Auth.verifyAndDecodeToken();
  const isPublicRoute = to.meta.publicRoute;

  if (isAuthenticated || isPublicRoute) next();
  else next('/login?tenant=eden-ads');
};
