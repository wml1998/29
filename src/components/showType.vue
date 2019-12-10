<template>
<!-- 组件：再查看车款页面查看车款 -->
  <div class="typebox">
    <div class="allCarType">
      <p class="alltype" @click="allcartype">全部车款</p>
    </div>

    <div>
      <div class="c-type">
        <span
          v-for="(item,index)  in year"
          @click="chengeyear(item,index)"
          :class="{active:curIndex==index}"
          :key="index"
        >{{item}}</span>
      </div>
    </div>

    <div v-for="(item,index) in currentList" :key="index">
      <p class="every-title">{{item.key}}</p>
      <ul class="showlist">
        <li class="listyle" v-for="(item,index) in item.list" :key="index" @click="jumpimg(item.car_id)">
          <p class="p-first">
            <span>{{item.market_attribute.year}}款 {{item.car_name}}</span>
            <span class="offerprice">{{item.market_attribute.dealer_price_min}}起</span>
          </p>
          <p class="p-twice">
            <span>{{item.horse_power}}马力{{item.gear_num}}档{{item.trans_type}}</span>
            <span class="offerprice">指导价 {{item.market_attribute.official_refer_price}}</span>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      imgid: this.$route.query.id,
      curIndex: 0
    };
  },
  computed: {
    ...mapState({
      year: state => state.detail.yearday,
      currentList: state => state.detail.currentList
    })
  },
  created() {
    this.getDescList(this.$route.query.id);
    
  },
  methods: {
    ...mapActions({
      //解构
      getDescList: "detail/getDescList"
     

    }),
    ...mapMutations({
      //解构
      updatayear: "detail/updatayear",
       setCarId: 'color/setCarId'
    }),
    chengeyear(item,index) {
      //点击tab切换时的操作
      this.updatayear(item);
      this.getDescList(this.$route.query.id);
       this.curIndex = index;
    },
    jumpimg(carId){
      this.setCarId(carId)
       this.$emit('update:showType', false)
      console.log(carId,"carid")
      
    },
    allcartype(){
      this.$emit('update:showType', false)
    }
  }
};
</script>
<style lang="scss">
#app {
  width: 100%;
  height: 100%;
}

.active {
  color: #00afff;
}
.allCarType{
  p:hover{
    opacity:.7
  }
}
.typebox {
  width: 100%;
  height: 100%;
  background: #f4f4f4;
  overflow: auto;
}
.alltype {
  margin: 0.15rem 0;
  font-size: 0.34rem;
  color: #00afff;
  background: #fff;
  text-align: center;
  line-height: 0.8rem;
  height: 0.8rem;
}
.c-type {
  margin-top: 0.15rem;
  padding-left: 0.2rem;
  font-size: 0.3rem;
  line-height: 0.76rem;
  height: 0.76rem;
  background: #fff;
  overflow-x: scroll;
  span{
    padding-right: .42rem
  }
}
.every-title {
  padding: 0 0.2rem;
  height: 0.5rem;
  line-height: 0.5rem;
  font-size: 0.24rem;
  color: #666;
  background: #eee;
}
.showlist {
  background: #fff;
  li {
    margin: 0 0.2rem;
    padding: 0.28rem 0.06rem;
    border-bottom: 1px solid #eee;
    box-sizing: border-box;
    height: 1.25rem;
    line-height: 1;
    p:first-child {
      font-size: 0.3rem;
      span:nth-child(1) {
        width: 5rem;
        display: inline-block;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      span:nth-child(2) {
        float: right;
        color: red;
        font-size: 0.26rem;
      }
    }
    p:nth-child(2) {
      padding-top: 0.16rem;
      font-size: 0.24rem;
      span:nth-child(1) {
        color: #b3b3b3;
      }
      span:nth-child(2) {
        color: #818181;
        float: right;
      }
    }
  }
}
</style>
