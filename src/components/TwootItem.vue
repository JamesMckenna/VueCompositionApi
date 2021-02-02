<template>
    <!-- <div class="twoot-item" @click="favoriteTwoot(twoot.id)"> -->
        <div class="twoot-item">
        <div class="user-profile__twoot">
            <div class="twoot-item__user">
                @{{ userName }}
            </div>
            <div class="twoot-item__content">
                {{ twoot.content }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"TwootItem",
    //properties recieved from parent 
    props:{
        userName:{
            type: String,
            required: true
        },
        twoot: {
            type: Object,
            required: true
        }
    },
    
    methods:{
        favoriteTwoot(id){
            //Event we want to emit. In this case, the parent component has a delegate handler
            this.$emit('favourite', id);//param1: the name of the event, param2: a param we want to use in the delegate handler
        }
    }
}
</script>

<style scoped>

.twoot-item{
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid #DFE3E8;
    box-sizing: border-box;
    cursor: pointer;
    transition: all 0.25 ease;
}

.twoot-item:hover{
    transform: scale(1.1, 1.1);
}

.twoot-item__user{
    font-weight: bold;
}

</style>