<template>
    <div class="home" v-if="arr" >
      <div class="wrap">
         <div v-for="(item,index) in arr" :key="index" ref="eftop" @scroll="scrollxml">
             <p>{{item.letter}}</p>
             <ul>
                   <li v-for="(item1,index1) in item.children" :key="index1" class="item">
                     <p class="list"> <img :src="item1.CoverPhoto" alt="">
                     <span>{{item1.Name}}</span></p>
                    
                   </li>
             </ul>
          </div>
          <div class="right">
            <li v-for="(item,index) in arr" :key="index" @click="floorindex(index)">
              {{item.letter}}
              </li>
          </div>

      </div>
         
    </div>
</template>

<script>
import axios from "axios"
import { IndexList, IndexSection } from 'mint-ui'
export default {
   data(){
      return {
        arr:[]
      }
   },
   methods:{
      floorindex(index){
         console.log(index)
      },
      scrollxml(){
           console.log(this.$refs.eftop.scrollTop)
      }
      
   },
   created (){
      
      axios.get('https://baojia.chelun.com/v2-car-getMasterBrandList.html').then(res=>{
        if(res.data.code == 1){
           res.data.data.map((item,index)=>{
              let letter = item.Spelling[0];
              let newArr = res.data.data.filter(item => item.Spelling[0] == letter)
              if(this.arr.findIndex(item => item.letter == letter) === -1){
                  this.arr.push({letter,children:newArr})
              }
           })
        }else{
           alert(res.data.msg)
        }
      })
   }
}
</script>

<style lang='scss' scoped>
*{
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none
}

.home {
  width: 100%;
  height: 100%;
  overflow: auto
}

.list{
   display: flex;
}
.right{
  position: fixed;
  display: flex;
  flex-direction: column;
  right: 15px;
  top: 120px;

}
.home h4{
  width: 100%;
  height: 28px;
  background: #ccc;
  line-height: 28px;
}
.home .item img{
   width: 30px;
   margin: 5px;
}
.home .item{
  width: 100%;
  height: 45px;
  line-height: 45px;
  padding:  0 10px;
}
</style>