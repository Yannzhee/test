<template>
    <div class="goodslist02">
        <p>家居生活</p>
        <ul>
            <li v-for="(u,index) in goodslist02" :key="index"><a href=""><img :src="u.src" alt=""><span>{{u.word}}</span></a></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "goodslist02",
        data(){
            return{
                goodslist02:[
                    {
                        src:"./home-img/jjsh01.jpg",
                        word:"居家日用"
                    },
                    {
                        src:"./home-img/jjsh02.jpg",
                        word:"厨房餐饮"
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .goodslist02 p{
        font-size: 0.16rem;
        border-left: 2px solid #f84646;
        height: 0.3rem;
        line-height: 0.3rem;
        margin-top: 0.1rem;
        margin-left: 0.1rem;
        padding-left: 0.1rem;
        box-sizing: border-box;
    }
    .goodslist02 ul{
        display: flex;
        flex-wrap: wrap;
        padding-left: 0.1rem;
        box-sizing: border-box;
    }
    .goodslist02 ul li a{
        display: block;
        width: 0.9rem;
        height: 1.1rem;
        text-align: center;
        font-size: 0.14rem;
        color: #848484;
    }
    .goodslist02 ul li a img{
        width: 100%;
    }
</style>