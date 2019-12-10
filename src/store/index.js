import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from "vuex/dist/logger"

// 引入子模块
import home from "./modules/home"
import detail from "./modules/detail"
import img from "./modules/img"
import color from "./modules/color"
import selectCity from "./modules/selectCity"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home,
    detail,
    img,
    color,
    selectCity
  },
  plugins: [createLogger()]
})
