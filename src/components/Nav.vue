<template>
    <nav id="nav" class="nav">
        <router-link to="/"><h2 class="app-name">Vuejs 3</h2></router-link>
        <router-link to="/">Home</router-link> |
        <router-link to="/admin">Admin</router-link> |
        <router-link to="/refReactive">Ref vs Reactive</router-link> |
        <router-link to="/about">About</router-link>

        <span class="userName" v-if="store.state.user != null" >@{{ store.state.user.userName }}</span>
        <span class="userName" v-else >Login</span>
    </nav>
</template>

<script>
import { useStore } from 'vuex';
export default {

    setup(){
        const store = useStore();

        return {
            store
        }
    }
}
</script>

<style>
.nav{
    width: 80%;
    max-height: 4rem;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 1rem;
    top:0;
    background-color: gold;
    text-align: center;
    padding-top: 2rem;
    padding-bottom: 2rem;
}

.app-name{
    width: 25%;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 1rem;
    float: left;
}

.userName{
    width: 25%;
    margin-top: auto;
    margin-bottom: auto;
    margin-right: 1rem;
    float: right;
}
</style>