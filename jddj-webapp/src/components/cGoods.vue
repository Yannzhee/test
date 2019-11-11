<template>
    <div class="section">
        <div class="GoodsTitle">
            <input type="checkbox">
            <p>邦购</p>
            <span>满99包邮</span>
        </div>
        <div class="GoodsBox">
            <div class="Ckbox"><input type="checkbox" class="check"></div>
            <div class="photo"><img src="../../public/assets/cGoods01.jpg" alt=""></div>
            <div class="introduce">
                <div>
                    <p>时尚休闲连帽长袖卫衣</p>
                    <span class="wordJ">包邮</span>
                    <span class="wordK">不可用红包</span>
                </div>
                <p class="wordM">￥<b>39.9</b>&nbsp;&nbsp;<span>￥52.8</span></p>
            </div>
            <div class="use">
                <div class="usebox">
                    <span class="decrement">-</span><span class="goods-num">1</span><span class="increment">+</span>
                </div>
            </div>
            <div class="delete"><img src="../../public/assets/delete.png" alt=""></div>
            <p class="wordN">满减&nbsp;&nbsp;<span>满1件，即享12.9元优惠</span></p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "cGoods"
    }
</script>

<style scoped>
    .GoodsTitle{
        font-size: 0.17rem;
        height: 0.5rem;
        line-height: 0.5rem;
        border-bottom:1px solid gainsboro;
    }
    .GoodsTitle input{
        display: inline-block;
        margin: 0 0.14rem;
    }
    .GoodsTitle p{
        display: inline-block;
        margin-right: 2rem;
    }
    .GoodsTitle span{
        display: inline-block;
        color: red;
    }
    .delete{
        width: 0.22rem;
        position: absolute;
        top: 0.1rem;
        left: 3.3rem;
    }
    .delete img{
        width: 100%;
    }
    .use{
        position: absolute;
        top: 0.5rem;
        left: 3rem;
    }
    .GoodsBox{
        position: relative;
        font-size: 0.14rem;
        border-bottom: 1px solid gainsboro;
    }
    .Ckbox{
        width: 0.14rem;
        height: 0.14rem;
        margin: 0 0.14rem 0 0.14rem;
        display: inline-block;
        position: relative;
    }
    .check{
        width: 0.14rem;
        height: 0.14rem;
    }
    .photo{
        width: 0.8rem;
        display: inline-block;
        box-sizing: border-box;
        vertical-align: middle;
    }
    .photo img{
        width: 100%;
    }
    .introduce{
        display: inline-block;
        width: 1.8rem;
        vertical-align: middle;
        padding-left: 0.1rem;
        box-sizing: border-box;
    }
    .wordJ{
        display: inline-block;
        color: white;
        background-color: red;
        width: 0.4rem;
        text-align: center;
        border-radius: 0.05rem;
    }
    .wordK{
        display: inline-block;
        text-align: center;
        color: white;
        width: 0.8rem;
        background-color: #c7c7c7;
        border-radius: 0.05rem;
        margin-left: 0.05rem;
    }
    .wordM{
        font-size: 0.16rem;
        font-weight: bold;
        color: red;
    }
    .wordM span{
        font-size: 0.14rem;
        font-weight: normal;
        color: darkgrey;
        text-decoration: line-through;
    }
    .usebox{
        width: 0.6rem;
        text-align: center;
        display: flex;
        justify-content: space-between;
        border: 1px solid gainsboro;
        border-radius: 0.06rem;
    }
    .usebox span:nth-child(1),.usebox span:nth-child(3){
        width: 0.18rem;
    }
    .usebox span:nth-child(2){
        width: 0.24rem;
        border-left: 1px solid gainsboro;
        border-right: 1px solid gainsboro;
    }
    .wordN{
        margin-left: 0.4rem;
        border-top: 1px solid gainsboro;
        line-height: 0.3rem;
    }
    .wordN span{
        color: darkgrey;
    }
</style>