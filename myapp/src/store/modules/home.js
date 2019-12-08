import {
    getMasterBrandList,
    getMakeList
} from "../../services/modules/home"

const state = {
    arr: [],
    list: [],
    newarr: [],
    rightArr: [],
}
const mutations = {
    updateList(state, payload) {
        state.list = payload;
        if (payload.code == 1) {
            payload.data.map((item, index) => {
                let letter = item.Spelling[0]
                let newarr = payload.data.filter(item => item.Spelling[0] == letter)
                if (state.arr.findIndex(item => item.letter == letter) === -1) {
                    state.arr.push({
                        letter,
                        newarr
                    })
                }
                // console.log(state.arr,"===============")
            })
        } else {
            console.log(22222)
        }
    },
    getRightList(state, payload) {
        state.rightArr = payload
        if (payload.code == 1) {
            state.rightArr = payload
        } else {
            alert(payload.msg)
        }
    }
   

}

const actions = {
    // 获取的是 首页渲染的数据
    async getMasterBrandList({
        commit
    }, payload) {
        let res = await getMasterBrandList();
        commit("updateList", res)
    },
    // 获取的是 右边栏的数据
    async getMakeList({
        commit
    }, payload) {
        let res = await getMakeList(payload)
        // console.log(res,"-------------------")
        commit("getRightList", res)
    },
   

}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}