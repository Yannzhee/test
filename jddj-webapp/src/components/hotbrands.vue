<template>
    <div class="hotbrands">
        <a href="" v-for="(u,index) in data" :key="index"><img :src="u" alt=""></a>
    </div>
</template>

<script>
    export default {
        name: "hotbrands",
        props:["data"]
    }
</script>

<style scoped>
    .hotbrands{
        display: flex;
        flex-wrap: wrap;
    }
    .hotbrands a{
        display: block;
        width: 1.249rem;
        height: 2.0rem;
    }
    .hotbrands a img{
        display: block;
        width: 100%;
    }
</style>