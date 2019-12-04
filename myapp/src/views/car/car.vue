<template>
    <div class="car">
        <!-- 顶层的展示banner栏 -->
        <div class="content">
            <div class="img">
                <img :src="desclist.CoverPhoto" alt="">
                <span class="data-hover">{{desclist.pic_group_count}}张照片</span>  
            </div>
            <div class="info">
                <div>
                    <p>{{desclist.market_attribute.dealer_price}}</p>
                     <p>指导价:{{desclist.market_attribute.official_refer_price}}</p>
                </div>
                <div>{{desclist.BottomEntranceTitle}}</div>
            </div>
        </div>
    </div>
</template>

<script>
 import {mapState,mapActions} from "vuex"
export default {
    computed: {
        ...mapState({
      desclist:state=>state.home.desclist
        })
    },
    data() {
        return {
  
        }
    },
    created() {
               this.getdesclist(this.$route.query.id)
    },
    methods: {
       ...mapActions({
           getdesclist:"home/getdesclist"
       })
    }

}
</script>

<style lang="scss">
.car{
    width: 100%;
    height: 100%;
    .content{
        height: 100%;
        .img{
            position: relative;
            height: 3.29rem;
            overflow: hidden;
               .data-hover{
                         position: absolute;
                         bottom: .3rem;
                         right: .3rem;
                         color: #fff;
                         padding: 1px .1rem;
                         border-radius: .2rem;
                         background: rgba(0,0,0,.6);
                         font-size: .24rem;
                         z-index: 999
                 }
               img{
                 width: 100%;
                 top: 50%;
                 -webkit-transform: translateY(-50%);
                 transform: translateY(-50%);
                 position: absolute;
              
               }
            }
            .info{
                padding: .36rem .2rem .3rem;
                background: #fff;
                position: relative;
                display: flex
            }
    }
}
       

</style>

