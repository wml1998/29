<template>
<!-- 右侧的城市选择 -->
  <div class="selectRight">
    <ul id="cityList">
      <li
        v-for="(item,index) in selectcity"
        :key="index"
        @click="cityChange(item.CityName)"
      >{{item.CityName}}</li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState({
      selectcity: state => state.selectCity.selectcity,
      tag: state => state.selectcity.tag
    })
  },
  methods: {
    ...mapMutations({
      changeTitle: "selectCity/changeTitle",
      updateTag: "selectCity/updateTag"
    }),
    cityChange(name) {
      this.changeTitle(name);
      this.updateTag(false);
    }
  }
};
</script>

<style lang="scss" scoped>
.selectRight {
  width: 100%;
  height: 100%;
  overflow: auto;
  background: #fff;
}
#cityList li {
  padding-left: 0.3rem;
  font-size: 0.28rem;
  height: 0.8rem;
  line-height: 0.8rem;
  border-bottom: 1px solid #eee;
  box-sizing: border-box;
  margin-left: 0.1rem;
}
</style>