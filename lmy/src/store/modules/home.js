import {getMasterBrandList,getMakeList,} from "../../services/modules/home"

const state={
    arr:[],
    list:[],
    newarr:[],
    rightArr:[]
   
}

const mutations={
    updateList(state,payload){
        state.list=payload;
        if(payload.code==1){
            payload.data.map((item,index)=>{
                let letter=item.Spelling[0]
                let newarr=payload.data.filter(item=>item.Spelling[0]==letter)
                if(state.arr.findIndex(item=>item.letter==letter)===-1){
                    state.arr.push({letter,newarr})
                }
                // console.log(state.arr,"===============")
        })
        }else{
            console.log(22222)
        }
    },
    getRightList(state,payload){
        state.rightArr=payload
        // if(payload.code==1){
        //     payload.data.map((item,index)=>{
                
        //     })
        // }
    }
   
}

const actions={
    async getMasterBrandList({commit},payload){
        let res=await getMasterBrandList();
        // console.log("res...=================",res)
        commit("updateList",res) 
    } ,
    async getMakeList({commit},payload){
        let res=await getMakeList(payload)
        // console.log(res,"-------------------")
        commit("getRightList",res)
    }
}

export default {
    namespaced:true,
    state,
    mutations,
    actions  
}
