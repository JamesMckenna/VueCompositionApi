<template>
  <div class="home">
    <h2>Home</h2>
    <div class="users-list">
      <router-link v-for="user in users" :to="{ name: 'UserProfile', params: { userId: user.id } }" :key="user.id">
        {{ user.userName }}
      </router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

import { users } from "../assets/Users.js";

export default {
  name: 'Home',
  components: {
    //HelloWorld
  },

  setup(){
    return{
      users
    }
  }
}
</script>

<style>
.users-list{
  display: flex;
  flex-direction: column;
}
</style>
