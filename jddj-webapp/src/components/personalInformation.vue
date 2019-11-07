<template>
    <div class="box">
        <div class="personalM" v-for="(u,index) in personalNews" :key="index" >
            <p>{{u.word}}<span>{{u.num}}</span></p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "personalInformation",
        data(){
            return{
                personalNews:[
                    {word:"绑定手机号", num:"177****1992"},
                    {word:"修改密码"}
                ]
            }
        }
    }
</script>

<style scoped>
    .box{
        border-bottom: 1px solid #eaeaea;
    }
    .personalM{
        height: 0.5rem;
    }
    .personalM p{
        font-size: 0.16rem;
        color: black;
        line-height: 0.5rem;
        border-top: 1px solid #eaeaea;
        padding-left: 0.2rem;
        box-sizing: border-box;
    }
    .personalM span{
        display: inline-block;
        width: 0.7rem;
        text-align: center;
        margin-left: 1.5rem;
        color: gray;
    }
</style>