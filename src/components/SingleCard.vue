<script>
import { store } from '../../store';


export default {
    data(){
    return {
      store,
      imageUrl: 'https://image.tmdb.org/t/p/w342'
    }
  },
}
</script>

<template>
    <div class="container-fluid results d-flex flex-wrap">
    <div class="row g-3">
        <ul class="col-2 result" v-for="film in store.filmList">
            <li>
                <img :src="imageUrl + film.poster_path" alt="cover_image">
                <div class="info">
                    <p>
                        Titolo:
                        {{ (film.media_type == 'movie') ? film.title : film.name }}
                    </p>
                    <p>
                        Tipo:
                        {{ film.media_type }}
                    </p>
                    <p>
                        Lingua:
                        {{ film.original_language }}
                    </p>
                    <div class="d-flex">
                        Voto:
                        <p v-for="n in Math.round(film.vote_average / 2)" class="star ms-1">
                            <font-awesome-icon icon="fa-solid fa-star" />
                        </p>
                    </div>
                </div>
            </li>
        </ul>
      
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

  .result{
    min-height: 100px;
    position: relative;
    &:hover img{
        opacity: 0.3;
    }

    &:hover .info{
        display: block;
    }

    img{
        width: 100%;
        height: 100%;
    }

    .info{
        display: none;
        position: absolute;
        width: 60%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        .star{
            color: rgb(255,189,0);
        }
    }
  }

}
    
</style>