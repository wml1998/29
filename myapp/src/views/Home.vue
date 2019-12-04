<template>
  <div class="home" v-if="arr">
    <div class="homewrap" @touchstart="start" @touchmove="move" @touchend="end">
      <div class="rightcomponent" ref="rightstyle">
        <Right :rightarr="righAarr" :flag="this.flag" />
      </div>
      <div v-for="(item,index) in arr" :key="index" :id="item.letter" class="ele">
        <p>{{item.letter}}</p>
        <ul>
          <li v-for="(item,index) in item.newArr" :key="index" class="item" @click="rightIndex(item.MasterID)">
            <img v-lazy="item.CoverPhoto" alt />
            <span>{{item.Name}}</span>
          </li>
        </ul>
      </div>
      <div class="right">
        <li v-for="(item,index) in arr" :key="index">
          <span>{{item.letter}}</span>
        </li>
      </div>
    </div>
  </div>
</template>
<script>
  import Right from "../components/Right.vue";
  import {
    mapActions,
    mapState
  } from "vuex";
  export default {
    name: "home",
    computed: {
      ...mapState({
        arr: state => state.home.arr,
        righAarr: state => state.home.rightarr
      })
    },
    data() {
      return {
        flag: false
      };
    },
    components: {
      Right
    },
    watch: {

    },
    methods: {
      ...mapActions({
        getMasterBrandList: "home/getMasterBrandList",
        getRightlist: "home/getRightlist"
      }),
      rightIndex(MasterID) {
        console.log(MasterID);
        this.getRightlist(MasterID);
        this.flag = true;
        this.$refs.rightstyle.style.width = "75%";
      },
      start(e) {
      },
      move(e) {
      },
      end(e) {
      }
    },
    created() {
      this.getMasterBrandList();
    }
  };
</script>
<style lang="scss" scoped>
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
  .rightcomponent {
    position: fixed;
    top: 0;
    right: 0;
    width: 0;
    transition: all 0.2s ease;
    background: #fff;
    z-index: 100;
    height: 100%;
    box-shadow: 0 0 0.5rem #eee;
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
    z-index: 999;
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
