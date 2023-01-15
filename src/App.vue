<script>
import AppHeader from './components/Header/AppHeader.vue'
import AppMain from './components/Main/AppMain.vue'
import AppFooter from './components/Footer/AppFooter.vue'

export default {
  components:{
    AppHeader,
    AppMain,
    AppFooter,
  },
  data(){
    return {
      
    }
  }
}

</script>

<template>

  <AppHeader/>

  <AppMain />

  <AppFooter />

</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use './bootstrap/scss/bootstrap.scss' as *;
@use './styles/partials/variables' as *;

</style>
