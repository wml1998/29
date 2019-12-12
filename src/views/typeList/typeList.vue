<template>
  <div class="type">
    <div>
      <div class="c-type">
        <span v-for="(item,index) in yearday" :key="index" class="active">{{item}}</span>
      </div>
      <div class="tip" v-for="(item,index) in currentList" :key="index">
        <p>{{item.key}}</p>
        <ul>
          <li v-for="(ite,ind) in item.list" :key="ind">
            <p>
              <span>{{ite.car_name}}</span>
              <span>{{ite.dealer_price}}</span>
            </p>
            <p>
              <span>{{ite.trans_type}}</span>
              <span>指导价:{{ite.official_refer_price}}</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState({
      currentList: state => state.detail.currentList,
      yearday: state => state.detail.yearday
    })
  },
  methods: {
    ...mapActions({
      getDescList: "detail/getDescList"
    })
  },
  created() {
    let SerialID = JSON.parse(localStorage.getItem("car")).SerialID;
    console.log(SerialID, "-------------------");
    this.getDescList(SerialID);
  }
};
</script>

<style lang="scss" scoped>
.type {
  position: absolute;
  top: 0;
  z-index: 101;
  background: #f4f4f4;
  height: 100%;
  width: 100%;
  -webkit-animation: c 0.2s ease forwards;
  animation: c 0.2s ease forwards;
}
span.active,
.type .c-type span.active {
  color: #00afff;
}
div {
  display: block;
}
.c-type {
  margin-top: 0.15rem;
  padding-left: 0.2rem;
  font-size: 0.3rem;
  line-height: 0.76rem;
  height: 0.76rem;
  background: #fff;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  div {
    .tip {
      padding: 0 0.2rem;
      height: 0.6rem;
      line-height: 0.6rem;
      font-size: 0.24rem;
      color: #666;
      background: #eee;
    }
  }
}
.type ul {
    background: #fff;
}
.type ul li {
    margin: 0 .2rem;
    padding: .28rem .06rem;
    border-bottom: 1px solid #eee;
    box-sizing: border-box;
    height: 1.25rem;
    line-height: 1;
    p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
}
.type ul li p:first-child span:nth-child(1) {
    width: 5rem;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
.type ul li p:first-child span:nth-child(2) {
    float: right;
    color: red;
    font-size: .26rem;
}
.type ul li p:nth-child(2) {
    padding-top: .16rem;
    font-size: .24rem;
}
.type ul li p:nth-child(2) span:first-child {
    color: #b3b3b3;
}
.type ul li p:nth-child(2) span:nth-child(2) {
    color: #818181;
    float: right;
}
</style>