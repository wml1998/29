<template>
  <div class="home">
       <div v-for="(item,index) in arr" :key="index" :id='item.letter' class="ele"> 
             <h4>{{item.letter}}</h4>
             <ul>
                 <li v-for="(item,index) in item.newarr" :key="index" class="item" 
                   @click="getRightlist(item.MasterID)"
                   >
                   <img :src='item.CoverPhoto' alt=""> <span>{{item.Name}}</span> 
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
      <Right :flag="this.flag" class="rightList"/>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapActions,mapState} from "vuex"
import Right from "../components/right"

export default {
  name: 'home',
  data(){
    return {
      clickindex:"",
      flag:false,
    }
  },
  components:{
    Right
  },
  computed:{
    ...mapState({
      arr:state=>state.home.arr,
    })
    
  },
  methods:{
    getRightlist(MasterID){
      console.log(MasterID)
       this.flag=true
      //  console.log(this.flag,"================")
       this.getMakeList(MasterID);
   
    },
    ...mapActions({
       getMasterBrandList: 'home/getMasterBrandList',
       getMakeList: 'home/getMakeList',
       
    })
  },
  created(){
    // console.log("$store...", this.$store),3
     this.getMasterBrandList();
  }
}
</script>
<style lang="scss" scoped>
*{
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}
.home{
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}
.right{
  position: fixed;
  display: flex;
  flex-direction: column;
  right: 15px;
  top: 120px;
  
 }
 .rightList{
   top: 0;
   right: 0;
 }
.home h4{
  width: 100%;
  height: 0.5rem;
  background: #ccc;
  line-height: 28px;
}
.home .item img{
   width: .6rem;
   margin: .1rem;
}
.home .item{
  width: 100%;
  height: 45px;
  line-height: 45px;
}
.item{
  display: flex
}
</style>