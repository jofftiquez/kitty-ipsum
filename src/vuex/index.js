import Vue from 'vue';
import Vuex from 'vuex';
// import createPersistedState from 'vuex-persistedstate';
import counter from './counter';

Vue.use(Vuex);

const modules = {
  counter,
};

export default new Vuex.Store({
  modules,
  // plugins: [createPersistedState()]
});
