import { createRouter,createWebHistory,RouteRecordRaw } from "vue-router";
import PageLogin from '@/components/PageLogin.vue';
import PrinPage from '@/components/PrinPage.vue';
import CargCaMan from '@/views/CargCaMan.vue';
import CarNatur from "@/views/CarNatur.vue";
import PcP from "@/views/PcP.vue";
import TarManejo from "@/views/TarManejo.vue";
import TiTarifa from "@/views/TiTarifa.vue";
import TarVue from "@/views/TarVue.vue";

const routes:Array<RouteRecordRaw> = [
    {
        path: "/",
        redirect: to => {return{name:'PageLogin'}}
    },
    {
        path:'/PageLogin',
        name:'PageLogin',
        component:PageLogin
    },
    {
        path:'/PrinPage',
        name:'PrinPage',
        component: PrinPage,
        children:[
            {
        path:'/Cargcaman',
        name:'Cargcaman',
        component:CargCaMan,
    },
    {
        path:'/Carnatur',
        name:'Carnatur',
        component:CarNatur
    },
    {
        path:'/PcP',
        name:'PcP',
        component:PcP
    },
    {
        path:'/TarVue',
        name:'TarVue',
        component:TarVue
    },
    {
        path:'/TarManejo',
        name:'TarManejo',
        component:TarManejo
    },
    {
        path:'/TiTarifa',
        name:'TiTarifa',
        component:TiTarifa
    }
            
        ]
    },
    
    
]
const router = createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes
})

export default router