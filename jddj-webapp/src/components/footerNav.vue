<template>
    <div class="footerNav">
        <a :href="u.url" v-for="(u,index) in tab" :key="index" @click="tabClick(index)" :class="markPoint===index?'changeRed':'changeBlack'"><span><img :src="markPoint===index?u.afterIconImg:u.beforeIconImg"></span>{{u.word}}</a>
    </div>
</template>

<script>
    export default {
        name: "footerNav",
        data(){
            return{
                tab:[
                    {
                        word:"首页",
                        beforeIconImg:'./footer-img/home.png',
                        afterIconImg:'./footer-img/home01.png',
                        url:"#/"
                    },
                    {
                        word:"商品",
                        beforeIconImg:'./footer-img/goods.png',
                        afterIconImg:'./footer-img/goods01.png',
                        url:"#/main/goods/goodslist01"
                    },
                    {
                        word:"购物袋",
                        beforeIconImg:'./footer-img/shop.png',
                        afterIconImg:'./footer-img/shop01.png',
                        url:"#/main/carts"
                    },
                    {
                        word:"我的",
                        beforeIconImg:'./footer-img/personal.png',
                        afterIconImg:'./footer-img/personal01.png',
                        url:"#/main/personal"
                    }
                ],
                markPoint:0
            }
        },
        methods:{
            tabClick(index){
                // eslint-disable-next-line no-console
                console.log(index);
                this.markPoint=index;
            }
        }
    }
</script>

<style scoped>
    .footerNav{
        height: 0.51rem;
        display: flex;
        position: fixed;
        bottom: 0;
        background-color: #f7f7f7;
    }
    .footerNav a{
        display: block;
        width: 0.9375rem;
        line-height: 0.51rem;
        text-align: center;
    }
    .changeBlack{
        color: black;
    }
    .changeRed{
        color: red;
    }
    .footerNav a span{
        display: inline-block;
        width: 0.3047rem;
        vertical-align: middle;
        margin-right: 0.1rem;
    }
    .footerNav a span img{
        display: block;
        width: 100%;
    }
</style>