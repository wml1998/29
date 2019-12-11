<template>
  <div class="imgbox">
    <div class="flexwrap">
      <p class="color" @click="carcolor">颜色</p>
      <p class="type" @click="cattype">车款</p>
    </div>
    <div class="contbox">
      <Showimg v-for="(item,index) in imgList" :item="item" :key="index" />
    </div>
    <transition name="scroll-top">
      <div class="wrap" v-show="showColor">
        <Color :Seriid="serid" :showColor.sync="showColor" />
      </div>
    </transition>
  </div>
</template>

<script>
import Color from "../../components/carColor.vue";
import Showimg from "../../components/showimg.vue";
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState({
      imgList: state => state.img.imgList
    })
  },
  components: {
    Showimg,
    Color
  },
  data() {
    return {
      showColor: false,
      serid: this.$route.query.id
    };
  },
  created() {
    this.getImgList(this.$route.query.id);
    // console.log(this.$route.query.id);
  },
  methods: {
    ...mapActions({
      getImgList: "img/getImgList"
    }),
    carcolor() {
      (this.showColor = true), console.log(this.showColor);
      console.log(this.serid);
    },
    cattype() {}
  }
};
</script>

<style lang="scss" scoped>
.scroll-top-enter,
.scroll-top-leave-to {
  transform: translate3d(0, 100%, 0);
}
.scroll-top-enter-active,
.scroll-top-leave-active {
  transition: transform 0.3s linear;
}
.imgbox {
  background: #f4f4f4;
}
.flexwrap {
  position: fixed;
  background: #fff;
  text-align: center;
  top: 0;
  width: 100%;
  height: 0.8rem;
  -webkit-box-align: center;
  align-items: center;
  box-sizing: border-box;
  z-index: 99;
  display: flex;
  -webkit-box-direction: normal;
  p {
    -webkit-box-flex: 1;
    flex: 1;
    text-align: center;
    box-sizing: border-box;
    color: #454545;
    display: inline-block;
  }
  .type {
    border-left: 1px solid #ececec;
  }
}
.wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  background: #fff;
  z-index: 100;
}
// .contbox {
// }
</style>

