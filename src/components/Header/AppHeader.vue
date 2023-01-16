<script>
import SearchBar from './SearchBar.vue'
import HeaderMenu from './HeaderMenu.vue';
import { store } from '../../../store';
import axios from 'axios';
import { useAttrs } from 'vue';

export default {
    data(){
        return{
            store,
            apiUrlSearch: 'https://api.themoviedb.org/3/search/multi?',
            apiKey: '7cf13cd92f233be2d474cd7b4c1399b5',
            menuList: [
                {
                    title: 'Home',
                    status: false,
                    text: 'trending',
                    api: 'https://api.themoviedb.org/3/trending/all/day?api_key=7cf13cd92f233be2d474cd7b4c1399b5',
                },
                {
                    title: 'TV Shows',
                    status: false,
                    text: 'popular tv shows',
                    api: 'https://api.themoviedb.org/3/tv/popular?',
                },
                {
                    title: 'Movies',
                    status: false,
                    text: 'popular movies',
                    api: 'https://api.themoviedb.org/3/movie/popular?',
                },
                {
                    title: 'Top Rated',
                    status: false,
                    text: 'top rated movies',
                    api: 'https://api.themoviedb.org/3/movie/top_rated?',
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
        axios.get(this.apiUrlSearch, {
            params: {
                api_key: this.apiKey,
                query: searchedText,
            }
        })
        .then((response) => {
            this.store.filmList = response.data.results;
            this.store.searchTitle = 'risultati per: ' + searchedText;
        })
    },
    trendingResults(index){
        axios.get(this.menuList[index].api, {
        params: {
            api_key: this.apiKey,
        }
        })
        .then((response) => {
            this.store.filmList = response.data.results;
            this.store.searchTitle = this.menuList[index].text + ':';
            console.log(this.store.filmList);
        })
    }
  },
  created(){
    this.trendingResults(0);
  }

}
</script>

<template>
    <div id="header-container" class="container-fluid d-flex align-items-center justify-content-between">
        
        <img src="../../assets/img/logo.png" alt="logo" class="p-0 ms-5">
        <div class="d-flex">
            <HeaderMenu @activateFunction="trendingResults"
            v-for="item, index in menuList"
            :titles="item.title"
            :statu="item.status"
            :index="index"/>
        </div>
        <SearchBar 
        @searchedText="getResults"
        @activateFunction="trendingResults" class="me-5"/>
        
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