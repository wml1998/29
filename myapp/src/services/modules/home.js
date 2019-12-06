import request from "../../utils/request"
export let getMasterBrandList=()=>{
    return request('/v2-car-getMasterBrandList.html')
}//进入首页就调用
export let getRightlist=(MasterID)=>{
    return request("/v2-car-getMakeListByMasterBrandId.html",{params:{MasterID}})
}//右侧抽屉的数据
export let getdesclist=(SerialID)=>{
    return request("/v2-car-getInfoAndListById.html",{params:{SerialID}})
}//点感情
export let getImgList=(SerialID)=>{
    return request("/v2-car-getImageList.html",{params:{SerialID}})
}
export let getMasterSeries=(params)=>{
    return request("/v2-car-getModelImageYearColor.html",{params})
}
