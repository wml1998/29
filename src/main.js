import Vue from 'vue'
import './reset.css'
import App from './App.vue'
import router from './router'
import store from './store'
import Mint from 'mint-ui'
import VueLazyload from 'vue-lazyload'
// import './reset.css'
Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: require("../public/timg.gif"),
  attempt: 1
})


// Vue.use(VueLazyLoad,{
//     loading:require('common/image/default.png')  //这个就是你本地图片的地址
// })


Vue.use(VueLazyload)
Vue.use(Mint)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
