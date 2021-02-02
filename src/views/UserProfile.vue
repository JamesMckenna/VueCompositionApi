<template><!-- Vue 3 allows more then one element sibling in the template -->
    <div class="user-profile__user-panel">
        <div>
        <span class="wrapper"><span class="user-profile__admin-badge" v-if="state.user.isAdmin">Admin</span></span>
        <h2 class="user-profile__userName">@{{ state.user.userName }}</h2>
        <h3>User Id: {{ userId }}</h3>
        </div>
        <div class="user-profile__followersCount">
            <p><strong>Followers:</strong> {{ state.followers }}</p>
            <p>{{ fullName }}</p>
            <p><button v-on:click="addFollower">Follow</button></p>
            <p><button v-on:click="toggleAdmin">Make Admin</button></p>
        </div>

        <hr />

        <CreateTwoot @add-twoot="addTwoot" />
    </div>

    <div class="user-profile__twoots-wrapper">
        <strong>Twoots:</strong>
        <!-- a child component that emits and event @favourite is the event emitted, toggleFavourite is the delegate handler -->
        <!-- :userName="user.userName" :twoot="twoot" are props (from this component or a parent component) passed down to child component -->
        <!-- v-for is a loop, :key is the key of a collection needed to render all values to be looped through -->
        <TwootItem v-for="twoot in state.user.twoots" :key="twoot.id" :userName="state.user.userName" :twoot="twoot" @favourite="state.toggleFavourite" />
    </div>
</template>

<script>
//Import a component
import TwootItem from "../components/TwootItem.vue";
import CreateTwoot from "../components/CreateTwoot.vue";
import { reactive, computed } from "vue";
import { useRoute } from 'vue-router';
import { users } from "../assets/Users.js";
import store from '../store';//this is referncing the index.js file in the store directory. NOT vuex

export default {
    //Use imported component and use in template. Becomes child component of this component which can be a child component of another. 
    components: { TwootItem, CreateTwoot },
    name: 'UserProfile',

        //route: useRoute(),
        //userId: computed(() => route.params.userId),


    setup(){

        const route = useRoute();
        const userId = computed(() => route.params.userId);

        if(userId.value <= users.length){
            store.dispatch('setUser', users[userId.value - 1]);
        }
        else{
            store.dispatch('setUser', users[0]);
        }

        const state = reactive({
            followers: 0,
            user: store.state.user
        });

        const fullName = computed(() => `${state.user.firstName } ${state.user.lastName}`);

        function addFollower(){ return state.followers++; }

        //emitted from child compnonet - a.k.a Event
        function toggleFavourite(id){ console.log(`Favourite Twoot #${id}`); }

        function toggleAdmin(){ state.user.isAdmin == true ? state.user.isAdmin = false : state.user.isAdmin = true; }

        function addTwoot(twoot){
            state.user.twoots.unshift({ id: state.user.twoots.length + 1, content: twoot });
        }

        return{
            state,
            fullName,
            addFollower,
            toggleFavourite,
            toggleAdmin,
            addTwoot,
            userId
        }
    },

    created(){
        
    },


    mounted(){
        //store.dispatch('setUser', this.userId.value);
        this.addFollower();
    },

    watch: {
        //name same as what we want to watch
        followers(newFollowerCount, oldFollowerCount){
            if(oldFollowerCount < newFollowerCount){
            console.log(`${this.fullName} has gained a follower!`)
            }
        }
    }
}



</script>


<style>
.user-profile{
    display: grid;
    grid-template-columns: 1fr 3fr;
    width: 100%;
    padding: 50px 5%;
}

.user-profile__twoots-wrapper,
.user-profile__user-panel{
    display: flex;
    flex-direction: column;
    margin-right: auto;
    margin-left: auto;
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid #DFE3E8;
    width: 30rem;
}

h2{
    margin: 0;
    display: inline-flex;
    width:65%;
}

.wrapper{
    width: 35%;
    background: white;
    display: inline-flex;
}

.user-profile__admin-badge{
    background: red;
    color: white;
    border-radius: 5px;
    float: left;
    padding:0 10px;
    font-weight: bold;
}
</style>