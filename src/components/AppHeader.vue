<script>
import SearchBar from './SearchBar.vue'

export default {
    components:{
        SearchBar,
  },
}
</script>

<template>
    <div id="header-container" class="container-fluid mb-2">
        <div class="row h-100 d-flex align-items-center justify-content-between">
            <div class="col-2">
                <img src="../assets/img/logo.png" alt="logo">
            </div>
            <div class="col-2">
                <SearchBar />
            </div>
        </div>
        
    </div>
</template>

<style lang="scss" scoped>

    #header-container{
        height: 10vh;
        background-color: black;

        img{
            max-height: 100%;
            width: 100%;
            transform: scale(0.7);
        }
    }
</style>