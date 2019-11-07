<template>
    <div class="headerNav">
        <div>
            <a href="">分类</a>
        </div>
        <div>
            <a href="">品牌</a>
        </div>
        <a href="" class="searchFor"><img src="../assets/mic-icongray.png" alt=""></a>
    </div>
</template>

<script>
    export default {
        name: "headerNav"
    }
</script>

<style scoped>
    .headerNav{
        height: 0.5rem;
        background-color: #f7f7f7;
        text-align: center;
        border-bottom: 1px solid #e2e2e2;
        box-sizing: border-box;
    }
    .headerNav div{
        display: inline-block;
    }
    .headerNav div a{
        display: block;
        width: 1rem;
        height: 0.45rem;
        line-height: 0.45rem;
        font-size: 0.175rem;
        color: black;
        /*border-bottom: 3px solid #f8584f;*/
    }
    .searchFor{
        display: inline-block;
        width: 0.5rem;
        height: 0.45rem;
        position: absolute;
        right: 0.08rem;
        top: 0.05rem;
    }
    .searchFor img{
        display: block;
        width: 0.3rem;
        margin-top: 0.045rem;
        margin-left: 0.125rem;
    }
</style>