import{createRouter,createWebHistory} from "vue-router"
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import contacts from "../views/contacts.vue";
import service from "../views/service.vue";
import photo from "../views/photo.vue";
import videos from "../views/videos.vue";
import North from "../views/North.vue";
import West from "../views/West.vue";
import South from "../views/South.vue";
import East from "../views/East.vue";
import Kigali from "../views/Kigali.vue";

const routes = [
    {
        path: "/",
        name:"Home",
        component:Home

    },
    
    {
        path:"/About",
        name:"About",
        component:About

     },
     {
        path:"/contacts",
        name:"contacts",
        component:contacts
     },
     {
        path:"/service",
        name:"service",
        component:service

     },
     {
        path:"/photo",
        name:"photo",
        component:photo

     },
     {
        path:"/videos",
        name:"videos",
        component:videos

     },
     {
        path:"/north",
        name:"north",
        component:North

     },
     {
        path:"/West",
        name:"West",
        component:West

     },
     {
        path:"/South",
        name:"South",
        component:South

     },
     {
        path:"/East",
        name:"East",
        component:East

     },
     {
        path:"/Kigali",
        name:"Kigali",
        component:Kigali

     }
    


];
const router = createRouter(
    {
   history:createWebHistory(),
    routes,
   
});
export default router