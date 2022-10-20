import { createRouter , createWebHistory } from "vue-router";

import Home from './components/Home.vue'
import SingUp from './components/SingUp.vue'
import Login from './components/Login.vue'
import Addrestro from './components/Addrestro.vue'
import Updaterestro from './components/Updaterestro.vue'

const routes = [
    {
        name:'Home',
        component:Home,
        path:'/'
    },
    {
        name:'SingUp',
        component:SingUp,
        path:'/singup'
    },
    {
        name:'Login',
        component:Login,
        path:'/login'
    },
    {
        name:'Add',
        component:Addrestro,
        path:'/add'
    },
    {
        name:'Update',
        component:Updaterestro,
        path:'/update'
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})
export default router