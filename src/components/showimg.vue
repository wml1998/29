<template>
<!-- 在图片页面看每一张图片。 -->
  <div class="imgBoxin">
    <div class="imgtitle"  @click="showbanner(item)">
      <p class="image_up">{{item.Name}}</p>
      <p class="img_down">{{item.Count}}张></p>
    </div>
    <ul class="imgulist">
      <li v-for="(itemimg,key) in item.List" :key="key">
        <span src :style="{backgroundImage:'url('+itemimg.Url+')'}"/>
      </li>
    </ul>
      <!-- <Banner v-if="showImageList" :showImageSwiper.sync="showImageSwiper"/>
      <ImagePreview v-if="showImageSwiper" :showImageSwiper.sync="showImageSwiper"></ImagePreview> -->
  </div>
</template>

<script>
import Banner from "./banner.vue"
export default {
  props: ["item"],
  data() {
    return {
      showImageList:false
    }
  },
  methods: {
    showbanner(it){
      console.log(it.Id)
      this.showImageList=true
    }
  },
  components:{
    // Banner
  }
};
</script>

<style lang="scss" scoped>
.imgBoxin {
  width: 100%;
  position: relative;
  top: 0.98rem;
  .imgtitle {
    position: absolute;
    top: 0;left: 0;
    width: 2.46rem;
     height: 2.46rem;
    z-index: 66;
    text-align: center;
    background: rgba(56, 90, 130, 0.5);
    .image_up{
      font-size: .28rem;
    margin-top: .8rem;
    color: #fff
    }
    .img_down{
      color: #fff;
      font-size: .26rem
    }
  }
  .imgulist {
      display: flex;
      flex-wrap: wrap;
 justify-content: space-between;
    li {
      position: relative;
      float: left;
      width: 33%;
      height: 2.46rem;
      margin-bottom: .06rem;
      padding: 0;
      span {
        display: inline-block;
        width: 100%;
        height: 100%;
        background-size: cover;
      }
    }
  }
}
</style>

