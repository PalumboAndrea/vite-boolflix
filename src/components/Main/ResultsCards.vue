<script>
import { store } from '../../../store';

export default {
    data(){
        return {
        store,
        imageUrl: 'https://image.tmdb.org/t/p/w500'
        }
    },
    methods: {
        imageLoadOnError(e) {
            e.target.src = "src/assets/flags/unknown.png"
        }
    }
}
</script>

<template>
    <div class="container-fluid results d-flex flex-wrap">
        <div class="row">
            <template v-for="film in store.filmList">
                <article class="col-3 col-xl-2 result px-2 py-3" :class="film.media_type == 'person' ? 'd-none' : ''">
                    <img :src="(film.poster_path === null) ? 'src/assets/img/image-not-found.jpeg' : (imageUrl + film.poster_path)" alt="cover_image" class="cover-image">
                    <div class="info">
                        <p>
                            Title:
                            <span class="bold">{{ film.title || film.name }}</span>
                        </p>
                        <p>
                            Type:
                            <span class="bold">{{ film.media_type }}</span>
                        </p>
                        <p>
                            Language:
                            <img :src="'src/assets/flags/' + film.original_language + '.png'" :alt="film.original_language" class="flag"
                            @error="imageLoadOnError">
                        </p>
                        <div class="d-flex">
                            Vote:
                            <p v-if="film.vote_average > 0">
                                <font-awesome-icon icon="fa-solid fa-star" v-for="n in Math.round(film.vote_average / 2)" class="star-yellow ms-1"/>
                                <font-awesome-icon icon="fa-solid fa-star" v-for="n in (5 - Math.round(film.vote_average / 2))" class="ms-1 star-grey"/>
                            </p>
                            <p v-else>
                                <font-awesome-icon icon="fa-solid fa-star" v-for="n in 5" class="ms-1 star-grey"/>
                            </p>
                            
                        </div>
                        <p class="overview-container">
                            Overview:
                            <span class="overview bold">{{ film.overview }}</span>
                        </p>
                    </div>
                </article>
            </template>
        </div>
  </div>
</template>

<style lang="scss" scoped>
@use './bootstrap/scss/bootstrap.scss' as *;
@use '../../styles/general.scss' as *;
@use '../../styles/partials/variables.scss' as *;

p{
    margin: 0;
}

.results{
  min-height: 200px;
  padding: 0 100px;

    .result{
        min-height: 100px;
        position: relative;
        &:hover img{
            opacity: 0.2;
        }
        &:hover .info{
            display: block;
        }
        .cover-image{
            width: 100%;
            height: 100%;
        }
        .info{
            color: white;
            display: none;
            font-size: 0.9rem;
            position: absolute;
            top: 5%;
            left: 5%;
            width: 90%;
            padding: 2px;
            height: 90%;
            overflow: scroll;
            font-weight: 700;
            box-shadow: rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;

            .flag{
                opacity: 1;
                height: 20px;
                width: 25px;
            }

            .bold{
                font-size: 1rem;
                font-weight: 400;
            }

            .overview-container{
                height: 30px;

                .overview{
                    font-size: 0.8rem;
                    overflow: hidden;
                }
            }

            .star-yellow{
                color: rgb(255,189,0);
            }

            .star-grey{
                color: grey;
            }
        }
    }
}
    
</style>