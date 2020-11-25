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
      tenant: '',
    },
  }),

  getters: {
    role: (state) => {
      return state.user.role;
    },

    tenant: (state) => {
      return state.user.tenant;
    },
  },

  mutations: {
    setUser(state, userData) {
      state.user = userData;
    },
  },

  actions: {
    async login({ commit }, { email, password }) {
      try {
        const response = await AuthService.login({ email, password });
        // set token
        AuthService.token = response.data.token;
        // set user data to store
        commit('setUser', AuthService.user);
      } catch (error) {
        // TODO: handle error in store properly
        console.log({ error });
      }
    },
  },
};
