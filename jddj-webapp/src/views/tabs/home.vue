<template>
    <div>
        <search></search>
        <hBanner :data="data.src" v-if="data.src"></hBanner>
        <homeNav :data="data.nav" v-if="data.nav"></homeNav>
        <homeShop :data="data.homeshop"></homeShop>
        <homeDiscount :data="data.discount"></homeDiscount>
        <div class="hotB">
            <a href=""><img src="../../../public/assets/hotbrands01.jpg" alt=""></a>
        </div>
        <hotBrands :data="data.hotbrands"></hotBrands>
        <div class="hotI">
            <a href=""><img src="../../../public/assets/hotitems01.jpg" alt=""></a>
        </div>
        <hotItems :data="data.hotitems"></hotItems>
        <div class="footMenu">
            <div class="footMenu-left">
                <a href="#/main/register">登录</a>
                <span>|</span>
                <a href="#/main/registerLog">注册</a>
            </div>
            <div class="footMenu-right">顶部</div>
        </div>
        <div class="copyright">
            CopyRight © 2000-2019 banggo.com
        </div>
        <footer-nav :data="markPoint"></footer-nav>
    </div>
</template>

<script>
    import search from "../../components/search"
    import hBanner from "../../components/hBanner"
    import homeNav from "../../components/homenav"
    import homeShop from "../../components/homeshop"
    import homeDiscount from "../../components/homediscount"
    import hotBrands from "../../components/hotbrands"
    import hotItems from "../../components/hotitems"
    import footerNav from "../../components/footerNav";
    import api from "../../apis/api"
    export default {
        name: "home",
        components:{
            search,
            hBanner,
            homeNav,
            homeShop,
            homeDiscount,
            hotBrands,
            hotItems,
            footerNav
        },
        methods:{
            async _initHomeData() {
                let data = await api.getHomeData()
                console.log(data);
                this.data=data
            },
        },
        beforeMount () {
            this._initHomeData()
        },
        data(){
            return{
                data:[],
                markPoint:0
            }
        }
    }
</script>

<style scoped>
    .hotB a,.hotI a{
        display: block;
        height: 0.457rem;
    }
    .hotB a img,.hotI a img{
        width: 100%;
    }
    .footMenu{
        height: 0.47rem;
        display: flex;
        justify-content: space-between;
        margin-top: 0.1rem;
    }
    .footMenu-left{
        margin-left: 0.2rem;
    }
    .footMenu-left a,.footMenu-left span{
        display: inline-block;
        font-size: 0.16rem;
        color: black;
        line-height: 0.47rem;
        margin: 0 0.06rem;
    }
    .footMenu-right{
        width: 0.7rem;
        font-size: 0.16rem;
        line-height: 0.47rem;
        background-image: url("../../assets/backTop.png");
        background-repeat: no-repeat;
        background-position: 0.38rem 0.13rem;
        background-size: 30%;
    }
    .copyright{
        font-size: 0.14rem;
        text-align: center;
        color: #666666;
        margin-top: 0.1rem;
        margin-bottom: 0.8rem;
    }
</style>