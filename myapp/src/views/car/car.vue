<template>
    <div class="xaingqing">
        <div class="cont">
              <div class="contbox">
                  <div class="imgbox"> <img :src="bannerimg" alt=""></div>
                 <div class="bannerbox">
                     <div> 
                         <p>价格:{{jiagelan.dealer_price}}</p> 
                        <p>指导价:{{jiagelan.official_refer_price}}</p>
                    </div>
                    <div>
                        <button class="answer" @click="jump">询问低价</button>
                    </div>
                       
                 </div>
               
              </div>
              <div>
                <p v-for="(item,index) in bottomlist" :key="index">{{item.car_name}} </p>
              </div>
                 <div class="downbox">
                   询问底价
                   本地经销商为你报价
                 </div>

        </div>
    
    </div>
</template>

<script>
import axios from "axios"
export default {
    data() {
        return {
            SerialID:this.$route.query.id,
            total:[],
            jiagelan:"",
            bottomlist:[],
            bannerimg:""
        }
    },
    created() {
        let SerialID=this.SerialID
             axios.get("https://baojia.chelun.com/v2-car-getInfoAndListById.html",{params:{SerialID}}).then(res=>{
                 this.total=res.data
                 console.log( this.total.data)
                 console.log(this.total.data.market_attribute,"======")
                 this.jiagelan=this.total.data.market_attribute
                 this.bottomlist=this.total.data.list
                 this.bannerimg=this.total.data.CoverPhoto
             })
    },
    methods: {
           jump(){
                  this.$router.push({
                      path:"/home/desc"
                  })



           }
    }

}
</script>

<style lang="scss">
      .xaingqing{
          width: 100%;
          height: 100%;
          .cont{
              width: 100%;
              height: 100%;
              overflow: auto
          }
         
      }
      .contbox{
          width: 100%;
        display: flex;
        flex-direction: column;
        div{
            width: 100%;
            img{
                width: 100%;
                height: 100%
            }
        }
      }
      .bannerbox{
          width: 100%;
          display: flex;
          div{
              width: 50%;
              .answer{
                  width: 90%;
                  height: 80%;
                  background: rgb(34, 177, 243);
                  border-radius: 5px;
                  border: none;
                  color: #fff;
                  outline: none
              }

          }
      }
      .downbox{
             width: 100%;
             height: 2rem;
             background: rgb(21, 146, 204);
             position: fixed;
             bottom: 0;
             left: 0
      }


</style>

