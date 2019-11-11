<template>
    <div class="pHeader">
        <a  v-for="(u,index) in data" :key="index" class="ph">{{u.account}}</a>
<!--        <router-link to="register"  v-for="(u,index) in data" :key="index" class="ph">{{u.account}}</router-link>-->
        <div class="pbox">
            <span>普通会员</span>
<!--            <div></div>-->
            <span>铜卡</span>
            <span><img src="../assets/iconknow.png" alt=""></span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "pHeader",
        props:["data"],
    }
</script>

<style scoped>
    .pHeader{
        height: 0.9rem;
        background-color: red;
        padding: 0.15rem;
        box-sizing: border-box;
    }
    .ph{
        color: white;
        height: 0.3rem;
        font-size: 0.18rem;
        line-height: 0.3rem;
        font-weight: bold;
    }
    .pbox{
        height: 0.3rem;
    }
    .pbox span{
        display: inline-block;
        color: white;
        width: 0.6rem;
        height: 0.3rem;
        vertical-align: middle;
        line-height: 0.3rem;
        text-align: center;
        font-size: 0.14rem;
    }
    .pbox span:nth-child(2){
        position: absolute;
        right: 0.6rem;
    }
    .pbox span:nth-child(3){
        position: absolute;
        right: 0;
    }
    .pbox span img{
        width: 30%;
        vertical-align: middle;
    }
</style>