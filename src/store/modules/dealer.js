import { getDealerList } from "../../services/index"


const state = {
    DealerList:[]
}
const mutations = {
    getDealer(state, payload) {
        state.DealerList = payload
    }
}
const actions = {
    async getDealerList({ commit }, payload) {
        let res = await getDealerList(payload);
        console.log(res)
        // console.log(res.data, "就是我当前根据点击的下标找到属于我的代码")
        commit("getDealer", res.data.list)
    }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}