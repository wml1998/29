<template>
  <div class="car" v-if="Object.keys(desclist).length"><!--先判断数据的 不然数据渲染不出来  -->
     <!-- 顶层的展示banner栏 -->
    <div class="content">
      <div class="img" @click="goImg">
        <img :src="desclist.CoverPhoto" alt="">
        <span class="data-hover">{{desclist.pic_group_count}}张照片</span>
      </div>
      <div class="info">
        <div class="text">
          <p>{{desclist.market_attribute.dealer_price}}</p>
          <p>指导价:{{desclist.market_attribute.official_refer_price}}</p>
        </div>
        <div class="action">
            <button @click="chelun">{{desclist.BottomEntranceTitle}}</button>
        </div>
      </div>
    </div>
    <div class="c-type">
        <!-- <span
          v-for="(item,index) in year"
          :key="index"
          @click="tab(item)"
          :class="{active:current==item}"
        >{{item}}</span> -->
      </div>
      <!-- <List></List> -->
      <div class="inquiry-btn" @click="chelun">
        <li>{{desclist.BottomEntranceTitle}}</li>
        <li>本地销售商为你报价</li>
      </div>
  </div>
</template>

<script>
import { mapState, mapActions,mapMutations } from "vuex";
export default {
  computed: {
    ...mapState({
      desclist: state => state.home.desclist
    })
  },
  data() {
    return {};
  },
  created() {
    this.getdesclist(this.$route.query.id);
  },
  methods: {
    ...mapActions({
      getdesclist: "home/getdesclist"
    }),
    ...mapMutations({
      setCurrent:"home/setCurrent"
    }),
    chelun() {
      this.$router.push({
        name: "quotation",
        params: {
          id: this.SerialID
        }
      });
    },
    goImg(){
      this.$router.push('/img?serialId=' + this.SerialID);
    }
  }
};
</script>

<style lang="scss" scoped>
.car {
  width: 100%;
  height: 100%;
  background: #f4f4f4;
  list-style: nones;
  position: relative;
}
.inquiry-btn {
  position: sticky;
  bottom: 0;
  width: 100%;
  height: 55px;
  background: #09f;
  display: flex;
  flex-direction: column;
  align-items: center;
  li:nth-of-type(1) {
    width: 100px;
    height: 21.01px;
    color: #fff;
    font-size: 15px;
    margin: 6.03px 0 0;
    text-align: center;
    list-style: none;
  }
  li:nth-of-type(2) {
    width: 125px;
    height: 15.92px;
    color: #fff;
    font-size: 11.98px;
    list-style: none;
  }
}
.content {
  width: 100%;
  height: 260px;
  background: #fff;
  .img {
    width: 100%;
    height: 176px;
    position: relative;
    background: #f4f4f4;
    overflow: hidden;
    img {
      width: 100%;
      top: 50%;
      transform: translateY(-52%);
      position: absolute;
    }
    span {
      height: 17.75px;
      background: rgba(0, 0, 0, 0.6);
      color: #fff;
      font-size: 12px;
      padding: 0.9051px 5px;
      border-radius: 8px;
      position: absolute;
      right: 17px;
      bottom: 16px;
    }
  }
  .info {
    width: 100%;
    position: relative;
    .text {
      margin-top: 18px;
      padding-left: 14px;
      p:nth-of-type(1) {
        font-size: 18px;
        height: 23.8px;
        color: red;
      }
      p:nth-of-type(2) {
        font-size: 14px;
        height: 17.37px;
        color: #c5c5c5;
      }
    }
    .action {
      width: 187.5px;
      height: 35px;
      margin-right: 5px;
      position: absolute;
      right: 0;
      bottom: 3px;
      button {
        width: 100%;
        height: 100%;
        outline: none;
        border: none;
        font-size: 16px;
        border-radius: 7px;
        background: #00afff;
        color: #fff;
      }
    }
  }
}
.c-type {
  width: 100%;
  height: 45.95px;
  padding: 0 15px;
  background: #fff;
  display: flex;
  align-items: center;
  margin-top: 10px;
  span {
    width: 57px;
    height: 21px;
    font-size: 16px;
    padding: 0 23px 0 0;
    color: #000;
  }
  span.active {
    color: #3aacff;
  }
}
</style>