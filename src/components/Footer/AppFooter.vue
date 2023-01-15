<script>
export default {
    
}
</script>

<template>
    <div class="my-container">
        <p>
            Footer --> Work in progress
        </p>
    </div>
    
</template>

<style lang="scss" scoped>
@use '../../styles/general.scss' as *;
@use '../../styles/partials/variables.scss' as *;
    .my-container{
        background-color: $bg-color;
        width: 100%;
        height: 10vh;
        border-top: 5px solid rgb(34,34,34);

        p{
            color: white;
            font-size: 3rem;
            font-weight: 700;
        }
    }
</style>