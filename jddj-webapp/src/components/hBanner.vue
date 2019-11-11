<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(u,index) in data" :key="index"><a href=""><img :src="u" alt=""></a></div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
    import Swiper from "swiper"
    export default {
        name: "banner",
        props:["data"],
        mounted(){
            new Swiper ('.swiper-container', {
                loop: true,
                // 如果需要分页器
                pagination: {
                    el: '.swiper-pagination'
                },
                autoplay:true
            })
        }
    };

</script>

<style scoped>
    .swiper-container {
        width: 3.75rem;
        height: 1.875rem;
        margin-top: 0.5rem;
    }
    .swiper-slide img{
        display: block;
        width: 100%;
    }
</style>