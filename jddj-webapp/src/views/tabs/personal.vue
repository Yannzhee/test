<template>
    <div>
        <pHeader :data="data.personalLog"></pHeader>
        <div>
            <div class="orders">
                <div class="pOrders" >
                    <p>全部订单</p>
                </div>
            </div>
            <pNews class="news" :data="data.personalNews"></pNews>
            <pInformation class="myNews" :data="data.personalAccount"></pInformation>
            <pLogout class="account" :data="data.personalLog"></pLogout>
        </div>
        <div class="copyright">
            CopyRight © 2000-2019 banggo.com
        </div>
        <footer-nav :data="markPoint"></footer-nav>
    </div>
</template>

<script>
    import pHeader from "../../components/pHeader";
    import pNews from "../../components/pNews";
    import pInformation from "../../components/pInformation";
    import pLogout from "../../components/pLogout";
    import api from "../../apis/api";
    import footerNav from "../../components/footerNav";
    export default {
        name: "personal",
        components:{
            pHeader,
            pNews,
            pInformation,
            pLogout,
            footerNav
        },
        methods:{
            async _initPersonalData() {
                let data = await api.getPersonalData()
                console.log(data);
                this.data=data
            },
        },
        beforeMount () {
            this._initPersonalData()
        },
        data(){
            return{
                data:[],
                markPoint:3
            }
        }
    }
</script>

<style scoped>
    .news,.myNews,.account{
        margin-top: 0.2rem;
    }
    .copyright{
        font-size: 0.14rem;
        text-align: center;
        color: #666666;
        margin-top: 0.1rem;
        margin-bottom: 0.8rem;
    }
    .orders{
        border-bottom: 1px solid #eaeaea;
    }
    .pOrders{
        height: 0.5rem;
        margin-top: 0.2rem;
    }
    .pOrders p{
        font-size: 0.16rem;
        color: black;
        line-height: 0.5rem;
        border-top: 1px solid #eaeaea;;
        padding-left: 0.2rem;
        box-sizing: border-box;
    }
</style>