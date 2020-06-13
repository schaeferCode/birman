import store from "@/store";

export default (to, from, next) => {
  next()
  // const isAuthenticated = store.getters["auth/isAuthenticated"];
  // const isPublicRoute = to.meta.publicRoute;

  // if (isAuthenticated || isPublicRoute) return next();
  // next("/login");
};
