<template>
  <div class="select-city">
    <div class="province">
      <div class="location">
        <p>自动定位</p>
        <p @click="addressCur">北京</p>
      </div>
      <div class="list">
        <p>省市</p>
        <ul>
          <li
            v-for="(item,index) in selectdata"
            :key="index"
            @click="showCity(item)"
          >{{item.CityName}}</li>
        </ul>
      </div>
      <div class="selectRight" v-if="flag" @click="close">
        <SelectRight class="City" />
      </div>
    </div>
    <!-- {{selectdata}} -->
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import SelectRight from "../components/SelectRight";

export default {
  data() {
    return {
      flag: false
    };
  },
  created() {
    this.getSelect();
  },
  methods: {
    ...mapActions({
      getSelect: "selectCity/getSelect",
      getSelectRight: "selectCity/getSelectRight"
    }),
    ...mapMutations({
      changeTag: "selectCity/changeTag"
    }),
    addressCur() {
      this.changeTag(false);
    },
    showCity(item) {
        this.flag=true;
        // console.log(item)
        this.getSelectRight(item.CityID);
    },
    close(){
        this.flag=false;
    }
  },
  computed: {
    ...mapState({
      selectdata: state => state.selectCity.selectdata
    })
  },
  components: {
    SelectRight
  }
};
</script>

<style lang="scss" scoped>
.select-city {
  width: 100%;
  height: 100%;
  overflow: auto;
}
.select-city .province p {
  height: 0.4rem;
  line-height: 0.4rem;
  font-size: 0.24rem;
  padding-left: 0.2rem;
  background: #f4f4f4;
}
.select-city .location p:nth-child(2) {
  padding-left: 0.4rem;
  font-size: 0.28rem;
  height: 0.8rem;
  line-height: 0.8rem;
  background: #fff;
}
.select-city .province li {
  padding-left: 0.3rem;
  font-size: 0.28rem;
  height: 0.8rem;
  line-height: 0.8rem;
  border-bottom: 1px solid #eee;
  box-sizing: border-box;
  margin-left: 0.1rem;
  position: relative;
}
.select-city .province li:after {
  content: "";
  display: inline-block;
  padding-top: 0.16rem;
  padding-right: 0.16rem;
  border-top: 1px solid #999;
  border-right: 1px solid #999;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  position: absolute;
  right: 0.35rem;
  top: 0.3rem;
}
.selectRight{
    width: 100%;
    height: 100%;
    position: fixed;
    background: rgba($color: #000000, $alpha: 0.6);
    left: 0;
    top: 0;
}
.City{
    position: fixed;
    width: 70%;
    left: 30%;
    top: 0;
    height: 100%;
    background: #fff;
}
</style>