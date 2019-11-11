<template>
    <div class="box">
        <div class="personal">
            <p v-for="(u,index) in data" :key="index">{{u.account}}<span @click="logOut">{{u.word}}</span></p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "pLogout",
        props:["data"],
        methods:{
            logOut(){
                localStorage.removeItem('name')
                this.$router.push("/main/register")
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
    .personal span{
        display: inline-block;
        width: 0.7rem;
        text-align: center;
        margin-left: 0.2rem;
        color: black;
    }
</style>