<template>
  <div class="about">
    <h1>About Slots in Vuejs</h1>
    <div class="parent">
      This is the parent component
      <Child />
      <Child>Can pass into child by using a closing tag on the component and adding the slot tag in the child component</Child>
      <Child><button @click="pressed()">Html tag to child</button></Child>
    </div>
  </div>
</template>

<script>
import Child from '../components/Child.vue';
export default {
  name: 'About',
  components: {
    Child
  },

  setup(){
    
    function pressed() { alert("Hello from child component. Button passed into child calls method in parent component! That means Child can use parent's scope."); }

    return{
      pressed
    }
  }

}
</script>

<style scoped>
.parent{
  background-color: burlywood;
  width: 40rem;
  height: 40rem;
  margin-right: auto;
  margin-left: auto;
}
</style>
