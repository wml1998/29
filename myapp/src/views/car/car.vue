<template>
    <div class="car" v-if="Object.keys(descList).length">
        <!-- 顶层的展示banner栏 -->
        <div class="content">
            <div class="img">
                <img :src="descList.CoverPhoto" alt="">
                <span class="data-hover">{{descList.pic_group_count}}张照片</span>
            </div>
            <div class="info">
                <div>
                    <p>{{descList.market_attribute.dealer_price}}</p>
                    <p>指导价:{{descList.market_attribute.official_refer_price}}</p>
                </div>
                <div class="btnbox">
                    <button>{{descList.BottomEntranceTitle}}</button></div>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        mapState,
        mapActions
    } from "vuex"
    export default {
        computed: {
            ...mapState({
                descList: state => state.detail.desclist
            })
        },
        created() {
            this.getDescList(this.$route.query.id)
        },
        methods: {
            ...mapActions({
                getDescList: "detail/getDescList"
            })
        }
    }
</script>

<style lang="scss" scoped>
// /deep/ 覆盖scoped的样式
.car {
    width: 100%;
    height: 100%;
    .content {
        height: 100%;
        .img {
            position: relative;
            height: 3.29rem;
            overflow: hidden;
            .data-hover {
                position: absolute;
                bottom: .3rem;
                right: .3rem;
                color: #fff;
                padding: 1px .1rem;
                border-radius: .2rem;
                background: rgba(0, 0, 0, .6);
                font-size: .24rem;
                z-index: 999
            }
            img {
                width: 100%;
                top: 50%;
                -webkit-transform: translateY(-50%);
                transform: translateY(-50%);
                position: absolute;
            }
        }
        .info {
            padding: .36rem .2rem .3rem;
            background: #fff;
            position: relative;
            display: flex;
            div{
                width: 50%;
            }
        }
    }
}
.info div p:first-child {
    font-size: .36rem;
    color: red;
    font-weight: 500;
}
.info div p:nth-child(2) {
    font-size: .26rem;
    color: silver;
}
.btnbox{
       padding-top: .2rem;
    -webkit-box-pack: justify;
    justify-content: space-between;
    width: 50%;
    position: absolute;
    right: .1rem;
    top: .22rem;
    button{
    border-radius: .1rem;
    font-size: .32rem;
    height: .7rem;
    width: 3.45rem;
    border: none;
    box-sizing: border-box;
    background: #00afff;
    color: #fff
    }

    // height:90%;
    // background: #00afff;
    // color: #fff 
}
</style>

