<template> 
    <form class="create-twoot" @submit.prevent="createNewTwoot">
        <label for="newTwoot"><strong>New Twoot</strong><span :class="{ '-exceeded': newTwootCharacterCount > 180 }"> ({{ newTwootCharacterCount }}/180)</span></label>
        <textarea id="newTwoot" rows="4" v-model="state.newTwootContent" :class="{ '-exceeded': newTwootCharacterCount > 180 }"/>

        <div class="create-twoot-type">
            <label for="newTwootType"><strong>Type: </strong></label>
            <select id="newTwootType" v-model="state.selectedTwootType">
                <option :value="option.value" v-for="(option, index) in state.twootTypes" :key="index">{{ option.name }}</option>
            </select>
        </div>
        <button>Twoot!</button>
    </form>
</template>

<script>
import { reactive, computed } from "vue";
export default {
    props:{},

    setup(props, context){

        const state = reactive({
            newTwootContent: '',
            selectedTwootType: 'instant',
            twootTypes:[
                {value: 'draft', name: 'Draft'},
                {value: 'instant', name: 'Instant Twoot'}
            ],
        })

        const newTwootCharacterCount = computed(() => state.newTwootContent.length)

        function createNewTwoot(){
            if(state.newTwootContent && state.selectedTwootType !== 'draft'){
               context.emit('add-twoot', state.newTwootContent)
               state.newTwootContent = '';
            }
        }

        return {
            state,
            newTwootCharacterCount,
            createNewTwoot
        }
    }
}
</script>

<style>
.create-twoot{
    display: flex;
    flex-direction: column;
}

.-exceeded{
    color: red;
}
</style>