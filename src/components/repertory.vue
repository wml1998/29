<template>

<!-- 右侧楼层组件 -->
  <div class="nav_list"  
    ref="container"
    @touchstart="touchStart"
    @touchmove="touchMove"
    
  >
  <div>#</div>
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
  // watch: {
  //   arr: function(){
  //     this.$nextTick(()=>{
  //       this.offsetTop = (window.innerHeight - this.$refs.container.offsetHeight)/2;
  //       // console.log('offsetTop...', this.offsetTop)
  //     })
  //   }
  // },
  methods: {
    jump(item){
        this.$emit('Parent_jump',item)
    },
    touchStart(e){
      console.log(123)
      this.getOffheight=(window.outerHeight - this.$refs.container.offsetHeight)/2
      let y = e.touches[0].pageY - this.getOffheight;
      let index = Math.floor(y/18);
      
      // console.log(index)
      // console.log('start...', e.touches[0], this.arr[index]);
    },
    touchMove(e){
      let y = e.touches[0].pageY - this.getOffheight
      let index = Math.floor(y/18);
      console.log(index)
      // // 处理边界
      // console.log(this.arr[20])
      index<0?index=0:index>this.arr.length-1?index=this.arr.length-1:null
      // index<1?index=1:index>this.arr.length-1?index=this.arr.length-1:null;
      this.$emit('Parent_jump', this.arr[index]);
      console.log('start...', this.arr[index]);
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