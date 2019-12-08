import Vue from 'vue'
import Vuex from 'vuex'
import creareLogger from "vuex/dist/logger"

import home from "./modules/home.js"
import detail from "./modules/detail.js"
Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    home,
    detail
  },
  plugins:[creareLogger()]

})
