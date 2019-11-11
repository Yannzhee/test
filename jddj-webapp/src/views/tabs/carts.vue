<template>
    <div>
        <cCarts v-if="data"></cCarts>
        <cLog v-else></cLog>
    </div>
</template>

<script>
    import cLog from "../../components/cLog";
    import cCarts from "../../components/cCarts";
    var data=localStorage.getItem('name');
    console.log(data);
    export default {
        name: "carts",
        data(){
          return{
              data:data
          }
        },
        components:{
            cLog,
            cCarts
        }
    }
</script>

<style scoped>

</style>