<template>
  <div class="imgbox">
    <div class="flexwrap">
      <p class="color" @click="carcolor">{{carColor}}</p>
      <p class="type" @click="cattype">{{carStyle}}</p>
    </div>

    <div class="contbox">
      <Showimg v-for="(item,index) in imgList" :item="item" :key="index"/>
    </div>
    <!-- 图片列表 -->
    
     <!-- 显示颜色 -->
    <transition name="scroll-top">
      <div class="wrap" v-show="showColor">
        <Color :Seriid="serid" :showColor.sync="showColor"/>
      </div>
    </transition>
    <!-- 显示车款 -->
    <transition name="scroll-top">
      <div class="wrap" v-show="showType">
        <Showtype :Seriid="serid" :showType.sync="showType"/>
      </div>
    </transition>
    <Banner v-if="showImageList" /> 
  </div>
</template>

<script>
import Banner from "../../components/bannerSwiper.vue"
import Color from "../../components/carColor.vue";
import Showimg from "../../components/showimg.vue";
import Showtype from "../../components/showType.vue";
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState({
      imgList: state => state.color.seriesDate,
      EnlargementImgfalg: state => state.color.EnlargementImgfalg,
      colorId: state => state.color.colorId,
      carId: state => state.color.carId,
      carStyle:state=>state.detail.carStyle,
      carColor:state=>state.detail.carColor,
      showImageList:state=>state.color.showBanner
    })
  },
  components: {
    Showimg,
    Color,
    Showtype,
     Banner
  },
  data() {
    return {
      showColor: false,
      serid: this.$route.query.id,
      showType: false
    };
  },
  created() {
  },
  methods: {
    ...mapActions({
      getMasterSeries: "color/getMasterSeries"
    }),
    carcolor() {
      this.showColor = true;
    },
    cattype() {
      this.showType = true;
    }
  },
  watch: {
    colorId() {
      this.getMasterSeries(this.serialId);
    },
    carId() {
      this.getMasterSeries(this.serialId);
    }
  },
  mounted() {
    this.serialId = this.$route.query.id;
    this.getMasterSeries(this.serialId);
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
  width: 100%;
  height: 100%;overflow: auto
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
  height: 100%;
  min-height: 100%;
  background: #fff;
  z-index: 100;
}
</style>
