<template>
<<<<<<< HEAD
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
=======
  <div class="car" v-if="Object.keys(descList).length">
    <!-- 顶层的展示banner栏 -->
    <div class="content">
      <!-- 装载图片 -->
      <div class="img" @click="jumpimg()">
        <img :src="descList.CoverPhoto" alt>
        <span class="data-hover">{{descList.pic_group_count}}张照片</span>
      </div>
      <div class="info">
        <!-- 图片下方的当前数据 -->
        <div>
          <p>{{descList.market_attribute.dealer_price}}</p>
          <p>指导价:{{descList.market_attribute.official_refer_price}}</p>
        </div>
        <div class="btnbox">
          <!-- 立即购买的按钮 -->
          <button @click="currentcar()" class="currentbuy">{{descList.BottomEntranceTitle}}</button>
>>>>>>> cd1c62e8e310d21a6f4cc397f04d99e8c1fabb1f
        </div>
      </div>
      <div class="car-list">
        <div class="c-type">
          <span v-for="(item,index) in year" @click="chengeyear(item)" :key="index">{{item}}</span>
        </div>
        <div>
          <div v-for="(item,index) in currentList" :key="index">
            <p class="every-title">{{item.key}}</p>
            <ul class="showlist">
              <li class="listyle" v-for="(item,index) in item.list" :key="index">
                <p class="p-first">{{item.market_attribute.year}}款{{item.car_name}}</p>
                <p class="p-twice">{{item.horse_power}}马力{{item.gear_num}}档{{item.trans_type}}</p>
                <p class="price">
                  <span class="offerprice">指导价 {{item.market_attribute.official_refer_price}}</span>
                  <span class="realprice">{{item.market_attribute.dealer_price_min}}起</span>
                </p>
                <button class="bottombutton" @click="answerprice(item.car_id)">询问底价</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-clumn">
      <p class="answer">询问底价</p>
      <p class="answertwo">本地经销商为你报价</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
<<<<<<< HEAD
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
=======
  data() {
    return {
      imgid:this.$route.query.id
    }
  },
  computed: {
    ...mapState({
      descList: state => state.detail.desclist,
      year: state => state.detail.newarr,
      currentList: state => state.detail.currentList
    })
  },
  created() {
    this.getDescList(this.$route.query.id);
    console.log(this.$route.query.id,"iiiidddd")
    // localStorage.setItem("infocar",JSON.stringify(this.descList))

  },
  methods: {
    ...mapActions({//解构
      getDescList: "detail/getDescList"
    }),
    ...mapMutations({//解构
      updatayear: "detail/updatayear"
    }),
    chengeyear(item) {//点击tab切换时的操作
      this.updatayear(item);
      this.getDescList(this.$route.query.id);
    },
    jumpimg(){
        //  console.log(this.imgid)
         this.$router.push({
           path: "/home/img",
           query:{id:this.imgid}
         })
    },
<<<<<<< HEAD
    answerprice(id){
>>>>>>> cd1c62e8e310d21a6f4cc397f04d99e8c1fabb1f

    },
=======
>>>>>>> wml
    currentcar(){
      localStorage.setItem("car",JSON.stringify(this.descList))
      this.$router.push({
        path:"/home/desc"
      })
    }
  }
};
</script>

<<<<<<< HEAD
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
=======
<style lang="scss" scoped>
// /deep/ 覆盖scoped的样式
* {
  margin: 0;
  padding: 0;
}
.car {
  width: 100%;
  height: 100%;
  .content {
    height: 100%;
    .img {
      position: relative;
      height: 3.29rem;
      overflow: hidden;
      .data-hover {
        position: absolute;
        bottom: 0.3rem;
        right: 0.3rem;
        color: #fff;
        padding: 1px 0.1rem;
        border-radius: 0.2rem;
        background: rgba(0, 0, 0, 0.6);
        font-size: 0.24rem;
        z-index: 999;
      }
      img {
        width: 100%;
        top: 50%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        position: absolute;
      }
    }
    .info {
      padding: 0.36rem 0.2rem 0.3rem;
      background: #fff;
      position: relative;
      display: flex;
      div {
        width: 50%;
>>>>>>> cd1c62e8e310d21a6f4cc397f04d99e8c1fabb1f
      }
    }
  }
}
.info div p:first-child {
  font-size: 0.36rem;
  color: red;
  font-weight: 500;
}
.info div p:nth-child(2) {
  font-size: 0.26rem;
  color: silver;
}
.btnbox {
  padding-top: 0.2rem;
  -webkit-box-pack: justify;
  justify-content: space-between;
  width: 50%;
  position: absolute;
  right: 0.1rem;
  top: 0.22rem;
  button {
    border-radius: 0.1rem;
    font-size: 0.32rem;
    height: 0.7rem;
    width: 3.75rem;
    border: none;
    box-sizing: border-box;
    background: #00afff;
    color: #fff;
  }
}
.car-list {
  padding-bottom: 1rem;
}
.c-type {
  border-top: 0.15rem solid #f4f4f4;
  padding: 0 0.3rem;
  font-size: 0.32rem;
  height: 0.77rem;
  line-height: 0.77rem;
  background: #fff;
  span {
    padding-right: 0.46rem;
  }
}
.every-title {
  padding: 0 0.2rem;
  height: 0.5rem;
  line-height: 0.5rem;
  font-size: 0.26rem;
  color: #999;
  background: #f4f4f4;
}
.showlist {
  .listyle:last-child {
    border-bottom: 0;
  }
  .listyle {
    padding: 0 0.2rem;
    overflow: hidden;
    border-bottom: 0.18rem solid #f4f4f4;
    .p-twice {
      color: #bdbdbd;
      font-size: 0.26rem;
    }
    .price {
      text-align: right;
      padding-bottom: 0.1rem;
      font-size: 0.24rem;
      color: #818181;
      .offerprice {
        text-align: right;
        padding-bottom: 0.1rem;
        font-size: 0.24rem;
        color: #818181;
      }
      .realprice {
        font-size: 0.3rem;
        color: #ff2336;
        margin-left: 0.1rem;
      }
    }
    .bottombutton {
      border: none;
      border-top: 1px solid #eee;
      width: 110%;
      height: 0.8rem;
      font-size: 0.32rem;
      color: #00afff;
      background: #fff;
      font-weight: 500;
      margin-left: -0.3rem;
      outline: none
    }
    .p-first {
      padding: 0.26rem 0 0.18rem;
      font-size: 0.3rem;
      line-height: 1;
      color: #3d3d3d;
    }
  }
}
.bottom-clumn {
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: 99;
  background: #3aacff;
  height: 1rem;
  color: #fff;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-orient: vertical;
  flex-direction: column;
  display: flex;
  -webkit-box-direction: normal;
  .answer {
    font-size: 0.32rem;
    margin-top: 0.12rem;
    font-weight: 500;
  }
  .answertwo {
    font-size: 0.24rem;
  }
}
.currentbuy{
  outline: none
}
</style>

