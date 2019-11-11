<template>
    <div class="searchP">
        <form action="">
            <a @click="goBack" class="searchP-01"><img src="../assets/iconx.png" alt=""></a>
            <div>
                <input type="text" class="searchP-input">
                <span class="searchP-02"><img src="../assets/mic-icongray.png" alt=""></span>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "searchPage",
        methods:{
            goBack(){
                this.$router.go(-1)
            }
        }
    }
</script>

<style scoped>
    .searchP{
        height: 0.5rem;
        background-color: #f7f7f7;
        text-align: center;
        border-bottom: 1px solid #e2e2e2;
        box-sizing: border-box;
    }
    .searchP form{
        display: flex;
        justify-content: space-between;
    }
    .searchP form div{
        display: flex;
        margin-right: 0.2rem;
    }
   .searchP-01{
       display: block;
       width: 0.5rem;
       height: 0.5rem;
       vertical-align: middle;
   }
    .searchP-01 img{
        display: block;
        width: 40%;
        margin-top: 0.15rem;
        margin-left: 0.15rem;
    }
    .searchP-input{
        width: 2.6rem;
        height: 0.3rem;
        font-size: 0.16rem;
        margin: auto 0;
        border: 1px solid #eaeaea;
        border-top-left-radius: 0.05rem;
        border-bottom-left-radius: 0.05rem;
    }
    .searchP-02{
        display: block;
        width: 0.34rem;
        height: 0.34rem;
        vertical-align: middle;
        margin: auto 0;
        background-color: red;
        border-top-right-radius: 0.05rem;
        border-bottom-right-radius: 0.05rem;
    }
    .searchP-02 img{
        display: block;
        width: 70%;
        margin: 0.05rem;
    }
</style>