<template>
    <Header/>
    <h1>add restro page</h1>
    <form class="form">
        <input type="text" placeholder="name" v-model="name" />
        <input type="text" placeholder="address" v-model="address"/>
        <input type="text" placeholder="contact" v-model="contact"/>
        <button type="button" @click="addrestro">add restro</button>
    </form>
    </template>
    
    <script>
    import Header from './Header.vue'
    import axios from 'axios'
       export default{
        name:'Add',
        components:{
            Header,
        },
        data(){
             return{
                name:'',
                address:'',
                contact:''
             }
        },
        methods:{
            async addrestro(){
                let result =await axios.post("http://localhost:3000/restro",{
                name:this.name,
                address:this.address,
                contact:this.contact
            });
            if(result.status==201){
                   this.$router.push({name:'Home'})
            }
             }
        },
        mounted(){
            let user = localStorage.getItem("user-info");
            if(!user){
                this.$router.push({name:'SingUp'})
            }
            
        }
       }
    </script>
    <style>
    .form input{
        width: 300px;
    height: 32px;
    margin: 15px 0px 8px 0px;
    border: 1px solid #5abd7e;
    border-radius: 4px;
    font-size: 15px;
    padding: 10px;
    }
    .form{
        display: grid;
    justify-content: center;
    }
    .form button{
        background-color: #5abd7e;
    color: white;
    font-size: 17px;
    border-style: none;
    border-radius: 4px;
    padding: 8px;
    }
    h1{
        text-align: center;
    }
</style>