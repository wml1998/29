<template>
    <div class="xaingqing">
        <div class="cont">
          <!-- {{total}} -->
              <div class="img">
                  <div class="spa"  @click="tabImg(rightnowid)">
                    <img :src="bannerimg" alt="">
                    <span >{{imgcount}}张照片</span>
                  </div>
                  <div class="cen">
                      <div class="left">
                        <p>价格:{{jiagelan.dealer_price}}</p> 
                        <p>指导价:{{jiagelan.official_refer_price}}</p>
                      </div>
                      <div class="right">
                        <button class="answer">询问底价</button>
                      </div>  
                  </div> 
              </div>
              
               <div class="outbox">
                <div v-for="(item,index) in bottomlist" :key="index">
                    <p>{{item.car_name}}</p>
                    <p><span>{{item.horse_power}}马力{{item.gear_num}}档双离合</span></p>
                    <p> <span>指导价{{item.market_attribute.official_refer_price}} </span>  <span>{{item.market_attribute.dealer_price_min}}起</span> </p>
                    <div class="dijia"><button >询问底价</button></div>
                </div>
               </div>
        </div>
        <div class="wenjia">
            <p>询问底价</p>
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
            bannerimg:"",
            imgcount:"",
            rightnowid:""
        }
    },
    created() {
        let SerialID=this.SerialID
             axios.get("https://baojia.chelun.com/v2-car-getInfoAndListById.html",{params:{SerialID}}).then(res=>{
                 this.total=res.data
                 console.log( this.total.data)
                 console.log(this.total.data.list,"ssssss")
                 this.jiagelan=this.total.data.market_attribute
                 this.bottomlist =this.total.data.list
                 this.bannerimg=this.total.data.CoverPhoto
                 this.imgcount=this.total.data.pic_group_count
                 this.rightnowid=this.total.data.SerialID
             })
    },
    methods: {
        tabImg(id){
            console.log(id)
            this.$router.push({
                path:"/home/img",
                query:{
                    SerialID:id
                }
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
              overflow: auto;
            
          }   
      }
      .img{
          width: 100%;
          height: 300px;
          border-bottom: 1px solid #000;
          .spa{
              width: 100%;
              height: 220px;
              position: relative;
              img{
                  width: 100%;
                  height: 100%;
              }
              span{
                  display: block;
                  position: absolute;
                  right: 20px;
                  bottom: 20px;
                  background: #999;
                  border-radius: 10px;
              }
          }
          .cen{
              background: #fff;
              display: flex;
              width: 100%;
              margin: 0 auto;
            
              div{
                  width: 50%
              }
             .left{
                 width: 200px;
                 float: left;
                 padding-left: 10px;
                 p{
                     &:nth-child(1){
                         color: #f00;
                         font-size: 20px;
                         line-height: 40px;
                     }
                     &:nth-child(2){
                         color: #666;
                         font-size: 17px;
                         line-height: 15px;;
                     }
                 }
             }
             .right{
                 float: right;
                 button{
                     width: 95%;
                     height: 40px;
                     background: #09f;
                     display: block;
                     border: none;
                     margin-top: 10px;
                     margin-right: 5px;;
                     border-radius: 5px;
                     color: #fff;
                     outline: none
                 }
             }
          }
      }
      .wenjia{
          width: 100%;
          height: 50px;
          border: none;
          line-height: 50px;
          background: rgb(34, 177, 243);
          text-align: center;
          color: #fff;
          position: fixed;
          bottom: 0;
         
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
             position: fixed;
             bottom: 0;
             left: 0
      }
      .dijia{
          width: 100%;
          height: .7rem;
          background: #fff;
      
          button{
              background: #ffffff;
              width: 100%;
              height: 100%;
              border: none;
              outline: none;
            color: rgb(34, 177, 243);
          }
      }
      .outbox{
          padding-bottom: 50px
      }

</style>

