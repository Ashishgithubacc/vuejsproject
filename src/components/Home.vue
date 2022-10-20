<template>
<Header/>
<h1>Home</h1>
<table id="restro">
    <tr>
        <th>id</th>
        <th>name</th>
        <th>address</th>
        <th>contact</th>
    </tr>
    <tr v-for="item in restro" :key="item.id">
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td>{{item.address}}</td>
        <td>{{item.contact}}</td>
    </tr>
</table>
</template>

<script>
import Header from './Header.vue'
import axios from 'axios'
   export default{
    name:'Home',
    components:{
        Header,
        data(){
            return{
                restro:[]
            }
        }
    },
   async mounted(){
        let user = localStorage.getItem("user-info");
        if(!user){
            this.$router.push({name:'SingUp'})
        }
        let result = await axios.get("http://localhost:3000/restro")
           this.restro=result.data
           console.log(this.restro)
    }
   }
</script>
<style scoped>
#restro {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#restro td, #restro th {
  border: 1px solid #ddd;
  padding: 8px;
}

#restro tr:nth-child(even){background-color: #f2f2f2;}

#restro tr:hover {background-color: #ddd;}

#restro th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04AA6D;
  color: white;
}
</style>