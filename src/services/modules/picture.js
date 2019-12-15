import request from "../../utils/request"
// 获取图片分类列表
export let getImageTypeList=(params)=>{
    return request("/v2-car-getCategoryImageList.html", {params})
}