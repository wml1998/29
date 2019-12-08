<template>
    <div class="xaingqing">
        <div class="cont">
          <!-- {{total}} -->
              <div class="img">
<<<<<<< HEAD
                  <div class="spa">
                    <img :src="bannerimg" alt="" @click="tabImg()">
                    <span>{{imgUrl}}</span>
=======
                  <div class="spa"  @click="tabImg(rightnowid)">
                    <img :src="bannerimg" alt="">
                    <span >{{imgcount}}张照片</span>
>>>>>>> d608a007bba367065075a71c7dbee5fe03dcee8c
                  </div>
                  <div class="cen">
                      <div class="left">
                        <p>价格:{{jiagelan.dealer_price}}</p> 
                        <p>指导价:{{jiagelan.official_refer_price}}</p>
                      </div>
                      <div class="right">
<<<<<<< HEAD
                        <button @click="btnClick()">询问底价</button>
                      </div>  
                  </div> 
              </div>
              <div class="c-type">
                  <span v-for="(item,index) in listdata" :key="index" :class='{active:curIndex==index}' @click="clickTab(index)">{{item}}</span>
              </div>
            <div>
                <p v-for="(item,index) in bottomlist" :key="index">{{item.car_name}} </p>
              </div>
        </div>
        <div class="button" @click="btnClick()">
=======
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
>>>>>>> d608a007bba367065075a71c7dbee5fe03dcee8c
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
<<<<<<< HEAD
            listdata:["全部","2019"],
            curIndex:0,
            imgUrl:""
=======
            imgcount:"",
            rightnowid:""
>>>>>>> d608a007bba367065075a71c7dbee5fe03dcee8c
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
<<<<<<< HEAD
                 this.imgUrl=this.total.data.pic_group_count
             })
    },
    methods: {
        btnClick(){
            this.$router.push("/home/desc")
        },
        clickTab(index){
            this.curIndex = index;
=======
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
>>>>>>> d608a007bba367065075a71c7dbee5fe03dcee8c
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
<<<<<<< HEAD
=======
          line-height: 50px;
          background: rgb(34, 177, 243);
          text-align: center;
>>>>>>> d608a007bba367065075a71c7dbee5fe03dcee8c
          color: #fff;
          position: fixed;
          bottom: 0;
          background: #09f;
          text-align: center;
          color: #fff;
          p{
              &:nth-child(1){
                  line-height: 25px;
                  font-size: 18px;
              }
              &:nth-child(2){
                  line-height: 20px;
                  font-size: 15px;
              }
          }
         
      }
<<<<<<< HEAD
      .c-type{
          width: 100%;
          height: 50px;
=======
      .downbox{
             width: 100%;
             height: 2rem;
             position: fixed;
             bottom: 0;
             left: 0
>>>>>>> d608a007bba367065075a71c7dbee5fe03dcee8c
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

