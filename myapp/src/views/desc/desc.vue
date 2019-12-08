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
</script>

<style>
</style>
