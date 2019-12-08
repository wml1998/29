<template>
    <div class="rightcont"  v-if="flag==true" >
      <div class="rightcont-son"  v-for="(item,index) in rightarr.data" :key="index">
          <p class="title">{{item.GroupName}}</p>
          <ul class="uls">
               <li  v-for="(itemlist,itemindex) in item.GroupList" :key="itemindex" @click="detail(itemlist.SerialID,itemlist.AliasName)">
                     <img v-lazy="itemlist.Picture" alt="">
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
import axios from "axios"
export default {
       props:["rightarr","flag"],
       methods: {
           detail(SerialID,AliasName){
                 this.$router.push({
                       path:"/home/car",
                       query:{id:SerialID}
                   })
                    localStorage.setItem("infocar",JSON.stringify(AliasName))
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
    width: 100%;
    overflow: auto;
    position: fixed;
    transition: all .2s ease;
    background: #fff;
    z-index: 100;
    height: 100%;
    box-shadow: 0 0 0.5rem #eee;
  
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
       margin-left: 1px;
    font-size: .28rem;
    line-height: .48rem;
    background: #f2f2f2;
    padding-left: .3rem;
    color: #717171;
}

</style>
