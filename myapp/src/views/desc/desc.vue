<template>
    <div>
        询问低价
    </div>
</template>

<script>
import axios from "axios"
export default {
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
</script>

<style>

</style>
