<template>
    <div class="box">
        <div class="personal" v-for="(u,index) in data" :key="index" >
            <p>{{u.word}}<span>{{u.num}}</span></p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "personalNews",
        props:["data"]
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