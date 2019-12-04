<template>
   <div class="home" v-if="arr" >
     <div class="homewrap" 
       @touchstart="start"
       @touchmove="move"
       @touchend="end"
     >
           <div class="rightcomponent" ref="rightstyle"> 
             <Right :rightarr="rightarr" :flag="this.flag"  />
           </div>
          <div v-for="(item,index) in arr" :key="index" :id='item.letter' class="ele"> 
             <p>{{item.letter}}</p>
             <ul>
                 <li v-for="(item,index) in item.newArr" :key="index" class="item" @click="rightindex(item.MasterID)">
                   <img v-lazy='item.CoverPhoto' alt="">   <span>{{item.Name}}</span> 
                 </li>
             </ul>
          </div>
          <div class="right">
            <li v-for="(item,index) in arr" :key="index">
               <span>
                 {{item.letter}}
               </span> 
            </li>
          </div>
          </div>
    </div>
</template>
<script>
import Right from "../components/Right.vue"
import {mapActions,mapState} from "vuex"
export default {
   name:"home",
computed: {
    ...mapState({
        arr:state=>state.home.arr,
        rightarr:state=>state.home.rightarr
    })
},
data() {
    return {
        flag:false,
    }
},
  components:{
Right
  },
  watch: {
    // arr:function(){
    //   this.offsetTop=(window.innerHeight-this.$refs.container.offsetHeight)/2
    // }
  },
methods: {
    ...mapActions({
        getMasterBrandList:"home/getMasterBrandList",
        getRightlist:"home/getRightlist"
    }),
         rightindex(MasterID){
            console.log(MasterID)
              this.getRightlist(MasterID)
            this.flag=true;
            this.$refs.rightstyle.style.width = "75%";

      },    
      start(e){
        // console.log(e,"start====e")
        // let y=e.touches[0].screenY-this.offsetTop
        // let index=Math.floor(y/18)
        // console.log("start....",e.touches[0],this.arr[index])
      },
      move(e){
            //  console.log(e,"move====e")
      },
      end(e){
  // console.log(e,"end====e")
      }
},
created() {
    this.getMasterBrandList()
    // this.getRightlist()

 }
}
</script>
<style lang="scss" scoped>
*{
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none
}
.home {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}
.rightcomponent{
      position: fixed;
    top: 0;
    right: 0;
    width: 0;
    transition: all .2s ease;
    background: #fff;
    z-index: 100;
    height: 100%;
    box-shadow: 0 0 0.5rem #eee;
}

.wrap{
  width: 100%;
  height: 100%;
}
.ele{
  ul{
    margin: 0 .3rem
  }
}
.right{
z-index: 999;
    position: fixed;
    right: 0;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    padding-left: .2rem;
    li{
          font-size: .24rem;
    color: #666;
    font-weight: 500;
    padding: .02rem .1rem;
    }
 }
.home p{
  font-size: .28rem;
    line-height: .4rem;
    background: #f4f4f4;
    padding-left: .3rem;
    color: #aaa
}

.item{
display: flex;
height: 1rem;
border-bottom: 1px solid #ddd;
align-items: center;
span{
  font-size: .32rem;
    margin-left: .4rem;
}
img{
  height: .8rem
}
}
</style>
