import {getMasterBrandList,getRightlist,getdesclist} from  "../../services/index"
// import {getRightlist} from "../../services/index"

//定义一个list数据
const state={
    list:[],
    arr:[],
    rightlist:[],
    rightarr:[],
}
//定义一个mutatios的方法

const mutations={
    updateList(state,payload){
        if(payload.code==1){
           payload.data.map((item,index)=>{
               let letter=item.Spelling[0];
               let newArr=payload.data.filter(item=>item.Spelling[0]==letter)
               if(state.arr.findIndex(item=>item.letter==letter)===-1){
                    state.arr.push({letter,newArr})
               }
           })
           console.log(state.arr)
        }else{
            alert(payload.msg)
        }
    },
    getright(state,payload){
            state.rightlist=payload
            if(payload.code==1){
                state.rightarr=payload
            }else{
                alert(payload.msg)
            }
    }
}
const actions={
    async getMasterBrandList({commit},payload){
        let res=await getMasterBrandList()
        console.log("res...",res)    
        commit("updateList",res)
    },
    async getRightlist({commit},payload){
        let res=await getRightlist(payload)
        console.log(res.data,"就是我当前根据点击的下标找到属于我的代码")
        commit("getright",res)
    }
}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}