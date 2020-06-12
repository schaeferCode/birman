export default {
  namespaced: true,

  state: () => ({
    isAuthenticated: false
  }),

  getters: {
    isAuthenticated: state => {
      return state.isAuthenticated;
    }
  },

  mutations: {
    setIsAuthenticated(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated;
    }
  },

  actions: {
    async login({ commit }, { username, password }) {
      if (username && password) {
        await commit("setIsAuthenticated", true);
      } else {
        await commit("setIsAuthenticated", false);
      }
    }
  }
};
