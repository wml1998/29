<template>
  <div class="car" v-if="Object.keys(descList).length">
    <!-- 顶层的展示banner栏 -->
    <div class="content">
      <!-- 装载图片 -->
      <div class="img" @click="jumpimg()">
        <img :src="descList.CoverPhoto" alt>
        <span class="data-hover">{{descList.pic_group_count}}张照片</span>
      </div>
      <div class="info">
        <!-- 图片下方的当前数据 -->
        <div>
          <p>{{descList.market_attribute.dealer_price}}</p>
          <p>指导价:{{descList.market_attribute.official_refer_price}}</p>
        </div>
        <div class="btnbox">
          <!-- 立即购买的按钮 -->
          <button>{{descList.BottomEntranceTitle}}</button>
        </div>
      </div>
      <div class="car-list">
        <div class="c-type">
          <span v-for="(item,index) in year" @click="chengeyear(item)" :key="index">{{item}}</span>
        </div>
        <div>
          <div v-for="(item,index) in currentList" :key="index">
            <p class="every-title">{{item.key}}</p>
            <ul class="showlist">
              <li class="listyle" v-for="(item,index) in item.list" :key="index">
                <p class="p-first">{{item.market_attribute.year}}款{{item.car_name}}</p>
                <p class="p-twice">{{item.horse_power}}马力{{item.gear_num}}档{{item.trans_type}}</p>
                <p class="price">
                  <span class="offerprice">指导价 {{item.market_attribute.official_refer_price}}</span>
                  <span class="realprice">{{item.market_attribute.dealer_price_min}}起</span>
                </p>
                <button class="bottombutton">询问底价</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-clumn">
      <p class="answer">询问底价</p>
      <p class="answertwo">本地经销商为你报价</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      imgid:this.$route.query.id
    }
  },
  computed: {
    ...mapState({
      descList: state => state.detail.desclist,
      year: state => state.detail.newarr,
      currentList: state => state.detail.currentList
    })
  },
  created() {
    this.getDescList(this.$route.query.id);
  },
  methods: {
    ...mapActions({//解构
      getDescList: "detail/getDescList"
    }),
    ...mapMutations({//解构
      updatayear: "detail/updatayear"
    }),
    chengeyear(item) {//点击tab切换时的操作
      this.updatayear(item);
      this.getDescList(this.$route.query.id);
    },
    jumpimg(){
         console.log(this.imgid)
         this.$router.push({
           path: "/home/img",
           query:{id:this.imgid}
         })
    }
  }
};
</script>

<style lang="scss" scoped>
// /deep/ 覆盖scoped的样式
* {
  margin: 0;
  padding: 0;
}
.car {
  width: 100%;
  height: 100%;
  .content {
    height: 100%;
    .img {
      position: relative;
      height: 3.29rem;
      overflow: hidden;
      .data-hover {
        position: absolute;
        bottom: 0.3rem;
        right: 0.3rem;
        color: #fff;
        padding: 1px 0.1rem;
        border-radius: 0.2rem;
        background: rgba(0, 0, 0, 0.6);
        font-size: 0.24rem;
        z-index: 999;
      }
      img {
        width: 100%;
        top: 50%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        position: absolute;
      }
    }
    .info {
      padding: 0.36rem 0.2rem 0.3rem;
      background: #fff;
      position: relative;
      display: flex;
      div {
        width: 50%;
      }
    }
  }
}
.info div p:first-child {
  font-size: 0.36rem;
  color: red;
  font-weight: 500;
}
.info div p:nth-child(2) {
  font-size: 0.26rem;
  color: silver;
}
.btnbox {
  padding-top: 0.2rem;
  -webkit-box-pack: justify;
  justify-content: space-between;
  width: 50%;
  position: absolute;
  right: 0.1rem;
  top: 0.22rem;
  button {
    border-radius: 0.1rem;
    font-size: 0.32rem;
    height: 0.7rem;
    width: 3.75rem;
    border: none;
    box-sizing: border-box;
    background: #00afff;
    color: #fff;
  }
}
.car-list {
  padding-bottom: 1rem;
}
.c-type {
  border-top: 0.15rem solid #f4f4f4;
  padding: 0 0.3rem;
  font-size: 0.32rem;
  height: 0.77rem;
  line-height: 0.77rem;
  background: #fff;
  span {
    padding-right: 0.46rem;
  }
}
.every-title {
  padding: 0 0.2rem;
  height: 0.5rem;
  line-height: 0.5rem;
  font-size: 0.26rem;
  color: #999;
  background: #f4f4f4;
}
.showlist {
  .listyle:last-child {
    border-bottom: 0;
  }
  .listyle {
    padding: 0 0.2rem;
    overflow: hidden;
    border-bottom: 0.18rem solid #f4f4f4;
    .p-twice {
      color: #bdbdbd;
      font-size: 0.26rem;
    }
    .price {
      text-align: right;
      padding-bottom: 0.1rem;
      font-size: 0.24rem;
      color: #818181;
      .offerprice {
        text-align: right;
        padding-bottom: 0.1rem;
        font-size: 0.24rem;
        color: #818181;
      }
      .realprice {
        font-size: 0.3rem;
        color: #ff2336;
        margin-left: 0.1rem;
      }
    }
    .bottombutton {
      border: none;
      border-top: 1px solid #eee;
      width: 110%;
      height: 0.8rem;
      font-size: 0.32rem;
      color: #00afff;
      background: #fff;
      font-weight: 500;
      margin-left: -0.3rem;
    }
    .p-first {
      padding: 0.26rem 0 0.18rem;
      font-size: 0.3rem;
      line-height: 1;
      color: #3d3d3d;
    }
  }
}
.bottom-clumn {
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: 99;
  background: #3aacff;
  height: 1rem;
  color: #fff;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-orient: vertical;
  flex-direction: column;
  display: flex;
  -webkit-box-direction: normal;
  .answer {
    font-size: 0.32rem;
    margin-top: 0.12rem;
    font-weight: 500;
  }
  .answertwo {
    font-size: 0.24rem;
  }
}
</style>

