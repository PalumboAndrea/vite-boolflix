<script>
export default {
    props: {
        titles: String,
        status: Boolean,
        index: Number,
    },
    data(){
        return{
            
        }
    },
    methods:{
    
    },
    created(){

    }
}
</script>

<template>

    <div class="wrapper">
        <div class="ms-3 menu" @click="$emit('activateFunction', index)">
            {{ titles }}
        </div>
    </div>

</template>

<style lang="scss" scoped>
    .menu{
        color: white;
        cursor: pointer;
    }
</style>