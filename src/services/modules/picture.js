import request from "../../utils/request"

// 获取图片列表
export let getImgList=(SerialID)=>{
    return request("/v2-car-getImageList.html",{params:{SerialID}})
}

// 获取图片分类列表
export let getImageTypeList=(params)=>{
    return request("/v2-car-getCategoryImageList.html", {params})
}