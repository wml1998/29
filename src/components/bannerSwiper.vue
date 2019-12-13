<template>
    <div class="swiperBox">
        <ul>
            {{value}}
       <span
          :key="index"
          @click="showSwiper(index)"
          v-for="(item, index) in value"
          :style="{backgroundImage: 'url('+item.Url.replace('{0}', item.LowSize)+')'}"
        /> 
      </ul>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
    computed: {
            ...mapState({
                count: state => state.color.count,
                value: state => state.color.imageList,
                page: state => state.color.page
            })
        },
        methods:{
              ...mapActions({
                getImageTypeList: 'color/getImageTypeList',
            }), 
             mounted() {
            this.getImageTypeList();
        },
        }
}
</script>

<style lang="scss" scoped>
  .swiperBox{
      width: 100%;
      height: 100%;
      background: #ff0;
      overflow: auto;
      position: absolute;top: 0;
      left: 0;
      z-index: 105;
       }
</style>

