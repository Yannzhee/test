<template>
    <div class="box">
        <div class="personal" v-for="(u,index) in allOrders" :key="index" >
            <p>{{u.word}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "allOrders",
        data(){
            return{
                allOrders:[
                    {word:"全部订单"}
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
</style>