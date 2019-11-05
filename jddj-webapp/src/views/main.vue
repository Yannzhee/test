<template>
    <div>
        <a href="#/">首页</a> | <a href="#/main/goods">商品</a> |
        <a href="#/main/carts">购物袋</a> | <a href="#/main/personal">我的</a>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "xmain"
    }
</script>

<style scoped>

</style>