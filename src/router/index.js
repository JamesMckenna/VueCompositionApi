import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
//import { users } from '../assets/Users.js';
import store from '../store';//this is referncing the index.js file in the store directory. NOT vuex
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/user/:userId',
    name: 'UserProfile',
    component: () => import(/* webpackChunkName: "UserProfile" */ '../views/UserProfile.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import(/* webpackChunkName: "Admin" */ '../views/Admin.vue'),
    meta:{
      requiresAdmin: true,
    }
  },
  {
    path: '/refReactive',
    name: 'RefReactive',
    component: () => import(/* webpackChunkName: "Ref" */ '../views/RefReactive.vue'),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach(async (to, from, next) =>{
  
  const user = store.state.user;
  // if(!user){
  //   await store.dispatch('setUser', users[0]);
  // }
  
  const isAdmin = user.isAdmin;
  const requiresAdmin = to.matched.some( record => record.meta.requiresAdmin);

  if(requiresAdmin && !isAdmin) next({name: 'Home'});
  else next();
});


export default router
