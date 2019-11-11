<template>
    <div class="hotitems">
        <a href="" v-for="(u,index) in data" :key="index"><img :src="u" alt=""></a>
    </div>
</template>

<script>
    export default {
        name: "hotitems",
        props:["data"]
    }
</script>

<style scoped>
    .hotitems{
        display: flex;
        flex-wrap: wrap;
    }
    .hotitems a{
        display: block;
        width: 1.249rem;
        height: 1.894rem;
    }
    .hotitems a img{
        display: block;
        width: 100%;
    }
</style>