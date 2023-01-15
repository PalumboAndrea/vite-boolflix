<script>
import { store } from '../../store';

export default {
    data(){
    return {
      store,
      imageUrl: 'https://image.tmdb.org/t/p/w500'
    }
  },
}
</script>

<template>
    <div class="container-fluid results d-flex flex-wrap">
        <div class="row">
            <template v-for="film in store.filmList">
                <article class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 result px-1 py-3" v-if="(film.media_type == 'movie' || film.media_type == 'tv')">
                    <img :src="(film.poster_path === null) ? 'src/assets/img/image-not-found.jpeg' : (imageUrl + film.poster_path)" alt="cover_image" class="cover-image">
                    <div class="info">
                        <p>
                            Titolo:
                            <span class="bold">{{ (film.media_type == 'movie') ? film.title : film.name }}</span>
                        </p>
                        <p>
                            Tipo:
                            <span class="bold">{{ film.media_type }}</span>
                        </p>
                        <p>
                            Lingua:
                            <span class="bold">{{ film.original_language }}</span>
                        </p>
                        <div class="d-flex">
                            Voto:
                            <p v-if="film.vote_average > 0" v-for="n in Math.round(film.vote_average / 2)" class="star ms-1">
                                <font-awesome-icon icon="fa-solid fa-star" />
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
@use '../styles/general.scss' as *;
@use '../styles/partials/variables.scss' as *;

p{
    margin: 0;
}

.results{
  min-height: 200px;
  padding: 0 100px;
  background-color: rgb(20,20,20);

    .result{
        min-height: 100px;
        position: relative;
        &:hover img{
            opacity: 0.4;
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
            box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

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

            .star{
                color: rgb(255,189,0);
            }
        }
    }
}
    
</style>