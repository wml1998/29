<template>
    <div class="rightcont" v-if="flag==true">
         
      <div class="rightcont-son"  v-for="(item,index) in rightarr" :key="index">
          <h3 class="title">{{item.GroupName}}</h3>
             <div class="itemdiv" v-for="(itemlist,itemindex) in item.GroupList" :key="itemindex" @click="detail(itemlist.SerialID)">
                  <div><img :src="itemlist.Picture" alt=""></div>
                  <div class="everone">
                      <div>
                          <p>{{itemlist.AliasName}}</p>
                          <p class="price">{{itemlist.DealerPrice}}</p></div>
                       
                  </div> 
             </div>
      </div>

    </div>
</template>

<script>
import axios from "axios"
export default {
       props:["rightarr","flag"],
       methods: {
           detail(SerialID){
                 this.$router.push({
                       path:"/home/car",
                       query:{id:SerialID}
                 })
           }
           
           },
       data() {
           return {
        detaildata:""
           }
       },
       created() {
           
       },

}
</script>

<style lang="scss" scoped>
.rightcont{
    width: 70%;
    height: 100%;
    background: #fff;
    position: absolute;
    right: 0;
    top: 0;
    overflow: auto
  
}
.itemdiv{
    width: 100%;
    display: flex;
    div{
        width: 50%;
           img{
               width: 100%;
               height: 100%
           }
    }
}
.everone{
    display: flex;flex-direction: column;
     p{
         height: 50%;
        align-items: center
     }
}
.price{
    color: #f00
}
.title{
    background: #ccc;
}

</style>
