<template>
    <div class="goodsClassify">
        <ul>
            <li v-for="(u,index) in list" :key="index" @click="tabsClick(index)" ><a :href="u.url" :class="marksPoint===index?'changeRed':'changeBlack'">{{u.word}}</a></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "goodsClassify",
        data(){
            return{
                list:[
                    {
                        word:"美妆个护",
                        url:"#/main/goods/goodslist01",
                    },
                    {
                        word:"家居生活",
                        url:"#/main/goods/goodslist02"
                    },
                    {
                        word:"生活家电",
                        url:"#/main/goods/goodslist03"
                    },
                    {
                        word:"男装",
                        url:"#/main/goods/goodslist04"
                    },
                    {
                        word:"女装",
                        url:"#/main/goods/goodslist05"
                    },
                    {
                        word:"儿童",
                        url:"#/main/goods/goodslist06"
                    },
                    {
                        word: "鞋履",
                        url:"#/main/goods/goodslist07"
                    },
                    {
                        word: "箱包",
                        url:"#/main/goods/goodslist08"
                    },
                    {
                        word: "内衣",
                        url:"#/main/goods/goodslist09"
                    },
                    {
                        word:"配饰",
                        url:"#/main/goods/goodslist10"
                    }
                ],
                marksPoint:0
            }
        },
        methods:{
            tabsClick(index){
                // eslint-disable-next-line no-console
                console.log(index);
                this.marksPoint=index;
            }
        }
    }
</script>

<style scoped>
    .goodsClassify{
        width: 0.9rem;
        height: 5.67rem;
        background-color: #f7f7f7;
    }
    .goodsClassify li a{
        display: block;
        width: 0.9rem;
        height: 0.46rem;
        line-height: 0.46rem;
        font-size: 0.15rem;
        padding-left: 0.2rem;
        box-sizing: border-box;
        border-bottom: 1px solid #e2e2e2;
    }
    .changeBlack{
        color: black;
        border-right: 1px solid #e2e2e2;
    }
    .changeRed{
        color: red;
        border-right: none;
    }
</style>