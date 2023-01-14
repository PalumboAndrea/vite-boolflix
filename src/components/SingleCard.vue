<script>
import { store } from '../../store';


export default {
    data(){
    return {
      store,
    }
  },
}
</script>

<template>
    <div class="container-fluid results d-flex flex-wrap">
    <div class="row">
      <div class="col-2 result" v-for="film in store.filmList">
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
        <p>
          Voto:
          {{ film.vote_average }}
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use './bootstrap/scss/bootstrap.scss' as *;
@use '../styles/general.scss' as *;
@use '../styles/partials/variables.scss' as *;

.results{
  min-height: 200px;
  border: 1px solid black;
  background-color: green;

  .result{
    border: 1px solid red;
    min-height: 100px
  }

}
    
</style>