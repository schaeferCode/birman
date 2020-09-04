import store from '@/store';

export default (to, from, next) => {
  const isAuthenticated = store.getters['Auth/isAuthenticated'];
  const isPublicRoute = to.meta.publicRoute;

  if (isAuthenticated || isPublicRoute) next();
  else next('/login?tenant=eden-ads');
};
