import { createStore } from 'vuex'

export default createStore({
  state: {
    user: null,
  },


  mutations: {
    SET_USER(state, user){
      state.user = user;
      console.log("SET_USER" + user.userName);
    }
  },


  actions: {
    setUser({ commit }, user){
      commit('SET_USER', user);
    }
  },


  modules: {
  }
})
