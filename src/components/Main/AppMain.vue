<script>
import SingleCard from './SingleCard.vue';
import { store } from '../../../store';

export default {
    data(){
        return{
            store,
        }
    },
    components: {
        SingleCard,
    },
    created (){
    }
}
</script>

<template>

    <div class="my-container">
        <div class="container-fluid">
            <p class="mb-2">
                {{store.searchTitle}}
            </p>
            <SingleCard />
        </div>
        
    </div>
    
    

</template>

<style lang="scss" scoped>
    .my-container{
        min-height: 80vh;
        background-color: rgb(20,20,20);

        p{
            color: white;
            text-transform: uppercase;
            font-size: 1.4rem;
            padding: 0 100px;
        }
    }
</style>