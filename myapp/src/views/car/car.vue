<template>
    <div class="xaingqing">
        <div class="cont">
          <!-- {{total}} -->
              <div>
                  <img :src="bannerimg" alt="">
                  <p>价格:{{jiagelan.dealer_price}}</p> 
                  <p>指导价:{{jiagelan.official_refer_price}}</p>
              </div>
              <div>
                <p v-for="(item,index) in bottomlist" :key="index">{{item.car_name}} </p>
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


</style>

