<template>
  <div class="wrap">
    <scroll
      ref="scroll"
      :data="value"
      :pullDownRefresh="pullDownRefreshObj"
      :pullUpLoad="pullUpLoadObj"
      @pullingDown="onPullingDown"
      @pullingUp="onPullingUp"
    >
      <ul>
       <span
          :key="index"
          @click="showSwiper(index)"
          v-for="(item, index) in value"
          :style="{backgroundImage: 'url('+item.Url.replace('{0}', item.LowSize)+')'}"
        /> 
      </ul>
    </scroll>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
import CommonList from "./CommonList";
import Scroll from "./better-scroll/scroll";
 export default {
        computed: {
            ...mapState({
                count: state => state.color.count,
                value: state => state.color.imageList,
                page: state => state.color.page
            }),
            pullDownRefreshObj: () => {
                return {
                    threshold: 90,
                    stop: 50,
                    txt: '刷新成功'
                }
            },
            pullUpLoadObj: () => {
                return {
                    threshold: 50,
                    txt: {
                        more: '加载更多',
                        noMore: '没有更多数据了'
                    }
                }
            }
        },
        watch: {
            pullDownRefreshObj: {
                handler(val) {
                    const scroll = this.$refs.scroll.scroll
                    if (val) {
                        scroll.openPullDown()
                    } else {
                        scroll.closePullDown()
                    }
                },
                deep: true
            },
            pullUpLoadObj: {
                handler(val) {
                    const scroll = this.$refs.scroll.scroll
                    if (val) {
                        scroll.openPullUp()
                    } else {
                        scroll.closePullUp()
                    }
                },
                deep: true
            },
        },
        components: {
            CommonList,
            Scroll
        },
        methods: {
            ...mapActions({
                getImageTypeList: 'color/getImageTypeList',
                refreshDispatch: 'color/getImageTypeList',
                loadMoreDispatch: 'color/getImageTypeList'
            }),
            ...mapMutations({
                setCurrent: 'color/setCurrent'
            }),
            async onPullingDown() {
                await this.refreshDispatch(1);
            },
            async onPullingUp() {
                await this.loadMoreDispatch(this.page + 1);
            },
            showSwiper(index){
                // 显示轮播
                this.$emit("update:showImageSwiper", true)
                // 修改current
                this.setCurrent(index);
            }
        },
        mounted() {
            this.getImageTypeList();
        },
    }
</script>

<style>
</style>
