<script>
import SingleCard from './components/SingleCard.vue'

import AppHeader from './components/AppHeader.vue'

export default {
  components:{
    SingleCard,
    AppHeader,
  },
  data(){
    return {
      
    }
  },
  methods: {
    
  },
  created(){

  }
}

</script>

<template>
  <AppHeader />


  <SingleCard />
</template>

<style lang="scss">
@use './styles/general.scss';
@use './bootstrap/scss/bootstrap.scss' as *;

</style>
