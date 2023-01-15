<script>
import { store } from '../../../store.js';

export default {
    data(){
        return{
            store,
            searchText: '',
        }
    },
    methods:{
        resetFilmList(){
            this.searchText = '';
        }
    },
    created(){
        
    }
}
</script>

<template>
   <div id="searchbar-container" class="p-1 d-flex align-items-center justify-content-between">
    <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="pointer me-1"/>
    <input type="text" name="searchField" id="searchField" placeholder="Search" v-model.trim="searchText"
    @keyup.enter="$emit('searchedText', searchText)" >
    <font-awesome-icon icon="fa-solid fa-x" class="pointer" @click="resetFilmList(), $emit('activateFunction')"/>
  </div>
</template>

<style lang="scss" scoped>
@use './bootstrap/scss/bootstrap.scss' as *;

#searchbar-container{
    width: 250px;
    border: 1px solid white;
    color: white;

    input{
        width: 200px;
        border: none;
        color: white;
        background-color: black;
        appearance: none;
    }

}

</style>