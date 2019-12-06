import {getImgList} from "../../services/index"

const state={
    imgList:[],

}
const mutations = {
    getimglist(state, payload) {
        state.imgList = payload.map(item=>{
            item.List=item.List.map(ite=>{
                ite.Url=ite.Url.replace('{0}',3)
                return ite
            })
            return item
        })
        console.log( state.imgList)
        // if (payload.code == 1) {
        //     state.rightarr = payload
        // } else {
        //     alert(payload.msg)
        // }
    }
}
const actions = {
    async getImgList({ commit }, payload) {
        console.log(payload,"xiabiao")
        let res = await getImgList(payload)
        console.log(res.data,"wodetupian")
        commit("getimglist", res.data)
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}