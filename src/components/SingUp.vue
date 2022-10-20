<template>
   <h1>hello SingUp</h1>
   <div class="singup">
    <input type="text" placeholder="enter name" v-model="name"/>
    <input type="email" placeholder="enter email" v-model="email"/>
    <input type="password" placeholder="enter pass" v-model="password"/>
    <button @click="singup">singup</button>
   </div>
</template>

<script>
import axios from 'axios'
  export default{
    name:"SingUp",
    data(){
        return{
        name:'',
        email:'',
        password:''
        }
    },
    methods:{
       async singup(){
            console.log(this.name,this.email,this.password)
            let result =await axios.post("http://localhost:3000/users",{
                name:this.name,
                email:this.email,
                password:this.password
            });
            if( this.name=="" ||this.email==""||this.password==""){
                   alert("fill all the feild")
            }
            console.log(result)
            if(result.status==201 & this.name!=="",this.email!="",this.password!=""){
                   this.$router.push({name:'Login'})
            }
            localStorage.setItem("user-info",JSON.stringify(result.data))
        }
    },
    
  }
</script>

<style scoped>
.singup{
    display: flex;
    flex-direction: column;
    padding: 41px;
}
   .singup input, button{
    width: 221px;
    height: 32px;
    margin: 10px;
   }
</style>