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
        commit("getDealer", res.data.list)
    }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}