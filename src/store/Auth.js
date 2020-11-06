import AuthService from '@/services/AuthService';

export default {
  namespaced: true,

  state: () => ({
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
    isAdmin: state => {
      return state.user.role.includes(['admin', 'root']);
    },

    tenant: state => {
      return state.user.tenant;
    }
  },

  mutations: {
    setUser(state, userData) {
      state.user = userData;
    }
  },

  actions: {
    async login({ commit }, { email, password }) {
      try {
        const response = await AuthService.login({ email, password });
        // set token to localStorage
        AuthService.token = response.data.token;
        // decode token data and set to store
        const decodedToken = AuthService.verifyAndDecodeToken();
        const userData = {
          email: decodedToken.email,
          givenName: decodedToken.givenName,
          familyName: decodedToken.familyName,
          linkedAdServices: decodedToken.linkedAdServices,
          role: decodedToken.role
        };
        commit('setUser', userData);
      } catch (error) {
        // TODO: handle error in store properly
        console.log({ error });
      }
    }
  }
};
