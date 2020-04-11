import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    repos: []
  },
  getters: {
    repoFilterCreatedAt: state =>
      state.repos.map(repo => repo.created_at.substring(0, 10))
  },
  mutations: {
    SET_REPOS: (state, payload) => {
      state.repos = payload;
      console.log(
        "%cAction completed",
        "color: white; background: green; font-weight: bold;"
      );
      console.timeLog();
    }
  },
  actions: {
    async getRepos({ commit }) {
      const response = await fetch(
        "https://api.github.com/users/guilhermegules/repos"
      );
      const repos = await response.json();
      commit("SET_REPOS", repos);
      console.assert(repos.length >= 1, "Repos not returned");
    }
  }
});
