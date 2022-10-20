<template>
    <Header/>
    <h1>update restro page</h1>
    </template>
    
    <script>
    import Header from './Header.vue'
       export default{
        name:'Update',
        components:{
            Header
        },
        mounted(){
            let user = localStorage.getItem("user-info");
            if(!user){
                this.$router.push({name:'SingUp'})
            }
        }
       }
    </script>