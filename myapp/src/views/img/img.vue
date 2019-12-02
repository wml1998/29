<template>
    <div class="imgbox">
           ii哦你你你
    </div>
</template>

<script>
import axios from "axios"
export default {
       data() {
           return {
               SerialID:this.$route.query.SerialID
           }
       },
       created() {
                let SerialID=this.SerialID
               axios.get("")   
       },
       methods: {
              
       },
}
</script>

<style lang="scss">
   
</style>

