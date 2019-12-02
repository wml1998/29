import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: "/home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/home/car",
    component: () => import("../views/car/car.vue")
  }, {
    path: "/home/desc",
    component: () => import("../views/desc/desc.vue")
  }, {
    path: "/home/img",
    component: () => import("../views/img/img.vue")
  },
  {
    path: "*",
    redirect: "/home"
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
