<template>
    <div class="box">
        <div class="personal" v-for="(u,index) in personalNews" :key="index" >
            <p>{{u.word}}<span>{{u.num}}</span></p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "personalNews",
        data(){
            return{
                personalNews:[
                    {word:"我的积分", num:"0"},
                    {word:"我的优惠券", num:"0"},
                    {word:"我的邦购币", num:"0"},
                    {word:"我的打折券", num:"0"},
                    {word:"我的包邮券", num:"0"},
                    {word:"会员卡管理", num:"0"},
                ]
            }
        }
    }
</script>

<style scoped>
    .box{
        border-bottom: 1px solid #eaeaea;
    }
    .personal{
        height: 0.5rem;
    }
    .personal p{
        font-size: 0.16rem;
        color: black;
        line-height: 0.5rem;
        border-top: 1px solid #eaeaea;;
        padding-left: 0.2rem;
        box-sizing: border-box;
    }
    .personal span{
        display: inline-block;
        width: 0.7rem;
        text-align: center;
        margin-left: 1.5rem;
        color: gray;
    }
</style>