<template>
    <div>
        <cHeader></cHeader>
        <div class="cLog">
            <img src="../assets/iconshop.png" alt="">
        </div>
        <p class="cLog-p1">哎呀！购物袋还是空的</p>
        <p class="cLog-p2">"登陆后可关联电脑和手机购物袋的商品哦"</p>
        <div class="cLog-d">
            <a href="#/main/register">登录</a>
<!--            <router-link to="register">登录</router-link>-->
        </div>
    </div>
</template>

<script>
    import cHeader from "./cHeader";
    export default {
        name: "cLog",
        components:{
            cHeader
        }
    }
</script>

<style scoped>
    .cLog{
        width: 0.7rem;
        height: 0.7rem;
        margin: 25% auto 0;
    }
    .cLog img{
        width: 100%;
    }
    .cLog-p1{
        font-size: 0.2rem;
        height: 0.26rem;
        line-height: 0.26rem;
        text-align: center;
        margin-top: 0.3rem;
    }
    .cLog-p2{
        font-size: 0.14rem;
        height: 0.2rem;
        line-height: 0.2rem;
        text-align: center;
        margin-top: 0.2rem;
        color: #919191;
    }
    .cLog-d a{
        display: block;
        width: 1rem;
        height: 0.3rem;
        font-size: 0.16rem;
        line-height: 0.3rem;
        background-color: red;
        color: white;
        text-align: center;
        margin: 0.2rem auto 0;
    }
</style>