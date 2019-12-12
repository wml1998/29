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
    }
}
const actions = {
    async getImgList({ commit }, payload) {
        let res = await getImgList(payload)
        commit("getimglist", res.data)
    },
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}