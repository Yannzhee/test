<template>
    <div class="cHeader">
        <a href=""><img src="../assets/iconback.png" alt=""></a>
        <div>购物袋</div>
        <a href=""><img src="../assets/iconupdown.png" alt=""></a>
    </div>
</template>

<script>
    export default {
        name: "cHeader"
    }
</script>

<style scoped>
    .cHeader{
        height: 0.5rem;
        background-color: #f7f7f7;
        text-align: center;
        border-bottom: 1px solid #e2e2e2;
        box-sizing: border-box;
    }
    .cHeader a{
        display: inline-block;
        width: 0.5rem;
        height: 0.5rem;
        vertical-align: middle;
        line-height: 0.5rem;
    }
    .cHeader a img{
        width: 50%;
        vertical-align: middle;
    }
    .cHeader div{
        width: 0.5rem;
        height: 0.5rem;
        display: inline-block;
        vertical-align: middle;
        line-height: 0.5rem;
        font-size: 0.14rem;
    }
</style>