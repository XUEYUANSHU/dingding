import Vue from 'vue'

import Router from 'vue-router'



import HomePage from "@/views/index/HomePage"
import Products from "@/views/Products"
import UserCenter from "@/views/UserCenter"

// import AllProduct from "@/views/index/AllProduct"
// import ImTeam from "@/views/index/ImTeam"
// //JoinTeam
// import JoinTeam from "@/views/index/JoinTeam"
// import Share from "@/views/index/Share"




Vue.use(Router)

var routeData = [{
    path: '/',
    name: 'Home',
    component: HomePage
},
// {
//     path: '/imTeam',
//     name: 'ImTeam',
//     component: ImTeam
// },
//
// {
//     path: '/joinTeam',
//     name: 'JoinTeam',
//     component: JoinTeam
// },
//
// {
//     path: '/share',
//     name: 'Share',
//     component: Share
// },
    {
        path: '/',
        redirect: '/Home'
    },
    {
        path: '/Products',
        name: 'Products',
        component: Products
    },
    {
        path: '/UserCenter',
        name: 'UserCenter',
        component: UserCenter
    },
]


var router = new Router({
    routes: routeData
})


export default router;
