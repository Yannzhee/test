<template>
    <div class="headerNav">
        <div :class="{to_active:shows===1}" @click="classify">
            <span>分类</span>
        </div>
        <div :class="{to_active:shows===2}" @click="brand">
            <span>品牌</span>
        </div>
        <a href="#/main/searchPage" class="searchFor"><img src="../assets/mic-icongray.png" alt=""></a>
    </div>
</template>

<script>
    export default {
        name: "headerNav",
        data(){
          return{
              shows:1
          }
        },
        methods:{
            classify(){
                this.shows=1;
            },
            brand(){
                this.shows=2;
            }
        }
    }
</script>

<style scoped>
    .headerNav{
        width: 100%;
        height: 0.5rem;
        background-color: #f7f7f7;
        text-align: center;
        border-bottom: 1px solid #e2e2e2;
        box-sizing: border-box;
        position: fixed;
        top: 0;
        z-index: 10;
    }
    .headerNav div{
        display: inline-block;
    }
    .headerNav div span{
        display: block;
        width: 1rem;
        height: 0.45rem;
        line-height: 0.45rem;
        font-size: 0.175rem;
    }
    .searchFor{
        display: inline-block;
        width: 0.5rem;
        height: 0.45rem;
        position: absolute;
        right: 0.08rem;
        top: 0.05rem;
    }
    .searchFor img{
        display: block;
        width: 0.3rem;
        margin-top: 0.045rem;
        margin-left: 0.125rem;
    }
    .to_active {
        border-bottom: 4px solid red;
        color: red;
    }
</style>