<template>
    <div class="goodsClassify">
        <ul>
            <li v-for="(u,index) in data" :key="index" @click="tabsClick(index)" ><a :class="marksPoint===index?'changeRed':'changeBlack'">{{u}}</a></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "goodsClassify",
        props:["data"],
        data(){
            return{
                marksPoint:0
            }
        },
        methods:{
            tabsClick(index){
                // eslint-disable-next-line no-console
                // console.log(index);
                this.marksPoint=index;
                this.$emit("update",index);
            }
        }
    }
</script>

<style scoped>
    .goodsClassify{
        width: 0.9rem;
        height: 5.67rem;
        background-color: #f7f7f7;
        position: fixed;
        top: 0.5rem;
    }
    .goodsClassify li a{
        display: block;
        width: 0.9rem;
        height: 0.46rem;
        line-height: 0.46rem;
        font-size: 0.15rem;
        padding-left: 0.2rem;
        box-sizing: border-box;
        border-bottom: 1px solid #e2e2e2;
    }
    .changeBlack{
        color: black;
        border-right: 1px solid #e2e2e2;
    }
    .changeRed{
        color: red;
        border-right: none;
    }
</style>