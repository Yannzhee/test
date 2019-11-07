<template>
    <div>
        <pHeader></pHeader>
        <div>
            <pOrders class="orders"></pOrders>
            <personalNews class="news"></personalNews>
            <personalInformation class="myNews"></personalInformation>
            <pLogout class="account"></pLogout>
        </div>
        <div class="copyright">
            CopyRight © 2000-2019 banggo.com
        </div>
    </div>
</template>

<script>
    import pHeader from "../../components/pHeader";
    import pOrders from "../../components/pOrders";
    import personalNews from "../../components/personalNews";
    import personalInformation from "../../components/personalInformation";
    import pLogout from "../../components/pLogout";
    export default {
        name: "personal",
        components:{
            pHeader,
            pOrders,
            personalNews,
            personalInformation,
            pLogout
        }
    }
</script>

<style scoped>
    .orders,.news,.myNews,.account{
        margin-top: 0.2rem;
    }
    .copyright{
        font-size: 0.14rem;
        text-align: center;
        color: #666666;
        margin-top: 0.1rem;
        margin-bottom: 0.8rem;
    }
</style>