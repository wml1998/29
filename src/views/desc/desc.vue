<template>
  <div class="wrap-desc" ref="wrapdesc" @scroll="getheight($event)">
    <!-- 给我的当前最大元素绑定一个 -->
    <div class="desc-top" ref="moreshop">可向多个商家咨询最低价，商家及时回复</div>
    <div class="desc-content">
      <div class="commit" @click="typeList">
        <div data-hover="hover" class="q-info flex-row">
          <img :src="desclist.CoverPhoto" alt>
          <div class="flex-column flex-centerX">
            <p>{{desclist.AliasName}}</p>
            <p>2019款 35 TFSI 进取版 国V</p>
          </div>
        </div> 
      </div>
      <div class="self-info">
        <p class="tip">个人信息</p>
        <ul>
          <li>
            <span>姓名</span>
            <input type="text" placeholder="输入你的真实中文姓名">
          </li>
          <li>
            <span>手机</span>
            <input type="tel" placeholder="输入你的真实中文姓名">
          </li>
          <li>
            <span>城市</span>
            <span @click="tabClick">{{title}}</span>
          </li>
        </ul>
        <div class="quotation">
          <button @click="alertClick">{{desclist.BottomEntranceTitle}}</button>
        </div>
      </div>
      <div class="dealer-info" ref="reportPrice">
        <!-- {{desclist.list}} -->
        <p class="tip">选择报价经销商</p>
        <ul v-for="(item,index) in DealerList" :key="index">
          <li
            data-hover="hover"
            :class="{active:item.newsRemainingDays==1}"
            @click="checkTag(item)"
          >
            <p>
              <span>{{item.dealerShortName}}</span>
              <span>{{item.vendorPrice}}万</span>
            </p>
            <p>
              <span>{{item.address}}</span>
              <span>{{item.saleRange}}</span>
            </p>
          </li>
        </ul>
      </div>
      <div class="supp-info"></div>
    </div>
    <transition name="scoll">0
      <div class="select-city" v-show="tag">
        <SelectCity/>
      </div>
    </transition>
<<<<<<< HEAD

=======
    <!-- 询问最低价 就是最后需要判断滑动的距离 来显现出button的按钮 -->
    <!-- <div class="desc-footer">
      <button data-hover="hover" @click="alertClick">询最低价</button>
    </div> -->
>>>>>>> 142595e453e21c4d5f655da5e5720a8b3353871b
    <div class="alert" v-if="flag">
      <div class="alert-content">
        <div class="wrap">
          <span class="alert-title-sub" id="subTitle"></span>
          <span class="alert-title">请输入真实的中文姓名</span>
          <span class="alert-ok" data-hover="hover" @click="AlertOk">好</span>
        </div>
      </div>
    </div>
    <div class="desc-footer" ref="answerFloor">
      <button data-hover="hover">询最低价</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import Showtype from "../../components/showType.vue";
import SelectCity from "../../components/selectCity";
import axios from "axios";
export default {
  computed: {
    ...mapState({
      tag: state => state.selectCity.tag,
      title: state => state.selectCity.title,
      DealerList: state => state.dealer.DealerList
    })
  },
  components: {
    Showtype
  },
  created() {
    let car_id = localStorage.getItem("car_id");
    this.getDealerList({ car_id, cityId: "201" });
  },
  methods: {
    ...mapMutations({
      changeTag: "selectCity/changeTag"
    }),
    ...mapActions({
      getDealerList: "dealer/getDealerList"
    }),
    tabClick() {
      console.log(this.desclist);
      this.changeTag(true);
    },
    alertClick() {
      this.flag = true;
    },
    AlertOk() {
      this.flag = false;
    },
    // typeList(){
    //   this.$router.push(
    //   {
    //     path:"/home/typeList"
    //   })
    // },
    getheight(e) {
      let far =
        this.$refs.reportPrice.offsetTop - this.$refs.moreshop.offsetHeight;
      if (this.$refs.wrapdesc.scrollTop > far) {
        this.$refs.answerFloor.style.display = "block";
      } else {
        this.$refs.answerFloor.style.display = "none";
      }
    },
    checkTag(item) {
      item.newsRemainingDays = !item.newsRemainingDays;
    }
  },
  data() {
    return {
      desclist: JSON.parse(localStorage.getItem("car")),
      flag: false
    };
  },
  components: {
    SelectCity
  }
};
</script>
<style lang="scss" scoped>
.wrap-desc {
  width: 100%;
  height: 100%;
  background: #f4f4f4;
  overflow: auto;
}
.descBox {
  width: 100%;
  height: 100%;
}
.desc-top {
  height: 0.6rem;
  line-height: 0.6rem;
  width: 100%;
  background: #79cd92;
  text-align: center;
  color: #fff;
  position: fixed;
  top: 0;
  z-index: 104;
}
.commit {
  width: 100%;
  height: 2rem;
  background: #fff;
  margin-top: 0.6rem;
}
.q-info {
    background: #fff;
    padding: .32rem .18rem .24rem;
    position: relative;
    height: 2rem;
    box-sizing: border-box;
}
.flex-column, .flex-row {
    display: -webkit-box;
    display: flex;
    -webkit-box-direction: normal;
}
.flex-row {
    -webkit-box-orient: horizontal;
    flex-direction: row;
}
.q-info:before {
    content: "";
    display: inline-block;
    padding-top: .16rem;
    padding-right: .16rem;
    border-top: 2px solid #ccc;
    border-right: 2px solid #ccc;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    position: absolute;
    right: .26rem;
    top: .9rem;
}
 .q-info img {
    width: 2.3rem;
    height: 1.41rem;
    border: 1px solid #eee;
    box-sizing: border-box;
    border-radius: 5px;
}
.q-info div {
    margin-left: .2rem;
    width: 4.3rem;
}
.flex-centerX {
    -webkit-box-pack: center;
    justify-content: center;
}
.flex-column, .flex-row {
    display: -webkit-box;
    display: flex;
    -webkit-box-direction: normal;
}
.flex-column {
    -webkit-box-orient: vertical;
    flex-direction: column;
}
.q-info div p:first-child {
    font-size: .36rem;
    line-height: 1;
}
.q-info div p:nth-child(2) {
    margin-top: .26rem;
    font-size: .32rem;
    line-height: 1.2;
    color: #333;
}
.self-info {
  width: 100%;
  height: 4.4rem;
  background: #fff;
  .tip {
    padding: 0 0.2rem;
    height: 0.6rem;
    line-height: 0.6rem;
    font-size: 0.24rem;
    color: #666;
    background: #eee;
  }
}
.self-info ul {
  background: #fff;
  padding: 0 0.2rem;
  li {
    font-size: 0.32rem;
    height: 0.88rem;
    line-height: 0.88rem;
    border-bottom: 1px solid #eee;
    box-sizing: border-box;
    color: #000;
    input {
      font-size: 0.32rem;
      padding-right: 0.2rem;
      width: 88%;
      text-align: right;
      box-sizing: border-box;
      color: #555;
      border: none;
      text-indent: 0px;
      text-shadow: none;
      display: inline-block;
      outline: none;
    }
  }
  span:nth-child(2) {
    display: inline-block;
    width: 88%;
    color: #555;
    text-align: right;
    box-sizing: border-box;
  }
  span:nth-child(2):after {
    content: "";
    display: inline-block;
    padding-top: 0.16rem;
    padding-right: 0.16rem;
    border-top: 1px solid silver;
    border-right: 1px solid silver;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }
}
.quotation button {
  font-size: 0.32rem;
  color: #fff;
  width: 80%;
  background: #3aacff;
  height: 0.7rem;
  border-radius: 0.1rem;
  outline: none;
  border: none;
  margin: 0.2rem 0.7rem;
}
.dealer-info {
  background: #fff;
  .tip {
    padding: 0 0.2rem;
    height: 0.6rem;
    line-height: 0.6rem;
    font-size: 0.24rem;
    color: #666;
    background: #eee;
  }
}
.dealer-info li {
  position: relative;
  padding: 0.26rem 0 0.26rem 0.54rem;
  border-bottom: 1px solid #eee;
  box-sizing: border-box;
  height: 1.65rem;
}
.dealer-info li p:first-child {
  font-size: 0.3rem;
}
.dealer-info li p:first-child span:last-child {
  font-size: 0.24rem;
  float: right;
  color: red;
  margin-right: 0.2rem;
}
.dealer-info ul li:before {
  content: "";
  display: inline-block;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  border: 2px solid #ccc;
  box-sizing: border-box;
  position: absolute;
  left: 0.05rem;
  top: 50%;
  -webkit-transform: translate3d(0, -50%, 0);
  transform: translate3d(0, -50%, 0);
}
.dealer-info ul li.active:before {
  background: #3aacff;
  border: none;
}
.dealer-info li.active:after {
  content: "";
  display: inline-block;
  padding-top: 10px;
  padding-right: 6px;
  border: 2px solid #fff;
  -webkit-transform: rotate(40deg) translate3d(0, -50%, 0);
  transform: rotate(40deg) translate3d(0, -50%, 0);
  position: absolute;
  left: 0.07rem;
  border-left: none;
  border-top: none;
  top: 47%;
}
.dealer-info li p:nth-child(2) {
  margin-top: 0.1rem;
  font-size: 0.24rem;
  color: #a2a2a2;
}
.dealer-info li p:nth-child(2) span:first-child {
  display: inline-block;
  max-width: 5rem;
}
.dealer-info li p:nth-child(2) span:last-child {
  display: inline-block;
  font-size: 0.24rem;
  margin-right: 0.2rem;
}
.desc-footer {
  width: 100%;
  z-index: 105;
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
}
.desc-footer button {
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  background: #3aacff;
  text-align: center;
  font-size: 0.34rem;
  color: #fff;
  outline: none;
  -webkit-appearance: none;
  border: none;
}
.supp-info {
  text-align: center;
  height: 0.4rem;
}
.select-city {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 888;
  background: #fff;
}
.scoll-enter,
.scoll-leave-to {
  transform: translate3d(0, 100%, 0);
}
.scoll-enter-active,
.scoll-leave-active {
  transition: transform 0.3s linear;
}
.select-city .province {
  height: 100%;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}
.alert {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.4);
  -webkit-animation: a 0.3s ease forwards;
  animation: a 0.3s ease forwards;
}
.alert .alert-content {
  position: fixed;
  z-index: 9999;
  background: #f6f6f6;
  border-radius: 7px;
  width: 72%;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
  text-align: center;
  font-size: 0;
}
.wrap {
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}
.alert .alert-content .alert-title-sub {
  display: block;
  width: 80%;
  margin: 0 auto;
  padding: 18px 0 6px;
  line-height: 22px;
  font-size: 16px;
  font-weight: 700;
}
.alert .alert-content .alert-title {
  display: block;
  margin: 0 auto;
  padding: 0 0 20px;
  max-width: 86%;
  line-height: 16px;
  font-size: 13px;
}
.alert .alert-content .alert-ok {
  position: relative;
  display: block;
  width: 100%;
  padding: 14px 0;
  border-radius: 0 0 7px 7px;
  line-height: 16px;
  font-size: 16px;
  color: #007aff;
  transition: background-color 0.1s;
}
</style>
