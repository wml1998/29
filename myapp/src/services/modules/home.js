import request from "../../utils/request"
export let getMasterBrandList=()=>{
    return request('/v2-car-getMasterBrandList.html')
}
export let getRightlist=(MasterID)=>{
    return request("/v2-car-getMakeListByMasterBrandId.html",{params:{MasterID}})
}