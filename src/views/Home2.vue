<template>
  <div class="home" v-if="arr">
    <Right :rightarr="this.rightarr" :flag="flag" />
    <div v-for="(item,index) in arr" :key="index" :id="item.letter" class="ele">
      <p>{{item.letter}}</p>
      <ul>
        <li
          v-for="(item,index) in item.newArr"
          :key="index"
          class="item"
          @click="rightindex(item.MasterID)"
        >
          <img v-lazy="item.CoverPhoto" alt />
          <span>{{item.Name}}</span>
        </li>
      </ul>
    </div>
    <div class="right">
      <li v-for="(item,index) in arr" :key="index">
        <span @click="fun(item.letter)">{{item.letter}}</span>
      </li>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Right from "../components/Right.vue";
export default {
  components: {
    Right
  },
  data() {
    return {
      arr: [],
      clickindex: "",
      flag: false,
      rightarr: []
    };
  },
  methods: {
    fun(item) {
      document.querySelector(".home").scrollTop = document.querySelector(
        `#${item}`
      ).offsetTop;
      console.log(
        document.querySelector(".home").scrollTop,
        document.querySelector(`#${item}`).offsetTop
      );
    },
    rightindex(MasterID) {
      axios
        .get(
          "https://baojia.chelun.com/v2-car-getMakeListByMasterBrandId.html",
          { params: { MasterID } }
        )
        .then(res => {
          console.log(res.data);
          this.rightarr = res.data.data;
        });
      this.flag = true;
    }
  },
  created() {
    axios
      .get("https://baojia.chelun.com/v2-car-getMasterBrandList.html")
      .then(res => {
        if (res.data.code == 1) {
          res.data.data.map((item, index) => {
            let letter = item.Spelling[0];
            let newArr = res.data.data.filter(
              item => item.Spelling[0] == letter
            );
            if (this.arr.findIndex(item => item.letter == letter) === -1) {
              this.arr.push({ letter, newArr });
            }
          });
          console.log(this.arr);
        } else {
          alert(res.data.msg);
        }
      });
  }
};
</script>

<style lang='scss' scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}
.home {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}
.wrap {
  width: 100%;
  height: 100%;
}
.ele {
  ul {
    margin: 0 0.3rem;
  }
}
.right {
  z-index: 99;
  position: fixed;
  right: 0;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  padding-left: 0.2rem;
  li {
    font-size: 0.24rem;
    color: #666;
    font-weight: 500;
    padding: 0.02rem 0.1rem;
  }
}
.home p {
  font-size: 0.28rem;
  line-height: 0.4rem;
  background: #f4f4f4;
  padding-left: 0.3rem;
  color: #aaa;
}

.item {
  display: flex;
  height: 1rem;
  border-bottom: 1px solid #ddd;
  align-items: center;
  span {
    font-size: 0.32rem;
    margin-left: 0.4rem;
  }
  img {
    height: 0.8rem;
  }
}
</style>