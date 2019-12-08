import { getdesclist} from "../../services/modules/home"

const state = {
    desclist: {},   // 元数据
    current: '全部',    // 当前选择年份 
    currentList: [],    // 当前年份的车款数据 
    newarr: []
}


const mutations={
    updateDesclist(){}


}

const actions= {
    async getDescList({ commit }, payload) {
        let res = await getdesclist(payload)
        console.log(res)
        commit("updateDesclist", res)
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}