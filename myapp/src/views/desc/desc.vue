<template>
  <div>
    
    询问低价,
    每辆车的低价
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import axios from "axios";
export default {
<<<<<<< HEAD
       created() {
           axios.get("https://baojia.chelun.com/h2-submit-lowprice.html").then(res=>{
            //    console.log(res)
            if(res.data.code==-2){
                
            }else{
                alert(res.data.msg)
            }
           })
       },
       methods: {
           
       },
       data() {
           return {
               
           }
       },
}
=======
  computed: {

  },
  created() {
      //  console.log(this.desclist)
  },
  methods: {
  
  },
 data() {
   return {
      desclist:JSON.parse(localStorage.getItem("car"))
   }
 },
};
>>>>>>> cd1c62e8e310d21a6f4cc397f04d99e8c1fabb1f
</script>

<style>
</style>
