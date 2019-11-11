<template>
    <div class="homediscount">
        <a href="" v-for="(u,index) in data" :key="index"><img :src="u" alt=""></a>
    </div>
</template>

<script>
    export default {
        name: "homediscount",
        props:["data"]
    }
</script>

<style scoped>
    .homediscount{
        height: 3.1rem;
        display: flex;
        flex-wrap: wrap;
    }
    .homediscount a{
        display: block;
        width: 1.874rem;
        box-sizing: border-box;
    }
    .homediscount a img{
        display: block;
        width: 100%;
    }
</style>