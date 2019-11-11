<template>
    <div class="homeshop">
        <a href="" v-for="(u,index) in data" :key="index"><img :src="u" alt=""></a>
    </div>
</template>

<script>
    export default {
        name: "homeshop",
        props:["data"]
    }
</script>

<style scoped>
    .homeshop a{
        display: block;
        width: 3.75rem;
        height: 1.25rem;
    }
    .homeshop a img{
        display: block;
        width: 100%;
    }
</style>