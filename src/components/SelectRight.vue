<template>
  <div class="selectRight">
    <ul id="cityList">
      <li
        v-for="(item,index) in selectcity"
        :key="index"
        @click="cityChange(item)"
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
    ...mapActions({
      getDealerList:"dealer/getDealerList"
    }),
    cityChange(item) {
      this.changeTitle(item.CityName);
      this.updateTag(false);
      // 获取车款ID
      let car_id  = localStorage.getItem('car_id');
      let cityId = item.CityID;
      this.getDealerList({car_id,cityId})
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