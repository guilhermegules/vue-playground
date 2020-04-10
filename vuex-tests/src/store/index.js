import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    repos: [
      {
        id: Math.floor(Math.random() * 10000000),
        name: "guilhermegules/Vue_Playground/vuex-tests",
        description: "A repository displaying vuex best practices.",
        url: "https://github.com/guilhermegules",
        language: "JavaScript",
        has_issues: false,
        created_at: "2020-04-10T02:29:42Z",
        updated_at: "2020-04-10T02:39:42Z",
        fork: true
      },
      {
        id: Math.floor(Math.random() * 10000000),
        name: "guilhermegules/Vue_Playground/vuex-tests",
        description: "A repository displaying vuex best practices.",
        url: "https://github.com/guilhermegules",
        language: "JavaScript",
        has_issues: false,
        created_at: "2020-04-10T02:29:42Z",
        updated_at: "2020-04-10T02:39:42Z",
        fork: true
      },
      {
        id: Math.floor(Math.random() * 10000000),
        name: "guilhermegules/Vue_Playground/vuex-tests",
        description: "A repository displaying vuex best practices.",
        url: "https://github.com/guilhermegules",
        language: "JavaScript",
        has_issues: false,
        created_at: "2020-04-10T02:29:42Z",
        updated_at: "2020-04-10T02:39:42Z",
        fork: true
      },
      {
        id: Math.floor(Math.random() * 10000000),
        name: "guilhermegules/Vue_Playground/vuex-tests",
        description: "A repository displaying vuex best practices.",
        url: "https://github.com/guilhermegules",
        language: "JavaScript",
        has_issues: false,
        created_at: "2020-04-10T02:29:42Z",
        updated_at: "2020-04-10T02:39:42Z",
        fork: true
      }
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
});
