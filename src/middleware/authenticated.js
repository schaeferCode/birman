// import AuthServices from '../services/AuthServices';
// import isAuthenticated from store

export default (to, from, next) => {
  const isAuthenticated = false;
  if (to.name !== "Login" && !isAuthenticated) next({ name: "Login" });
  else next();
};
