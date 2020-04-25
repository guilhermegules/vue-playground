import Vue from "vue";
import Vuex from "vuex";
import jokes from "./modules/jokes";
import auth from "./modules/auth";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { jokes, auth }
});
