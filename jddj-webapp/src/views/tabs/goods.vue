<template>
    <div>
        <gHeader></gHeader>
        <div class="goods">
            <gClassify :data="data.list" @update="toUpdate"></gClassify>
            <gDetails :data="data.goodsList[d]" v-if="data.goodsList"></gDetails>
        </div>
        <footer-nav :data="markPoint"></footer-nav>
    </div>
</template>

<script>

    import gHeader from "../../components/gHeader";
    import gClassify from "../../components/gClassify";
    import gDetails from "../../components/gDetails";
    import footerNav from "../../components/footerNav";
    import api from "../../apis/api";
    export default {
        name: "goods",
        data(){
            return{
                d:0,
                data:[],
                markPoint:1
            }
        },
        components:{
            gHeader,
            gClassify,
            gDetails,
            footerNav
        },
        methods:{
            async _initGoodsData() {
                let data = await api.getGoodsData()
                this.data=data
                console.log(this.data.goodsList[0])
            },
            toUpdate(i){
                console.log(i);

                this.d=i
                console.log(this.d)
            }
        },
        created () {
            this._initGoodsData()
            // console.log(this.data)
        }
    }
</script>

<style scoped>
.goods{
    display: flex;
}
</style>