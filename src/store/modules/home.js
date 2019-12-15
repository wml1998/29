import { getMasterBrandList, getRightlist, getdesclist } from "../../services/index"
//定义一个list数据
const state = {
    list: [],
    arr: [],
    rightlist: [],
    rightarr: [],
}
//定义一个mutatios的方法
const mutations = {
    updateList(state, payload) {
        if (payload.code == 1) {
            payload.data.map((item, index) => {
                let letter = item.Spelling[0];
                let newArr = payload.data.filter(item => item.Spelling[0] == letter)
                if (state.arr.findIndex(item => item.letter == letter) === -1) {
                    state.arr.push({ letter, newArr })
                }
            })
        } else {
            alert(payload.msg)
        }
    },
    getRight(state, payload) {
        state.rightlist = payload
        if (payload.code == 1) {
            state.rightarr = payload
        } else {
            alert(payload.msg)
        }
    }
}
const actions = {
    async getMasterBrandList({ commit }, payload) {
        let res = await getMasterBrandList()
        commit("updateList", res)
    },
    async getRightlist({ commit }, payload) {
        let res = await getRightlist(payload)
        commit("getRight", res)
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}

