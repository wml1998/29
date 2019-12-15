<template>

<!-- 右侧楼层组件 -->
  <div class="nav_list"  
    ref="container"
    @touchstart="touchStart"
    @touchmove="touchMove"
    
  >
    <div v-for="(item,index) in arr" @click="jump(item)" :key="index" class="nav_item">{{item.letter}}</div>
  </div>
</template>
<script>
export default {
  props: {
     arr: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      getOffheight:null
    }
  },
  methods: {
    jump(item){
        this.$emit('Parent_jump',item)
    },
    touchStart(e){
      this.getOffheight=(window.outerHeight - this.$refs.container.offsetHeight)/2
      let y = e.touches[0].pageY - this.getOffheight;
      let index = Math.floor(y/18);
    },
    touchMove(e){
      let y = e.touches[0].pageY - this.getOffheight
      let index = Math.floor(y/18);
      // // 处理边界
      index<0?index=0:index>this.arr.length-1?index=this.arr.length-1:null
      this.$emit('Parent_jump', this.arr[index]);
    },
    touchEnd(e){
  
    }
  },
};
</script>

<style scoped lang="scss">
.nav_list {
  width: .20rem;
  display: flex;
  flex-direction: column;
  position: fixed;
  top:50%;
  transform: translateY(-50%);
  right: 5%;
}
.nav_item {
  text-align: center;
  line-height: .36rem;
  font-size: .28rem;
}
</style>