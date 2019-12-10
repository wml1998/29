<template>
  <div id="app">
    <transition :name="transitionName">
      <keep-alive>
       <router-view :key="key" class="transitionBoy"/>
      </keep-alive>
    </transition>
  
  </div>
</template>
<script>
export default {
  data() {
    return {  
      transitionName:"transitionLeft"
    }
  },
  computed: {
    key() {
        return this.$route.name !== undefined? this.$route.name + +new Date(): this.$route + +new Date()
    }
  },
  watch:{
    '$route'(to,from){
      const arr =['/type']
      const compare=arr.indexOf(to.path)>arr.indexOf(from.path)
      this.transitionName=compare?'transitionRight':'transitionLeft'
    }
  }
}
</script>
<style lang="scss">
*{
  padding: 0;
  margin: 0;
  list-style: none;
}
html{
  font-size: calc(100vw/750*100);
}
body{
  font-size: .32rem;
}
html,body,#app{
  width: 100%;
  height: 100%
}
  .transitionBoy{
    transition:all 0.15s ease
  }
  .transitionLeft-enter{
    transform:translate(100%,0)
  }
  .transitionLeft-leave-active{
    transform: translate(-100%,0)
  }
  .transitionRight-enter{
    transform:translate(0,100%)
  }
  .transitionRight-leave-active{
    transform:translate(0,-100%)
  }

</style>