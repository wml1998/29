import request from "../../utils/request"

// 获取图片列表
export let getImageList=(params)=>{
    return request("/v2-car-getImageList.html", {params})
}

// 获取图片分类列表
export let getImageTypeList=(params)=>{
    return request("/v2-car-getCategoryImageList.html", {params})
}