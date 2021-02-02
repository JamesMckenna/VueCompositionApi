<template>
<div class="child">
    <p>This is a child component</p>
    <slot>Fallback Content if nothing provided</slot>
</div>
</template>

<script>
export default {
    name: 'Child',

    setup(){

        function aChildMethod() {
            alert("This alert was declared in the child component.");
        }
        return{
            aChildMethod
        }
    }
}
</script>

<style scoped>
.child{
    background-color: aqua;
    border: 3px solid aqua;
    width: 30rem;
    height: 7rem;
    margin: 1rem auto;
}
</style>