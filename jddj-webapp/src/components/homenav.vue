<template>
    <div class="homenav">
        <a href="" v-for="(u,index) in data" :key="index"><img :src="u.s1" alt=""></a>
    </div>
</template>

<script>
    export default {
        name: "homenav",
        props:["data"]
    }
</script>

<style scoped>
    .homenav{
        height: 0.9rem;
        display: flex;
    }
    .homenav a{
        display: block;
        width: 0.75rem;
        height: 0.9rem;
    }
    .homenav a img{
        display: block;
        width: 100%;
    }

</style>