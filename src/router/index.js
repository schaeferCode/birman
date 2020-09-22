import Vue from 'vue';
import VueRouter from 'vue-router';

import authenticated from '../middleware/authenticated';

import Home from '../views/Home';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home, // load sync home
    default: true
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      layout: 'login-layout',
      publicRoute: true
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Login')
  },
  {
    path: '/login/forgot-password',
    name: 'ForgotPassword',
    meta: {
      layout: 'login-layout',
      publicRoute: true
    },
    component: () => import('../views/ForgotPassword')
  },
  {
    path: '/ad-services/oauth/google',
    redirect: () => {
      window.location.href = 'http://localhost:3000/ad-services/oauth/google';
    }
  },
  {
    path: '/user-administration',
    component: () => import('../views/UserAdministration')
  },
  {
    path: '/user-administration/add-users-batch',
    component: () => import('../views/UserAdministration/AddUsersBatch')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach(authenticated);

export default router;
