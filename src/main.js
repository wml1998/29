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
Vue.use(VueLazyload)
Vue.use(Mint)
//引入vant
import { Swipe, SwipeItem, ImagePreview } from 'vant';
import 'vant/lib/index.css';
Vue.use(Swipe).use(SwipeItem);
Vue.use(ImagePreview);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
