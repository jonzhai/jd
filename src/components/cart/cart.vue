<template>
    <div class="cart">
        <div class="header-container">
            <Header title="购物车"></Header>
        </div>
        <div :class="{option:true,active:show}"><span v-show="show" class="glyphicon glyphicon-ok"></span></div>
    </div>
</template>
<script>
import Header from 'src/base/header/header'

export default {
    data(){
        return{
            show: true
        }
    },
    mounted:function(){
        console.log(this.$router,this.$route)
    },
    components:{
        Header
    }
}

</script>
<style lang="scss" scoped>
    .option{
        height: 20px;
        width: 20px;
        border-radius: 50%;
        border: 1px solid rgba(0,0,0,0.7); 
        &.active{
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #f00;
            color: #fff;
            font-size: 10px;
            border: 0;
        }
    }
</style>
