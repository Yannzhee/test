<template>
    <div class="register">
        <div class="register01" @click="backHome"><img src="../assets/registerLogo.png" alt=""></div>
        <div class="register03">
            <div class="register03-d1">
                <div><input type="text" placeholder="请输入手机号" ref="input1"></div>
                <div>获取验证码</div>
            </div>
            <div class="register03-d2">
                <div><input type="text" placeholder="请输入图片验证码"></div>
                <div></div>
            </div>
            <div class="register03-d3">
                <input type="text" placeholder="请输入密码" ref="input2">
            </div>
            <div class="register03-d3">
                <input type="text" placeholder="请再次输入密码">
            </div>
            <div class="register03-d3">
                <input type="text" placeholder="邀请人手机号">
            </div>
        </div>
        <a href="#/main/register" class="register04" @click="logIn">注册</a>
        <div class="register05">
            <a href="#/main/register">已有账号？点此登录</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "registerLog",
        methods:{
            backHome(){
                this.$router.push('/main')
            },
            logIn(){
                console.log(this.$refs.input1.value);
                console.log(this.$refs.input2.value);
                localStorage.setItem('name',this.$refs.input1.value)
            }
        }
    }
</script>

<style scoped>
    .register01{
        width: 0.75rem;
        height: 1.05rem;
        margin:0.2rem 1.5rem;
        padding: 0.3rem 0 0;
        box-sizing: border-box;
    }
    .register01 img{
        width: 100%;
    }
    .register03-d1,.register03-d2{
        display: flex;
        justify-content: space-between;
        padding: 0 0.2rem;
        box-sizing: border-box;
        margin-top: 0.2rem;
    }
    .register03-d1 div:nth-child(1){
        display: inline-block;
        width: 1.8rem;
        height: 0.48rem;
        border: 1px solid #c7c7c7;
        border-radius: 0.05rem;
        text-align: center;
        padding: 0.04rem 0.1rem;
        box-sizing: border-box;
    }
    .register03-d2 div:nth-child(1){
        display: inline-block;
        width: 2.2rem;
        height: 0.48rem;
        border: 1px solid #c7c7c7;
        border-radius: 0.05rem;
        text-align: center;
        padding: 0.04rem 0.1rem;
        box-sizing: border-box;
    }
    .register03-d3{
        width: 3.3rem;
        height: 0.48rem;
        border: 1px solid #c7c7c7;
        border-radius: 0.05rem;
        text-align: center;
        padding: 0.04rem 0.1rem;
        box-sizing: border-box;
        margin: 0.2rem auto 0;
    }
    .register03-d1 div:nth-child(1) input{
        width: 1.6rem;
    }
    .register03-d2 div:nth-child(1) input{
        width: 2rem;
    }
    .register03-d3 input{
        width: 3.1rem;
    }
    .register03-d1 div:nth-child(2){
        display: inline-block;
        width: 1.23rem;
        height: 0.4rem;
        line-height: 0.4rem;
        text-align: center;
        border-radius: 0.05rem;
        font-size: 0.16rem;
        color: white;
        background-color: red;
    }
    .register03-d2 div:nth-child(2){
        display: inline-block;
        width: 1rem;
        height: 0.45rem;
        background-color: gray;
        border-radius: 0.05rem;
    }
    .register03-d1 input,.register03-d2 input,.register03-d3 input{
        height: 0.4rem;
        line-height: 0.4rem;
        border: none;
        outline: none;
        font-size: 0.18rem;
        color: #919191;
    }
    .register04{
        display: block;
        width: 3.3rem;
        height: 0.48rem;
        line-height: 0.48rem;
        font-size: 0.22rem;
        border-radius: 0.05rem;
        text-align: center;
        background-color: red;
        color: white;
        margin: 0.2rem auto 0;
    }
    .register05{
        height: 0.8rem;
        padding: 0.26rem;
        box-sizing: border-box;
        text-align: center;
        font-size: 0.21rem;
        color: #919191;
    }
    .register05 a{
        color: #919191;
    }
</style>