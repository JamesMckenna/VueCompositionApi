<template>
  <div id="app">
      <Nav />
    <router-view/>
  </div>
</template>

<script>

import Nav from './components/Nav.vue';
import { useStore } from 'vuex';
import { computed, reactive } from 'vue';
import { users } from './assets/Users.js';
export default {

  name: 'App',

  components: {
    Nav
  },

  setup(){

    const store = useStore();

    //let someUser = store.state.user
    if( store.state.user == null ){
      store.dispatch('setUser', users[0]);
    }

    
    const state = reactive({
      user: computed(() => store.state.user)
    });
      
    return{
      state
    }

  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  text-align: center;
}
</style>
