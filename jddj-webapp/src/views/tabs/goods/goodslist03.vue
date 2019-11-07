<template>
    <div class="goodslist03">
        <p>生活家电</p>
        <ul>
            <li v-for="(u,index) in goodslist03" :key="index"><a href=""><img :src="u.src" alt=""><span>{{u.word}}</span></a></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "goodslist03",
        data(){
            return{
                goodslist03:[
                    {
                        src:"./home-img/shjd01.jpg",
                        word:"家用电器"
                    },
                    {
                        src:"./home-img/shjd02.jpg",
                        word:"个用电器"
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .goodslist03 p{
        font-size: 0.16rem;
        border-left: 2px solid #f84646;
        height: 0.3rem;
        line-height: 0.3rem;
        margin-top: 0.1rem;
        margin-left: 0.1rem;
        padding-left: 0.1rem;
        box-sizing: border-box;
    }
    .goodslist03 ul{
        display: flex;
        flex-wrap: wrap;
        padding-left: 0.1rem;
        box-sizing: border-box;
    }
    .goodslist03 ul li a{
        display: block;
        width: 0.9rem;
        height: 1.1rem;
        text-align: center;
        font-size: 0.14rem;
        color: #848484;
    }
    .goodslist03 ul li a img{
        width: 100%;
    }
</style>