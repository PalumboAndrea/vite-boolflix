<script>
import SearchBar from './SearchBar.vue'
import { store } from '../../store';
import axios from 'axios';

export default {
    data(){
        return{
            store,
        }
    },
    components:{
        SearchBar,
  },
  methods: {
    getResults(searchedText){
        axios.get(`https://api.themoviedb.org/4/search/multi?api_key=7cf13cd92f233be2d474cd7b4c1399b5&language=en-US&query=${searchedText}&page=1`, {
            params: {
            title: searchedText,
            }
        })
        .then((response) => {
            this.store.filmList = response.data.results;
            console.log(this.store.filmList)
        })
        },
  },

}
</script>

<template>
    <div id="header-container" class="container-fluid">
        <div class="row h-100 d-flex align-items-center justify-content-between">
            <div class="col-2">
                <img src="../assets/img/logo.png" alt="logo">
            </div>
            <div class="col">
                <ul class="menu d-flex m-0 p-0 justify-content-center">
                    <li v-for="item in store.menuList" class="ms-3">
                        {{ item }}
                    </li>
                </ul>
            </div>
            <div class="col-3">
                <SearchBar @searchedText="getResults"/>
            </div>
        </div>
        
    </div>
</template>

<style lang="scss" scoped>

    #header-container{
        height: 10vh;
        background-color: rgb(20,20,20);

        img{
            max-height: 100%;
            width: 100%;
            transform: scale(0.7);
        }

        .menu{
            color: white;

            li{
                cursor: pointer;
            }
        }
    }
</style>