<template>
    <div class="xaingqing">
        <div class="cont">
          <!-- {{total}} -->
              <div class="img">
                  <div class="spa">
                    <img :src="bannerimg" alt="" @click="tabImg()">
                    <span>{{imgUrl}}</span>
                  </div>
                  <div class="cen">
                      <div class="left">
                        <p>价格:{{jiagelan.dealer_price}}</p> 
                        <p>指导价:{{jiagelan.official_refer_price}}</p>
                      </div>
                      <div class="right">
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
            <p>询问底价</p>
            <p>本地经销商为你报价</p>
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
            listdata:["全部","2019"],
            curIndex:0,
            imgUrl:""
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
                 this.imgUrl=this.total.data.pic_group_count
             })
    },
    methods: {
        btnClick(){
            this.$router.push("/home/desc")
        },
        clickTab(index){
            this.curIndex = index;
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
                 background: #eee;
                 button{
                     width: 170px;
                     height: 40px;
                     background: #09f;
                     display: block;
                     border: none;
                     margin-top: 10px;
                     margin-right: 5px;;
                     border-radius: 5px;
                     color: #fff;
                 }
             }
          }
      }
      .button{
          width: 100%;
          height: 50px;
          border: none;
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
      .c-type{
          width: 100%;
          height: 50px;
      }

</style>

