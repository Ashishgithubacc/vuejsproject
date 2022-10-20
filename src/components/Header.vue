<template>
<div class="header">
    <router-link to="/"> Home</router-link>
    <router-link to="add">Add restro</router-link>
    <router-link to="update">update restro</router-link>
    <a @click="logout" href="">logout</a>

</div>
</template>

<script>
export default{
    name:'header',
    methods:{
        logout(){
            localStorage.clear(),
            this.$router.push({name:'Login'})
        }
    }
}
</script>

<style>
.header a{
    padding: 0px 25px;
    font-size: 20px;
}
</style>