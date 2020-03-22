import Vue from 'vue'
import Router from 'vue-router'

import Home from "../views/home"
import Goods from "../views/goods"
import Cate from "../views/cate"
import Order from "../views/order"
import User from "../views/user"

import His from "../views/order/hisorder"
import Now from "../views/order/noworder"
import Logindetail from '../views/logindetail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: "/home"
    },
     {
      path: '/home',
      name:"home",
      component: Home,
      meta: {keepAlive: false},
      children:[{
      path: 'logindetail',
      name:"logindetail",
      component: Logindetail,
      meta: {keepAlive: true}
    }]
    },
     {
      path: '/goods',
      component: Goods,
      meta: {keepAlive: false}
    },
     {
      path: '/cate',
      component: Cate,
      meta: {keepAlive: false}
    },
     {
      path: '/order',
      name:"order",
      component: Order,
      meta: {keepAlive: false},
      children:[
         {path: '', redirect: "his"},//进入order时默认显示
      	 {path: 'his', component: His},
      	 {path: 'now',name:"now",component: Now,meta: {keepAlive: true}}
      ]
    },
    {
      path: '/user',
      name:"user",
      component: User,
      meta: {keepAlive: true}
    },
  ]
})
