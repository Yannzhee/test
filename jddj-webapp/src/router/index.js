import Vue from 'vue'
import home from '../views/tabs/home'
import goods from '../views/tabs/goods'
import personal from '../views/tabs/personal'
import carts from '../views/tabs/carts'
import main from '../views/main'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

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
                    component:goods
                },
                {
                    path:'carts',
                    component:carts
                },
                {
                    path:'personal',
                    component:personal
                }
            ]
        }
    ]
})



export default router