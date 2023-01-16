<script>
import { store } from '../../../store'

export default {
    props: {
        titles: String,
        status: Boolean,
        index: Number,
    },
    data(){
        return{
            store,
        }
    },
    methods:{
    
    },
    created(){

    }
}
</script>

<template>

    <div class="wrapper d-flex align-items-center justify-content-between">
        <div class="mx-2 menu" @click="$emit('activateFunction', index)">
            {{ titles }}
        </div>
    </div>

</template>

<style lang="scss" scoped>
    .menu{
        color: white;
        cursor: pointer;
        white-space:nowrap;
    }
</style>