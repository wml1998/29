<template>
  <div class="color">
    <p>全部颜色</p>
    <div>
      <p class="c-type">
        <span v-for="(item, index, key) of list" :key="index" @click="handleC(item,key)" :class="{active: curIndex==key}">{{index}}</span>
      </p>
      <ul>
        <li v-for="(v,i) in colorData" :key="i" @click="clickColor(v.ColorId)">
          <span :style="{background: v.Value}"></span>
          {{v.Name}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import {mapMutations} from 'vuex';

export default {
  data(){
     return {
       list: {},
       colorData: [],
       curIndex: 0,//年份下标
       arr: []
     }
  },
   mounted(){
    let {serialId} = this.$route.query;
    axios.get(`http://baojia.chelun.com/v2-car-getModelImageYearColor.html?SerialID=${serialId}`).then(res=>{
      // window.console.log(res.data.data)
      this.list=res.data.data
      let obj=JSON.parse(JSON.stringify(this.list))
      let arr=Object.values(obj)
      this.handleC(arr[0],0)
     }
    )
  },
  methods: {
    ...mapMutations({
      setColor: 'img/setColorId'
    }),
    clickColor(colorId){
      this.setColor(colorId);
      this.$emit('update:showColor', false)
      // window.history.back();
    },
    //点击年份切换高亮并切换数据
    handleC(item,key){
      this.colorData=item
      this.curIndex=key
    }
  }
};
</script>


<style>

</style>
