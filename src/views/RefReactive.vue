<template>
    <h2>2 ways to observe properites and property value changes: ref and reactive</h2>
    <h4>mousePositionRef function</h4>
    <p>using ref() X:{{ x }} Y:{{ y }}</p>
    <h4>mousePositionReactive function</h4> 
    <p>using reactive() loses reactivitey when accessing object 'Pos' properties pos.x:{{ pos.x }} pos.y:{{ pos.y }}</p>
    <h4>mousePositionReactive function</h4> 
    <p>using reactive() but not reactive due to destructuring X:{{ posX }} Y:{{ posY }} even when using computed</p>
    <h4>reactiveDestructure function</h4> 
    <p>using toRefs() in the return statement to destructure an Reactive() Object X:{{ pX }} Y:{{ pY }}</p>
    <button @click="increment">Increment prop passed to child</button>

    <hr />
    <ReactiveProps :myProp="myProp"/>
</template>

<script>
import { mousePositionRef, mousePositionReactive, reactiveDestructure } from '@/scripts/mousePosition.js';
import { computed, reactive } from 'vue';
import ReactiveProps from '../components/ReactiveProps.vue';

export default {

    name: 'RefReactive',
    components:{
        ReactiveProps
    },
    
    setup(){
        const { x, y } = mousePositionRef(); //simple to de-structure using ref()
        const pos = mousePositionReactive(); //lose reactivity if de-structuring is attempted, so don't destructure or use spread operator when the object is reactive.
        const posX = computed( () => { pos.x } ); //<-- this won't work, still not reactive
        const posY = pos.y; //<-- this won't work, still not reactive
        const { pX, pY } = reactiveDestructure(); //using toRefs to enable destructuring on a Reactive() object properties of the same name

        const myProp = reactive([{ id: 1, counter: 0 }, { id: 2, counter: 0 }]);

        function increment(){
           for(var i = 0; i < myProp.length; i++){
                if(myProp[i].id == 1){
                    myProp[i].counter++;  
                }
           } 
        }

        return{
            x, y,
            pos,
            posX, posY,
            pX, pY,
            myProp,
            increment
        }
    }
}
</script>

<style scoped>
button{
    width: 10rem;
    margin: auto auto;
}
h2,h4{
    margin: 1rem auto 1rem auto;
}
hr{
  border: 0;
  clear:both;
  display:block;
  width: 96%;               
  background-color:black;
  height: 1px;
}
</style>