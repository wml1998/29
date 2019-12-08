import Vue from 'vue'
import VueRouter from 'vue-router'
//loading组件
import {Indicator} from "mint-ui"

Vue.use(VueRouter)

let spinRoute={
  show(){
    Indicator.open({spinnerType: 'fading-circle'})
  },
  resolve(resolve){
       return component=>{
         setTimeout(() => {
           Indicator.close()
           resolve(component)
         }, 40);
       }
  }
}



const routes = [
  {
    path: "/home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/home/car",
    component:resolve=>{
      spinRoute.show();
      require(["../views/car/car.vue"],spinRoute.resolve(resolve))
    },
    meta:{
      title:"详情页"
    }
    // component: () => import("../views/car/car.vue")
  }, {
    path: "/home/desc",
    component: () => import("../views/desc/desc.vue")
  }, {
    path: "/home/img",
    component: () => import("../views/img/img.vue")
  },{
       path:"/home/color",
       component:()=>import("../views/color/color.vue")
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
