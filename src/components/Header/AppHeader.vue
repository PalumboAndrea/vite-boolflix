<script>
import SearchBar from './SearchBar.vue'
import HeaderMenu from './HeaderMenu.vue';
import { store } from '../../../store';
import axios from 'axios';

export default {
    data(){
        return{
            store,
            menuList: [
                {
                    title: 'Home',
                    status: false,
                },
                {
                    title: 'TV Shows',
                    status: false,
                },
                {
                    title: 'Movies',
                    status: false,
                },
                {
                    title: 'Recently Added',
                    status: false,
                },
                {
                    title: 'My List',
                    status: false,
                },

            ],
        }
    },
    components:{
        SearchBar,
        HeaderMenu,
  },
  methods: {
    getResults(searchedText){
        axios.get(`https://api.themoviedb.org/4/search/multi?api_key=7cf13cd92f233be2d474cd7b4c1399b5&language=en-US&query=${searchedText}&page=1`, {
            params: {
            text: searchedText,
            }
        })
        .then((response) => {
            this.store.filmList = response.data.results;
            this.store.searchTitle = 'risultati per: ' + searchedText;
            console.log(this.store.filmList);
        })
    },
    trendingResults(el){
        console.log(el);
        
        axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=7cf13cd92f233be2d474cd7b4c1399b5', {
        params: {
            
        }
        })
        .then((response) => {
            this.store.filmList = response.data.results;
            this.store.searchTitle = 'trending movies:'
            console.log(this.store.filmList)
        })
    }
  },
  created(){
    this.trendingResults();
  }

}
</script>

<template>
    <div id="header-container" class="container-fluid">
        <div class="row h-100 d-flex align-items-center">
            <img src="../../assets/img/logo.png" alt="logo" class="p-0 ms-5">
            <div v-for="item in menuList"
            :titles="item.title"
            :statu="item.status">

            </div>
            <HeaderMenu @activateFunction="trendingResults"/>
            <SearchBar 
            @searchedText="getResults"
            @activateFunction="trendingResults" class="me-5"/>
        </div>
    </div>
</template>

<style lang="scss" scoped>

    #header-container{
        height: 10vh;
        background-color: rgb(20,20,20);

        img{
            width: 150px;
            height: 40px;
        }

    }
</style>