<template>
    <div class="search">
        <div class="searchBox">
            <span><img src="../assets/home-img/mic-icon.png" alt=""></span>
            <p>断码零利24H疯抢</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "search"
    }
</script>

<style scoped>
    .search{
        height: 0.5rem;
        background-color: #f8584f;
        padding: 0.08rem 0.175rem;
        box-sizing: border-box;
        position: fixed;
        top: 0;
        z-index: 10;
    }
    .searchBox{
        width: 3.4rem;
        height: 0.34rem;
        background-color: #fabca7;
        border-radius: 0.16rem;
        display: flex;
    }
    .searchBox span{
        width: 0.5rem;
        height: 0.34rem;
    }
    .searchBox span img{
        display: block;
        width: 0.25rem;
        margin-top: 0.045rem;
        margin-left: 0.125rem;
    }
    .searchBox p{
        width: 2.9rem;
        height: 0.34rem;
        line-height: 0.34rem;
        font-size: 0.14rem;
        color: white;
    }
</style>