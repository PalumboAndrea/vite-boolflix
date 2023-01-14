<script>
import axios from 'axios';
import { store } from '../../store.js';

export default {
    data(){
        return{
            store,
            searchText: '',
        }
    },
    methods:{
        getResults(searchedText){
        axios.get(`https://api.themoviedb.org/4/search/multi?api_key=7cf13cd92f233be2d474cd7b4c1399b5&language=en-US&query=${searchedText}&page=1&include_adult=false`, {
            params: {
            title: searchedText,
            }
        })
        .then((response) => {
            this.store.filmList = response.data.results;
            console.log(this.store.filmList)
        })
        }
    },
}
</script>

<template>
   <div>
    <input type="text" name="searchField" id="searchField" placeholder="Search" v-model.trim="searchText"
    @keyup.enter="getResults(searchText)">
  </div>
</template>

<style lang="scss" scoped>
@use './bootstrap/scss/bootstrap.scss' as *;

</style>