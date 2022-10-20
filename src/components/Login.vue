<template>
    <h1>hello login</h1>
    <div class="singup">
    <input type="email" placeholder="enter email" v-model="email"/>
    <input type="password" placeholder="enter pass" v-model="password"/>
    <button @click="login" >login</button>
   </div>
</template>

<script>
import axios from 'axios'
export default{
    name:'login',
    data(){
        return{
            email:'',
            password:''
        }
    },
    methods:{
       async login(){
            
            let result =await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`);
            console.log(result)
            if(result.status==200 & result.data.length>0){
                localStorage.setItem("user-info",JSON.stringify(result.data[0]))
                   this.$router.push({name:'Home'})
            }
        }
    },
    mounted(){
        let user = localStorage.getItem("user-info");
        if(user){
            this.$router.push({name:'Home'})
        }
    }
}
</script>