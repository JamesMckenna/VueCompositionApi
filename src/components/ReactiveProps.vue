<template>
    <h3>From ReactiveProps.vue child component</h3>
    <p>A props, 'myProp' was passed to this child component and a button in the parent increments a value of myProp.<br/> The value is shown from the child</p>
    {{ number }}   
</template>

<script>
import { computed } from 'vue';
export default {
    name:'ReactiveProps',
    props:{
        myProp:{
            required: true,
            type: Object
        }
    },

    setup(props){
        const number = computed(() => props.myProp[0].counter);
        return {
            number
        }
    }
}
</script>

<style scoped>

</style>