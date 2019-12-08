import request from "../../utils/request"

//获取首页品牌列表
export let getMasterBrandList=()=>{
    return request("/v2-car-getMasterBrandList.html")
}

//获取商品详细信息的id
export let getMakeList=(MasterID)=>{
    return request("v2-car-getMakeListByMasterBrandId.html",{params:{MasterID}})
}

//获取详细的信息
export let getdesclist=(SerialID)=>{
    return request("/v2-car-getInfoAndListById.html",{params:{SerialID}})
}
