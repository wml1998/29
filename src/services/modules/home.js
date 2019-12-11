import request from "../../utils/request"
export let getMasterBrandList=()=>{
    return request('/v2-car-getMasterBrandList.html')
}//进入首页就调用
export let getRightlist=(MasterID)=>{
    return request("/v2-car-getMakeListByMasterBrandId.html",{params:{MasterID}})
}//右侧抽屉的数据
export let getdesclist=(SerialID)=>{
    return request("/v2-car-getInfoAndListById.html",{params:{SerialID}})
}//点详情
export let getImgList=(SerialID)=>{
    return request("/v2-car-getImageList.html",{params:{SerialID}})
}
// 颜色
export let getMasterSeries=(params)=>{
    return request("/v2-car-getImageList.html",{params})
}
// 省市数据
export let getSelect=()=>{
    return request("/v1-city-alllist.html")
}
//城市数据
export let getSelectRight=(provinceid)=>{
    return request("/v1-city-alllist.html",{params:{provinceid}})
}
// 车系+城市的id
export let getDealerList=({car_id,cityId})=>{
    console.log(car_id,cityId);
    
    return request("/v2-dealer-alllist.html",{params:{carId:car_id,cityId}})
}