<template>
    <div class="cart">
        <div class="header-container">
            <Header title="购物车"></Header>
        </div>
        <div class="adress-container">
            <div class="adress">地址...</div>
            <div class="edit">编辑商品</div>
        </div>
        <div class="order-container">
            <Order v-for="(item,index) in getCarGoods" :key="index" :itemIndex="index"></Order>
        </div>
        <div class="emptyBg" v-if="!getCarGoods.length">
            <img src="../../assets/images/buy-logo.png" alt="">
            <p>当前购物车为空！</p>
        </div>
        <div class="footer">
           <div class="option">
               <Radio :checked="ischecked" @checked="lock" @unchecked="unlock"></Radio>
               <p>全选</p>
           </div>
           <div class="money">
               总计：<span>{{getTotal.money | dollar}}</span>
           </div>
           <div class="checkOut" :class="{red:getTotal.num !== 0,grey:getTotal.num === 0}" @click="payTheBill">
               <span class="leads">去结算</span><span>({{getTotal.num}}件)</span>
           </div>
        </div>
    </div>
</template>
<script>
import Header from 'base/header/header';
import Order from 'components/orders/order';
import Radio from 'base/radio/radio';

import {mapGetters,mapActions} from 'vuex';

export default {
    data(){
        return{
            orderList:[],
            ischecked: true
        }
    },
    methods:{
        lock(){
            this.ischecked = true;
            var newarr = this.getCarGoods.map((item,index) =>{
                item.checked = true;
                return item;
            })
            this.changeCarGoods(newarr);
        },
        unlock(){
            this.ischecked = false;
            var newarr = this.getCarGoods.map((item,index) =>{
                item.checked = false;
                return item;
            })
            this.changeCarGoods(newarr);
        },
        payTheBill(){
            alert("总共: $"+this.getTotal.money)
        },
        ...mapActions(['changeCarGoods'])
    },
    computed:{
        ...mapGetters(['getCarGoods','getTotal'])
    },
    watch:{
        getTotal:function(){
            this.ischecked = this.getTotal.checkAll;
        }
    },
    components:{
        Header,
        Order,
        Radio
    },
    filters:{
        dollar:function(input){
            return "$"+input;   
        }
    }
}

</script>
<style lang="scss" scoped>
   .cart{
       .header-container{
           border-bottom: 1px solid rgba($color: #000000, $alpha: 0.3);
       }
       .adress-container{
           height: 50px;
           border-bottom: 1px solid rgba($color: #000000, $alpha: 0.3);
           display:flex;
           justify-content: space-between;
           align-items: center;
           padding: 0 5px;
           .adress{
               color:#666;
           }
           .edit{
               color:red;
           }
       }
       .footer{
            width: 100%;
            max-width: 640px;
            min-width: 240px;
            margin: 0 auto;
            height:50px;
            position: fixed;
            bottom:0;
            z-index: 99;
            border-top:1px solid #eee;
            background-color: #fff; 
            display: flex;
            padding: 0 5px;
            .option{
                width: 40px;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                p{
                    margin:3px 0 0;
                }
            }
            .money{
                flex: 1;
                display: flex;
                justify-content: flex-end;
                align-items: center;
                font-size: 1.3em;
            }
            .checkOut{
                width: 130px;
                 display: flex;
                justify-content: center;
                align-items: center;
                margin-left: 10px;
                color:#fff;
                .leads{
                   font-size: 1.5em; 
                }
                &.red{
                    background-color: #e4393c;
                }
                &.grey{
                    background-color: #666;
                }
            }
        }
        .emptyBg{
            position: fixed;
            left: 50%;
            top: 30%;
            transform: translate3d(-50%,-50%,0);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
   }
</style>
