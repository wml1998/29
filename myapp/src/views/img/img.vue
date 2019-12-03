<template>
    <div class="imgbox">
        <div class="flexwrap">
           <p>颜色  <span>⬇</span></p>
           <p>车款 <span>⬇</span></p>
        </div>
        <ul>
             <li v-for="(item,index) in moreimg" :key="index">{{}}</li>
        </ul>
    </div>
</template>

<script>
import axios from "axios"
export default {
       data() {
           return {
               SerialID:this.$route.query.SerialID,
               moreimg:[]
           }
       },
       created() {
                let SerialID=this.SerialID
               axios.get("http://baojia.chelun.com/v2-car-getImageList.html",{params:{SerialID}}).then(res=>{
                   console.log(res.data)    
                   this.moreimg=res.data               
               })   
       },
       methods: {
              
       },
}
</script>

<style lang="scss">
   .flexwrap{
       position: fixed;
       background: #fff;
       top: 0;
       width: 100%;
       height: .8rem;
       -webkit-box-align: center;
       align-items: center;
       box-sizing: border-box;
       z-index: 99;
       display: flex;
       -webkit-box-direction: normal;
       p{
        -webkit-box-flex: 1;
        flex: 1;
        text-align: center;
        box-sizing: border-box;
        color: #454545;
        display: inline-block;
    }
   }
</style>

