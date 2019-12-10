<template>
  <div>{{current}}</div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState({
      current: state => state.detail.current
    })
  },
  created() {
      
    this.getDescList(this.$route.query.id);
    // localStorage.setItem("infocar",JSON.stringify(this.descList))
  }
};
</script>

<style>
</style>