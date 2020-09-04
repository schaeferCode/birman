import Auth from '@/services/auth';
import jwtDecode from 'jwt-decode';

export default {
  namespaced: true,

  state: () => ({
    isAuthenticated: false,
    user: {
      email: '',
      givenName: '',
      familyName: '',
      linkedAdServices: [],
      role: '',
      tenant: ''
    }
  }),

  getters: {
    isAuthenticated: state => {
      return state.isAuthenticated;
    },

    isAdmin: state => {
      return state.user.role.includes(['admin', 'root']);
    },

    tenant: state => {
      return state.user.tenant;
    }
  },

  mutations: {
    setIsAuthenticated(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated;
    },

    setUser(state, userData) {
      state.user = userData;
    }
  },

  actions: {
    async login({ commit }, { email, password, tenant }) {
      try {
        const response = await Auth.login({ email, password, tenant });
        // decode token data and set to store
        const decodedToken = jwtDecode(response.data.token);
        commit('setUser', decodedToken.data);
        commit('setIsAuthenticated', true);
      } catch (error) {
        // TODO: handle error in store properly
        console.log({ error });
      }
    }
  }
};
