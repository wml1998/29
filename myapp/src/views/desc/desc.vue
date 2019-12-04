<template>
  <div>
    询问低价,
    每辆车的低价
  </div>
</template>

<script>
import axios from "axios";
export default {
  created() {
    axios.get("https://baojia.chelun.com/h2-submit-lowprice.html").then(res => {
      console.log(res);
    });
  },
  methods: {},
  data() {
    return {
      listdata: []
    };
  }
};
</script>

<style>
</style>
