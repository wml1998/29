import { getSelect,getSelectRight } from "../../services/index"


const state = {
    selectdata:[],
    tag :false,
    selectcity:[],
    title:'北京',
}
const mutations = {
    updateSelect(state,payload){
       state.selectdata=payload
    },
    changeTag(state,payload){
        state.tag=payload
    },
    updateSelectCity(state,payload){
        state.selectcity=payload
    },
    changeTitle(state,payload){
        state.title=payload
    },
    updateTag(state,payload){
        state.tag=payload
    }

}
const actions = {
    //省市
    async getSelect({ commit }, payload) {
        let res = await getSelect(payload)
        // console.log(res)
        commit("updateSelect", res.data)
    },
    //对应城市数据
    async getSelectRight({ commit }, payload) {
        let res = await getSelectRight(payload)
        // console.log(res,"-----------")
        commit("updateSelectCity", res.data)
    },

}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}