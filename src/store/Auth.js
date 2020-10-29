import Auth from '@/services/auth';

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
        const response = await Auth.login({ email, password });
        // set token to localStorage
        Auth.setToken(response.data.token);
        // decode token data and set to store
        const decodedToken = Auth.verifyAndDecodeToken();
        console.log({ decodedToken });
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
