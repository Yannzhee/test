import Vue from 'vue'
import home from '../views/tabs/home'
import goods from '../views/tabs/goods'
import personal from '../views/tabs/personal'
import carts from '../views/tabs/carts'
import main from '../views/main'
import VueRouter from 'vue-router'
import goodslist01 from "../views/tabs/goods/goodslist01";
import goodslist02 from "../views/tabs/goods/goodslist02";
import goodslist03 from "../views/tabs/goods/goodslist03";
import goodslist04 from "../views/tabs/goods/goodslist04";
import goodslist05 from "../views/tabs/goods/goodslist05";
import goodslist06 from "../views/tabs/goods/goodslist06";
import goodslist07 from "../views/tabs/goods/goodslist07";
import goodslist08 from "../views/tabs/goods/goodslist08";
import goodslist09 from "../views/tabs/goods/goodslist09";
import goodslist10 from "../views/tabs/goods/goodslist10";
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
                    component:goods,
                    children:[
                        {
                            path:'goodslist01',
                            component:goodslist01
                        },
                        {
                            path:'goodslist02',
                            component:goodslist02
                        },
                        {
                            path:'goodslist03',
                            component:goodslist03
                        },
                        {
                            path:'goodslist04',
                            component:goodslist04
                        },
                        {
                            path:'goodslist05',
                            component:goodslist05
                        },
                        {
                            path:'goodslist06',
                            component:goodslist06
                        },
                        {
                            path:'goodslist07',
                            component:goodslist07
                        },
                        {
                            path:'goodslist08',
                            component:goodslist08
                        },
                        {
                            path:'goodslist09',
                            component:goodslist09
                        },
                        {
                            path:'goodslist10',
                            component:goodslist10
                        }
                    ]
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