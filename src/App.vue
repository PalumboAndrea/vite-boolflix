<script>
import SingleCard from './components/SingleCard.vue'
import SearchBar from './components/SearchBar.vue'

export default {
  components:{
    SingleCard,
    SearchBar,
  },
  data(){
    return {

    }
  },
  created(){

  }
}

</script>

<template>
  <SearchBar />
  
  <SingleCard />
</template>

<style lang="scss">
@use './styles/general.scss'

</style>
