<template>
    <div class="goodslist01">
        <p>美妆个护</p>
        <ul>
            <li v-for="(u,index) in goodslist01" :key="index"><a href=""><img :src="u.src" alt=""><span>{{u.word}}</span></a></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "goodslist01",
        data(){
            return{
                goodslist01:[
                    {
                        src:"./home-img/mzgh01.jpg",
                        word:"美妆"
                    },
                    {
                        src:"./home-img/mzgh02.jpg",
                        word:"洗发护发"
                    },
                    {
                        src:"./home-img/mzgh03.jpg",
                        word:"口腔护理"
                    },
                    {
                        src:"./home-img/mzgh04.jpg",
                        word:"身体护理"
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .goodslist01 p{
        font-size: 0.16rem;
        border-left: 2px solid #f84646;
        height: 0.3rem;
        line-height: 0.3rem;
        margin-top: 0.1rem;
        margin-left: 0.1rem;
        padding-left: 0.1rem;
        box-sizing: border-box;
    }
    .goodslist01 ul{
        display: flex;
        flex-wrap: wrap;
        padding-left: 0.1rem;
        box-sizing: border-box;
    }
    .goodslist01 ul li a{
        display: block;
        width: 0.9rem;
        height: 1.1rem;
        text-align: center;
        font-size: 0.14rem;
        color: #848484;
    }
    .goodslist01 ul li a img{
        width: 100%;
    }
</style>