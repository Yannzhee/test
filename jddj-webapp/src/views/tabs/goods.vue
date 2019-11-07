<template>
    <div>
        <gHeader></gHeader>
        <div class="goods">
            <gClassify></gClassify>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>

    import gHeader from "../../components/gHeader";
    import gClassify from "../../components/gClassify";
    export default {
        name: "goods",
        components:{
            gHeader,
            gClassify
        }
    }
</script>

<style scoped>
.goods{
    display: flex;
}
</style>