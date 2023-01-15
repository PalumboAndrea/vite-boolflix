<script>
export default {
    props: {
        titles: String,
        status: Boolean,
    },
    data(){
        return{
            menuList: [
                {
                    title: 'Home',
                    status: false,
                },
                {
                    title: 'TV Shows',
                    status: false,
                },
                {
                    title: 'Movies',
                    status: false,
                },
                {
                    title: 'Recently Added',
                    status: false,
                },
                {
                    title: 'My List',
                    status: false,
                },

            ]
            
        }
    },
    methods:{
        isStatusActive(index){
            this.menuList.forEach(element => {
                element.status = false;
            });
            this.menuList[index].status = !this.menuList[index].status;
        }
    },
    created(){
        console.log(this.titles);
    }
}
</script>

<template>
    <div class="col">
        <p>
            ciao {{ titles }}
        </p>
        <ul class="menu d-flex m-0 p-0">
            <li v-for="item, index in menuList" class="ms-3" @click="isStatusActive(index), item.status ? $emit('activateFunction', item.title.toLowerCase()) : ''">
                {{ item.title }}
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
    .menu{
        color: white;

        li{
            cursor: pointer;
        }
    }
</style>