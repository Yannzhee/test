import Vue from 'vue';
import home from '../views/tabs/home';
import goods from '../views/tabs/goods';
import personal from '../views/tabs/personal';
import carts from '../views/tabs/carts';
import main from '../views/main';
import register from "../components/registe";
import searchPage from "../components/searchPage";
import registerLog from "../components/registerLog";
import VueRouter from 'vue-router';
Vue.use(VueRouter);

let router=new VueRouter({
    routes:[
        {
            path:'/',
            redirect:'/main'
        },
        {
            path:'/main',
            component:main,
            children:[
                {
                    path:'',
                    component:home
                },
                {
                    path:'goods',
                    component:goods,
                },
                {
                    path:'carts',
                    component:carts
                },
                {
                    path:'personal',
                    component:personal,
                    beforeEnter:(to,from,next)=>{
                        let token=localStorage.getItem('name')
                        if(token){
                            next()
                        }else{
                            next('/main/register')
                        }
                    }
                },
                {
                    path:'register',
                    component:register
                },
                {
                    path:'searchPage',
                    component:searchPage
                },
                {
                    path:'registerLog',
                    component:registerLog
                },
            ]
        }
    ]
})


export default router