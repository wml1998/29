import { getMasterSeries, getImageTypeList } from "../../services/index"


const state = {
  seriesDate: [],
  EnlargementImgfalg: false,
  colorId: '',  // 选择的车系颜色
  carId: '',  // 选择的车款

  SerialID: "", //车系id
  ImageID: "", //分类id
  imageList: [], //分类图片列表
  current: 0,    // 轮播的当前图片
  count: '',  //当前分类图片总数
  page: 1,  //当前分页
  pageSize: 30,//每页数量
  showBanner: false//是否显示banner组件
}
const mutations = {
  getSeries(state, payload) {
    state.seriesDate = payload.data.map(item => {
      item.List = item.List.map(ite => {
        ite.Url = ite.Url.replace('{0}', 3)
        return ite
      })
      return item
    })
  },
  imgFalg() {
    state.EnlargementImgfalg = true
  },
  setColorId(state, payload) {
    state.colorId = payload;
  },
  setCarId(state, payload) {
    state.carId = payload;
  },
  setshowBanner(state, payload) {

    if (payload == true) {
      state.showBanner = payload
    } else {
      state.showBanner = false
    }
  },
  setSerialId(state, payload) {
    state.SerialID = payload;
  },
  setImageId(state, payload) {
    state.ImageID = payload;
    console.log(payload, "wwwwww")
  },
  setPage(state, payload) {
    state.page = payload;
  },
  // 设置当前轮播的图片下标
  setCurrent(state, payload) {
    state.current = payload;
  }
  ,
  setImageList(state, payload) {
    state.count = payload.Count;
    payload.ImageID && (state.ImageID = payload.ImageID);
    // 实现上拉加载
    if (state.page == 1) {
      state.imageList = payload.List;
    } else {
      state.imageList = state.imageList.concat(payload.List);
    }
  },
  //详情数据的更改
}
const actions = {
  async getMasterSeries({ commit, state }, payload) {
    let params = { SerialID: payload };
    // 判断是否选择颜色
    if (state.colorId) {
      params.ColorID = state.colorId;
    }
    // 判断是否选择车款
    if (state.carId) {
      params.CarId = state.carId;
    }
    let res = await getMasterSeries(params)
    commit('getSeries', res)
  },
  //图片分类列表的请求
  async getImageTypeList({ commit, state }, payload) {
    if (payload) {
      commit('setPage', payload);
    }
    let params = {
      SerialID: state.SerialID,
      ImageID: state.ImageID,
      Page: state.page,
      PageSize: state.pageSize
    }
   
    let res = await getImageTypeList(params);
    console.log(res.data)
    let { Count, List } = res.data;
    commit('setImageList', { Count, List });
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}