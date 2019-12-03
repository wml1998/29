import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Mint from 'mint-ui'
import VueLazyload from 'vue-lazyload'
// import './reset.css'
Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: '../public/timg.gif',
  attempt: 1
})


Vue.use(VueLazyload)
Vue.use(Mint)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
