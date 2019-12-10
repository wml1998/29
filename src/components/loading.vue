<template>
    <div class="loadImg">
      <div>
          <img src="../../public/loading.gif" alt="">
      </div>
      加载动画
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
   .loadImg{
         width: 100%;
         height: 100%;
         div{
             width: 100%;
             height: 100%;
             position: relative;
             text-align: center;
              
             img{
                background: #222;
                border-radius: .5rem
             }
         }
   }



</style>
