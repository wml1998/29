<template>
  <div class="home">
      <div class="list" v-for="(item,index) in arr" :key="index">
        <p>{{item.letter}}</p>
        <ul>
          <li v-for="(ite,ind) in item.newarr" :key="ind">
            <span><img :src="ite.CoverPhoto" alt=""></span>
            <span>{{ite.Name}}</span> 
          </li>
        </ul>
        
      </div>
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
      rightarr:[]
    }
  },
  components:{
    Right
  },
  computed:{
    ...mapState({
      arr:state=>state.home.arr
    })
    
  },
  methods:{
    ...mapActions({
       getMasterBrandList: 'home/getMasterBrandList'
    })
  },
  created(){
    console.log("$store...", this.$store),
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
.list{
  width: 100%;
  p{
    height: .45rem;
    width: 100%;
    background: #eee;
    line-height: 0.45rem;
  }
  ul{
    li{
      height: 1rem;
      width: 100%;
      border-bottom: 1px solid #000;
      span{
        display: inline-block;
        margin-left: .6rem;
        &:nth-child(1){
          width: .7rem;
          height: .7rem;
          line-height: .7rem;
          // margin-top: .2rem;
          // padding-top: .2rem;
          img{
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>