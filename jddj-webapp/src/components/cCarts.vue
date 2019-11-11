<template>
    <div>
        <cHeader></cHeader>
        <cGoods></cGoods>
        <div class="buyBox">
            <div class="buyBox1">
                <input type="checkbox" class="checkall"/>全选
            </div>
            <div class="buyBox2">
                <p class="buyBox2p1">合计：<b>￥</b><span id="goods-total-price">0.00</span></p>
                <p class="buyBox2p2">总价：￥<span>0.00</span></p>
            </div>
            <div class="buyBox3">
                <p>去结算（<span id="goods-total-num">0</span>）</p>
            </div>
        </div>
    </div>
</template>

<script>
    import cHeader from "./cHeader";
    import cGoods from "./cGoods";
    export default {
        name: "cCarts",
        components:{
            cHeader,
            cGoods
        }
    }
</script>

<style scoped>
    .buyBox{
        display: flex;
        height: 0.5rem;
        font-size: 0.14rem;
        border: 1px solid gainsboro;
        position: fixed;
        bottom: 0;
        z-index: 99;
    }
    .buyBox1{
        width: 0.8rem;
        line-height: 0.5rem;
        font-size: 0.15rem;
    }
    .buyBox1 input{
        margin: 0 0.14rem;
    }
    .buyBox2{
        width: 2rem;
        font-size: 0.17rem;
    }
    .buyBox3{
        width: 1rem;
        line-height: 0.5rem;
        background-color: red;
        box-sizing: border-box;
    }
    .buyBox3 p{
        text-align: center;
        color: white;
        font-size: 0.16rem;
    }
    .buyBox2p1{
        line-height: 0.32rem;
    }
    .buyBox2p2{
        font-size: 0.12rem;
        padding-right: 0.2rem;
        line-height: 0.2rem;
        color: darkgrey;
    }
    .buyBox2p1 b,#goods-total-price{
        color: red;
        font-weight: bold;
    }
</style>