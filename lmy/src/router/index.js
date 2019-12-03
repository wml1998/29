import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path:"/home/cars",
    component:()=>import("../views/cars/cars")
  },
  {
    path:"/home/imgurl",
    component:()=>import("../views/imgurl/imgurl")
  },
  {
    path:"/home/desc",
    component:()=>import("../views/desc/desc")
  },
  {
    path:"*",
    redirect:"/home"
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
