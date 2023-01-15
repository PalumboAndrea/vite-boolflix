import { reactive } from 'vue';
import axios from 'axios';

export const store = reactive({
    filmList : [],
    menuList: ['Home', 'TV Shows', 'Movies', 'Recently Added', 'My List'],
    methods:{
        trendingResults(){
            axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=7cf13cd92f233be2d474cd7b4c1399b5', {
            params: {
                
            }
            })
            .then((response) => {
                this.filmList = response.data.results;
                console.log(this.filmList)
            })
        }
    }
});