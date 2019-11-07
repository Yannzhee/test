<template>
    <div>
        <router-view></router-view>
        <footer-nav></footer-nav>
    </div>
</template>

<script>
    import footerNav from "../components/footerNav"
    export default {
        name: "xmain",
        components:{
            footerNav
        }
    }
</script>

<style scoped>

</style>