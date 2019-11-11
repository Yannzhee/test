<template>
    <div>
        <div class="gDetails">
            <a v-if="data.topImage" class="topD">
                <img :src="data.topImage" alt="" class="top" >
            </a>
            <p>{{data.title01}}</p>
            <div v-for="(u,index) in data.section01" :key="'infoA'+index">
                <img :src="u.src">
                <span>{{u.word}}</span>
            </div>
            <p v-if="data.title02">{{data.title02}}</p>
            <div v-for="(u,index) in data.section02" :key="'infoB'+index">
                <img :src="u.src">
                <span>{{u.word}}</span>
            </div>
            <p v-if="data.title03">{{data.title03}}</p>
            <div v-for="(u,index) in data.section03" :key="'infoC'+index">
                <img :src="u.src">
                <span>{{u.word}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "gDetails",
        props:["data"]
    }
</script>

<style scoped>
    .gDetails{
        padding:0 0.05rem;
        box-sizing: border-box;
        margin-bottom: 0.8rem;
        margin-top: 0.6rem;
        margin-left: 0.9rem;
    }
    .topD{
        display: block;
        padding-top: 0.1rem;
        box-sizing: border-box;
    }
    .top{
        display: block;
        width: 100%;
        height: 1rem;
    }
    .gDetails p{
        font-size: 0.16rem;
        height: 0.28rem;
        line-height: 0.26rem;
        padding-left: 0.2rem;
        box-sizing: border-box;
        border-left: 2px solid #f84646;
        margin-top: 0.1rem;
    }
    .gDetails div{
        width: 0.8rem;
        height: 1.08rem;
        display: inline-block;
        margin: 0 0 0 0.1rem;
    }
    .gDetails div img{
        width: 100%;
    }
    .gDetails div span{
        display: block;
        text-align: center;
        font-size: 0.12rem;
        color: #848484;
    }
</style>