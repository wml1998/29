<template>
  <div class="right" v-if="flag==true">
      <div class="rightcont" v-for="(item,index) in rightArr.data" :key="index">
          <p class="title">{{item.GroupName}}</p>
          <ul class="uls">
            <li  v-for="(itemlist,itemindex) in item.GroupList" :key="itemindex"
               @click="detail(itemlist.SerialID)"
            >
                <img :src="itemlist.Picture" alt="">
                 <div>
                    <p>{{itemlist.AliasName}}</p>
                    <p class="price">{{itemlist.DealerPrice}}</p>
                  </div>         
            </li>
          </ul>
      </div>

  </div>
</template>

<script>
import {mapActions,mapState} from "vuex"
export default {
  props:["flag"],
  computed:{
    ...mapState({
      rightArr:state=>state.home.rightArr,
    })  
  },
  methods:{
    detail(SerialID){
      console.log(SerialID)
      this.$router.push({
        path: "/home/cars",
        query: { id: SerialID }
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.right{
  width: 62%;
  height: 100%;
  position: fixed;
  overflow: auto;
  right: 0;
  top: 0;
  transition: all .2s ease;
  background: #fff;
  z-index: 100;
  height: 100%;
  box-shadow: 0 0 0.5rem #eee;
  width: 6.45rem;
  height: 100%;
  display: none;  
}

.uls{
    margin-left: .1rem;
    li{
        height: 1.4rem;
        box-sizing: border-box;
        border-bottom: 1px solid #ddd;
        display: flex;
        text-align: -webkit-match-parent;
        img{
             margin: 0 .1rem 0 .2rem;
             width: 1.8rem;
             height: 1.2rem;
        }
    }
}
.everone{
    display: flex;
    flex-direction: column;
     p{
        height: 50%;
        align-items: center
     }
}
.price{
    color: #f00;
    margin-top: 15px;;
}
.title{
    margin-left: 1px;
    font-size: .28rem;
    line-height: .48rem;
    background: #f2f2f2;
    padding-left: .3rem;
    color: #717171;
}

</style>